


// import express from "express";
// import Inquiry from "../models/Inquiry.js";
// import Application from "../models/Application.js";
// import User from "../models/User.js";
// import Payment from "../models/Payments.js";

// const router = express.Router();

// router.get("/stats", async (req, res) => {
//   try {
//     const totalInquiries = await Inquiry.countDocuments();

//     const totalAdmissions = await Application.countDocuments({
//       status: "Approved",
//     });

//     const totalUsers = await User.countDocuments();

//     const totalRevenue = await Payment.aggregate([
//       { $match: { status: "Completed" } },
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     res.json({
//       inquiries: totalInquiries,
//       admissions: totalAdmissions,
//       users: totalUsers,
//       revenue: totalRevenue[0]?.total || 0,
//     });
//   } catch (err) {
//     console.error("❌ Dashboard stats error:", err);
//     res.status(500).json({ error: "Failed to fetch stats" });
//   }
// });

// export default router;



import express from "express";
import Inquiry from "../models/Inquiry.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import Payment from "../models/Payments.js";

const router = express.Router();

// ---------------------------------------------
// GET /api/dashboard/stats
// ---------------------------------------------
router.get("/stats", async (req, res) => {
  try {
    const inquiries = await Inquiry.countDocuments();
    const applications = await Application.countDocuments();
    const admissionsApproved = await Application.countDocuments({ status: "Approved" });
    const users = await User.countDocuments();

    const revenueAgg = await Payment.aggregate([
      { $match: { status: "Completed" } },
      { $group: { _id: null, total: { $sum: { $toDouble: "$amount" } } } },
    ]);

    const revenue = revenueAgg.length ? revenueAgg[0].total : 0;

    return res.json({
      inquiries,
      applications,
      admissionsApproved,
      users,
      revenue,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Stats fetch error" });
  }
});

// ---------------------------------------------
// GET /api/dashboard/recent
// ---------------------------------------------
router.get("/recent", async (req, res) => {
  try {
    const [inq, apps, pays] = await Promise.all([
      Inquiry.find().sort({ createdAt: -1 }).limit(5).lean(),
      Application.find().sort({ updatedAt: -1 }).limit(5).lean(),
      Payment.find().sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    const combined = [
      ...inq.map((i) => ({
        type: "inquiry",
        title: i.fullName || i.applicantName || "",
        subtitle: i.email || "",
        date: i.createdAt,
      })),
      ...apps.map((a) => ({
        type: "admission",
        title: a.applicantName || "",
        subtitle: a.course,
        date: a.updatedAt,
      })),
      ...pays.map((p) => ({
        type: "payment",
        title: p.studentName || "",
        subtitle: `${p.amount} • ${p.status}`,
        date: p.createdAt,
      })),
    ];

    combined.sort((a, b) => new Date(b.date) - new Date(a.date));

    return res.json({ recent: combined.slice(0, 10) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Recent list error" });
  }
});

export default router;
