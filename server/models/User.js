


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  role: { type: String, enum: ["Student", "Admin"], default: "Student" },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
