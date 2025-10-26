


import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ Get single user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update user profile
router.put("/:id", async (req, res) => {
  try {
    const { fullName, email, phone } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { fullName, email, phone },
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
