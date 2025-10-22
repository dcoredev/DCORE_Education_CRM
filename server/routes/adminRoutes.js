// server/routes/adminRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ Fetch logged-in admin details (for now: just get the first Admin)
router.get("/profile", async (req, res) => {
  try {
    const adminUser = await User.findOne({ role: "Admin" });

    if (!adminUser) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.json(adminUser);
  } catch (err) {
    console.error("❌ Error fetching admin profile:", err);
    res.status(500).json({ error: "Failed to fetch admin profile" });
  }
});

export default router;
