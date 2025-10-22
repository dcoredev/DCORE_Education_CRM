



// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const router = express.Router();

// // ✅ Signup route
// router.post("/signup", async (req, res) => {
//   try {
//     const { fullName, email, phone, password, role } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({
//       fullName,
//       email,
//       phone,
//       password: hashedPassword,
//       role: role || "Student",
//     });

//     await newUser.save();

//     // Respond success
//     res.status(201).json({
//       message: "Signup successful!",
//       user: {
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         email: newUser.email,
//         role: newUser.role,
//       },
//     });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ error: "Server error during signup" });
//   }
// });

// // ✅ Login route
// router.post("/login", async (req, res) => {
//   const { emailOrPhone, password } = req.body;
//   try {
//     const user = await User.findOne({
//       $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
//     });

//     if (!user) return res.status(404).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     // Optional: generate JWT
//     // const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1d" });

//     res.json({
//       message: "Login successful!",
//       _id: user._id,
//       fullName: user.fullName,
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       // token,
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Server error during login" });
//   }
// });

// export default router;


//2
// server/routes/authRoutes.js
// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";

// const router = express.Router();

// // Signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { fullName, email, phone, password, role } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ error: "Email exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ fullName, email, phone, password: hashedPassword, role: role || "Student" });
//     await newUser.save();

//     res.status(201).json({ message: "Signup successful!", _id: newUser._id, fullName: newUser.fullName, email: newUser.email, role: newUser.role });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error during signup" });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   const { emailOrPhone, password } = req.body;
//   try {
//     const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });
//     if (!user) return res.status(404).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     res.json({ _id: user._id, fullName: user.fullName, email: user.email, phone: user.phone, role: user.role });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error during login" });
//   }
// });

// export default router;


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
