// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // GET all users (for Admin dashboard)
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET user by name (search)
// router.get("/search", async (req, res) => {
//   try {
//     const query = req.query.q?.toLowerCase();
//     if (!query) return res.json([]);

//     const users = await User.find({
//       $or: [
//         { fullName: { $regex: query, $options: "i" } },
//         { email: { $regex: query, $options: "i" } },
//       ],
//     });

//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // CREATE user (admin adding new student)
// router.post("/", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;

// server/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({ role: "Student" });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add student (optional)
router.post("/add", async (req, res) => {
  try {
    const { fullName, email, phone } = req.body;
    const student = new User({ fullName, email, phone, role: "Student" });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
