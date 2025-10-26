


import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ["Cash","UPI","Card","NetBanking","Other"], default: "Cash" },
  status: { type: String, enum: ["Pending","Completed","Failed"], default: "Pending" },
  description: { type: String, trim: true },
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
