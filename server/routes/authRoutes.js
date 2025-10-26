

//3
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// 🔹 Login Route
router.post("/login", async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    // find user by email or phone
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    // send full user info
    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error during login" });
  }
});

export default router;
