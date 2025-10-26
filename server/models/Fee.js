

// models/Fee.js
import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  total: { type: Number, required: true }, // total fee is required
  deposit: { type: Number, default: 0 },
  monthly: { type: Number, default: 0 },
  final: { type: Number, default: 0 },
  notes: { type: String, default: "" },
  status: { type: String, enum: ["Pending", "Partial", "Completed"], default: "Pending" },
}, { timestamps: true });

// Method to update fee status based on payments
feeSchema.methods.updateStatus = async function () {
  // Avoid circular import by fetching Payment model this way
  const Payment = mongoose.model("Payment");

  const payments = await Payment.find({ studentId: this.studentId });
  const totalPaid = payments.reduce((sum, p) => sum + (p.amount || 0), 0);

  if (totalPaid === 0) this.status = "Pending";
  else if (totalPaid >= this.total) this.status = "Completed";
  else this.status = "Partial";

  await this.save();
};

export default mongoose.model("Fee", feeSchema);
