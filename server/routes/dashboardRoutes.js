// // server/routes/dashboardRoutes.js
// const express = require("express");
// const router = express.Router();

// const Inquiry = require("../models/Inquiry");
// const Application = require("../models/Application");
// const User = require("../models/User");
// const Payment = require("../models/Payments");

// router.get("/stats", async (req, res) => {
//   try {
//     const totalInquiries = await Inquiry.countDocuments();

//     // ⚠️ Important: Only counts "Approved" admissions
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

// module.exports = router;


import express from "express";
import Inquiry from "../models/Inquiry.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import Payment from "../models/Payments.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const totalInquiries = await Inquiry.countDocuments();

    const totalAdmissions = await Application.countDocuments({
      status: "Approved",
    });

    const totalUsers = await User.countDocuments();

    const totalRevenue = await Payment.aggregate([
      { $match: { status: "Completed" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      inquiries: totalInquiries,
      admissions: totalAdmissions,
      users: totalUsers,
      revenue: totalRevenue[0]?.total || 0,
    });
  } catch (err) {
    console.error("❌ Dashboard stats error:", err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

export default router;
