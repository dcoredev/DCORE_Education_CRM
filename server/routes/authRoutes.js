

// //3
// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";

// const router = express.Router();

// // 🔹 Login Route
// router.post("/login", async (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   try {
//     // find user by email or phone
//     const user = await User.findOne({
//       $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
//     });

//     if (!user) return res.status(404).json({ error: "User not found" });

//     // check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     // send full user info
//     res.json({
//       _id: user._id,
//       fullName: user.fullName,
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Server error during login" });
//   }
// });

// export default router;



import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 🔹 SIGNUP ROUTE (no hashing)
router.post("/signup", async (req, res) => {
  const { fullName, email, phone, password, role } = req.body;

  try {
    // check if email or phone already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ error: "Email or phone already exists" });
    }

    const newUser = new User({
      fullName,
      email,
      phone,
      password, // stored as plain text ❗
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error during signup" });
  }
});

// 🔹 LOGIN ROUTE (no hashing)
router.post("/login", async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // simple text comparison
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid password" });
    }

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
