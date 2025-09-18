import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

// POST - Save Inquiry
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry saved", inquiry });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All Inquiries
router.get("/", async (req, res) => {
  const inquiries = await Inquiry.find();
  res.json(inquiries);
});

export default router;
