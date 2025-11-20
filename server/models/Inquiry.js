import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  inquiryDate: { type: Date, required: true },
  name: { type: String, required: true, trim: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dob: { type: Date },
  contactNumber: { type: String, required: true, unique: true },
  alternateNumber: { type: String },
  email: { type: String, required: true, unique: true, lowercase: true },
  address: { type: String },
  education: { type: String },
  occupation: { type: String, enum: ["Student", "Working Professional", "Other"] },
  courses: { type: String, required: true },
  mode: { type: String, enum: ["Online", "Offline", "Hybrid"] },
  knowledge: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] },
  batchTiming: { type: String, enum: ["Morning", "Afternoon", "Evening"] },
  startDate: { type: Date },
  source: { type: String, enum: ["Social Media", "Google", "Reference", "Other"] },
  remarks: { type: String },
  inquiryTakenBy: { type: String }
}, { timestamps: true });

export default mongoose.model("Inquiry", InquirySchema);
