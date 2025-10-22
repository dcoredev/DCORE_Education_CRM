// import express from "express";
// import User from "../models/User.js";

// const router = express.Router();

// // GET user by ID
// router.get("/:id", async (req, res) => {
//   console.log("📩 Fetching student with ID:", req.params.id);
//   try {
//     const student = await User.findById(req.params.id);
//     if (!student) return res.status(404).json({ error: "Student not found" });
//     res.json(student);
//   } catch (err) {
//     console.error("❌ Error fetching student:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;


import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ Fetch student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await User.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ error: "Server error fetching student" });
  }
});

export default router;
