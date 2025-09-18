import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// Create Application
// Create Application
router.post("/", async (req, res) => {
  console.log("📩 Incoming request body:", req.body); // log data coming from frontend

  try {
    const application = new Application(req.body);
    await application.save();
    console.log("✅ Saved Application:", application);

    res.status(201).json({ message: "✅ Application submitted", application });
  } catch (err) {
    console.error("❌ Error saving application:", err.message);
    res.status(500).json({ error: err.message });
  }
});



// Get all Applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single Application
router.get("/:id", async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);
    if (!app) return res.status(404).json({ error: "Application not found" });
    res.json(app);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
