

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
