// import express from "express";
// import Payment from "../models/Payments.js";
// import User from "../models/User.js";
// import Fee from "../models/Fee.js";

// const router = express.Router();

// // @POST /api/payments
// router.post("/", async (req, res) => {
//   try {
//     const { studentId, amount, method, description } = req.body;

//     const student = await User.findById(studentId);
//     if (!student || student.role !== "Student") {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     const payment = new Payment({
//       studentId,
//       amount: parseFloat(amount),
//       method,
//       description,
//       status: "Completed",
//     });

//     await payment.save();

//     const fee = await Fee.findOne({ studentId });
//     if (fee) {
//       await fee.updateStatus();
//     }

//     res.status(201).json({ message: "Payment recorded successfully", payment });
//   } catch (err) {
//     console.error("Error saving payment:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // @POST /api/payments/assign-fee
// router.post("/assign-fee", async (req, res) => {
//   try {
//     const { studentId, total, deposit, monthly, final, notes } = req.body;

//     const student = await User.findById(studentId);
//     if (!student || student.role !== "Student") {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     let fee = await Fee.findOne({ studentId });
//     if (fee) {
//       fee.total = parseFloat(total);
//       fee.deposit = parseFloat(deposit);
//       fee.monthly = parseFloat(monthly);
//       fee.final = parseFloat(final);
//       fee.notes = notes;
//     } else {
//       fee = new Fee({
//         studentId,
//         total: parseFloat(total),
//         deposit: parseFloat(deposit),
//         monthly: parseFloat(monthly),
//         final: parseFloat(final),
//         notes,
//       });
//     }
//     await fee.save();
//     await fee.updateStatus();

//     res.status(201).json({ message: "Fee assigned/updated successfully", fee });
//   } catch (err) {
//     console.error("Error assigning fee:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // @GET /api/payments
// router.get("/", async (req, res) => {
//   try {
//     const payments = await Payment.find().sort({ createdAt: -1 });
//     res.json(payments);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // @GET /api/payments/:studentId
// router.get("/:studentId", async (req, res) => {
//   try {
//     const { studentId } = req.params;
//     const payments = await Payment.find({ studentId }).sort({ createdAt: -1 });
//     const fee = await Fee.findOne({ studentId });

//     if (!fee) {
//       return res.status(404).json({ message: "Fee structure not found for this student" });
//     }

//     await fee.updateStatus();

//     res.json({
//       fees: {
//         total: fee.total,
//         deposit: fee.deposit,
//         monthly: fee.monthly,
//         final: fee.final,
//         status: fee.status,
//       },
//       payments,
//     });
//   } catch (err) {
//     console.error("Error fetching student payments:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;

import express from "express";
import Fee from "../models/Fee.js";
import Payment from "../models/Payments.js";
import User from "../models/User.js";

const router = express.Router();

// Assign/update fee
router.post("/assign-fee", async (req, res) => {
  const { studentId, total, deposit, monthly, final, notes } = req.body;
  try {
    const student = await User.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    let fee = await Fee.findOne({ studentId });
    if (fee) {
      fee.total = total; fee.deposit = deposit; fee.monthly = monthly; fee.final = final; fee.notes = notes;
    } else {
      fee = new Fee({ studentId, total, deposit, monthly, final, notes });
    }
    await fee.save();
    res.json({ message: "Fee assigned/updated", fee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get fee for a student
router.get("/:studentId", async (req, res) => {
  try {
    const fee = await Fee.findOne({ studentId: req.params.studentId });
    const payments = await Payment.find({ studentId: req.params.studentId });
    res.json({ fees: fee || {}, payments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
