const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");
const Admission = require("../models/Application");

// 🔹 GET all enquiries
router.get("/enquiries", async (req, res) => {
  try {
    const enquiries = await Inquiry.find({});
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 GET all admissions
router.get("/admissions", async (req, res) => {
  try {
    const admissions = await Admission.find({});
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
