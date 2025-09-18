import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  exam: String,
  year: String,
  board: String,
  marks: String,
});

const feeSchema = new mongoose.Schema({
  total: String,
  deposit: String,
  monthly: String,
  final: String,
});

const applicationSchema = new mongoose.Schema({
  registrationNo: { type: String, required: true },
  batch: String,
  course: String,
  admissionDate: Date,

  applicantName: { type: String, required: true },
  fatherName: String,
  address: String,
  pinCode: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },

  reference: String,
  hasKnowledge: String,
  exposureDetails: String,

  qualifications: [qualificationSchema],

  programName: String,
  duration: String,
  fees: feeSchema,

  studentName: String,
  studentSignature: String,
  studentDate: Date,

  representative: String,
  representativeSignature: String,
  repDate: Date,
}, { timestamps: true });

const Application = mongoose.model("Application", applicationSchema);
export default Application;
