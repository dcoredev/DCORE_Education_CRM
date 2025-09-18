import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import inquiryRoutes from "./routes/inquiryRoute.js"; // ✅ Make sure path is correct
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";


const app = express();

// ✅ Middleware
app.use(express.json()); // Parse JSON body
app.use(cors({ origin: "http://localhost:3000" })); // Allow React frontend

// ✅ Routes
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", studentRoutes);
app.use("/api/applications", applicationRoutes);

// ✅ MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ITAcademyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
