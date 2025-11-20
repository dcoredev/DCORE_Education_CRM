// import mongoose from "mongoose";

// const qualificationSchema = new mongoose.Schema({
//   exam: String,
//   year: String,
//   board: String,
//   marks: String,
// });

// const feeSchema = new mongoose.Schema({
//   total: String,
//   deposit: String,
//   monthly: String,
//   final: String,
// });

// const applicationSchema = new mongoose.Schema({
//   registrationNo: { type: String, required: true },
//   batch: String,
//   course: String,
//   admissionDate: Date,

//   applicantName: { type: String, required: true },
//   fatherName: String,
//   address: String,
//   pinCode: String,
//   email: { type: String, required: true },
//   phone: { type: String, required: true },

//   reference: String,
//   hasKnowledge: String,
//   exposureDetails: String,

//   qualifications: [qualificationSchema],

//   programName: String,
//   duration: String,
//   fees: feeSchema,

//   studentName: String,
//   studentSignature: String,
//   studentDate: Date,

//   representative: String,
//   representativeSignature: String,
//   repDate: Date,
// }, { timestamps: true });

// const Application = mongoose.model("Application", applicationSchema);
// export default Application;



// import mongoose from "mongoose";

// const qualificationSchema = new mongoose.Schema({
//   exam: String,
//   year: String,
//   board: String,
//   marks: String,
// });

// const feeSchema = new mongoose.Schema({
//   total: String,
//   deposit: String,
//   monthly: String,
//   final: String,
//   paymentOption: { type: String }, // ✅ new
// });

// const applicationSchema = new mongoose.Schema(
//   {
//     registrationNo: { type: String, required: true },
//     batch: String,
//     course: String,
//     admissionDate: Date,

//     applicantName: { type: String, required: true },
//     fatherName: String,
//     fatherContact: String, // ✅ new
//     gender: { type: String, enum: ["Male", "Female", "Other"] }, // ✅ new
//     dob: Date, // ✅ new
//     address: String,
//     pinCode: String,
//     email: { type: String, required: true },
//     phone: { type: String, required: true },

//     reference: String,
//     hasKnowledge: String,
//     exposureDetails: String,

//     qualifications: [qualificationSchema],
//     lastEducation: String, // ✅ new
//     boardUniversity: String, // ✅ new

//     workExperience: String, // ✅ new
//     currentEmployer: String, // ✅ new

//     preferredJoiningDate: Date, // ✅ new
//     preferredBatchTiming: { type: String, enum: ["Morning", "Afternoon", "Evening"] }, // ✅ new
//     howDidYouKnow: String, // ✅ new
//     note: String, // ✅ new

//     programName: String,
//     duration: String,
//     fees: feeSchema,

//     studentName: String,
//     studentSignature: String,
//     studentDate: Date,

//     representative: String,
//     representativeSignature: String,
//     repDate: Date,
//   },
//   { timestamps: true }
// );

// const Application = mongoose.model("Application", applicationSchema);
// export default Application;






//new one 
import mongoose from "mongoose";

// ✅ Sub-schema for academic qualifications
const qualificationSchema = new mongoose.Schema({
  exam: { type: String },
  year: { type: String },
  board: { type: String },
  marks: { type: String },
});

// ✅ Sub-schema for fees
const feeSchema = new mongoose.Schema({
  total: { type: String },
  deposit: { type: String },
  monthly: { type: String },
  final: { type: String },
  paymentOption: { type: String },
});

const applicationSchema = new mongoose.Schema(
  {
    // ✅ Student-Generated Fields
    registrationNo: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
            },

    batch: { type: String },
    course: { type: String },
    admissionDate: { type: Date },

    applicantName: { type: String, required: true },
    fatherName: { type: String },
    fatherContact: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dob: { type: Date },
    address: { type: String },
    pinCode: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    reference: { type: String },
    hasKnowledge: { type: String },
    exposureDetails: { type: String },

    qualifications: [qualificationSchema],
    lastEducation: { type: String },
    boardUniversity: { type: String },

    workExperience: { type: String },
    currentEmployer: { type: String },

    preferredJoiningDate: { type: Date },
    preferredBatchTiming: {
      type: String,
      enum: ["Morning", "Afternoon", "Evening"],
    },
    howDidYouKnow: { type: String },
    note: { type: String },

    programName: { type: String },
    duration: { type: String },
    fees: feeSchema,

    

    studentName: { type: String },
    studentSignature: { type: String },
    studentDate: { type: Date },

    representative: { type: String },
    representativeSignature: { type: String },
    repDate: { type: Date },

    // ✅ Added: link to admin updates or student (optional for mapping)
    updatedByAdmin: { type: Boolean, default: false },
    adminNotes: { type: String },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
