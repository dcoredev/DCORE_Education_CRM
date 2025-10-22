// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema(
//   {
//     studentId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Completed", "Failed"],
//       default: "Pending",
//     },
//     method: {
//       type: String,
//       enum: ["Cash", "UPI", "Card", "NetBanking", "Other"],
//       default: "Cash",
//     },
//     description: {
//       type: String,
//       trim: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Payment", paymentSchema);

// models/Payment.js
// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema(
//   {
//     studentId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Completed", "Failed"],
//       default: "Pending",
//     },
//     method: {
//       type: String,
//       enum: ["Cash", "UPI", "Card", "NetBanking", "Other"],
//       default: "Cash",
//     },
//     description: {
//       type: String,
//       trim: true,
//       default: "",
//     },
//   },
//   { timestamps: true }
// );

// // Post-save hook: Update Fee status whenever a payment is made
// paymentSchema.post("save", async function () {
//   try {
//     // Avoid circular dependency
//     const Fee = mongoose.model("Fee");

//     // Find the fee for this student
//     const fee = await Fee.findOne({ studentId: this.studentId });
//     if (fee) {
//       await fee.updateStatus();
//     }
//   } catch (err) {
//     console.error("Error updating fee status:", err);
//   }
// });

// export default mongoose.model("Payment", paymentSchema);


import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ["Cash","UPI","Card","NetBanking","Other"], default: "Cash" },
  status: { type: String, enum: ["Pending","Completed","Failed"], default: "Pending" },
  description: { type: String, trim: true },
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
