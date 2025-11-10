// import React, { useState } from "react";
// import Header from "../../components/Header";

// const ApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     registrationNo: "",
//     batch: "",
//     course: "",
//     admissionDate: "",
//     applicantName: "",
//     fatherName: "",
//     address: "",
//     pinCode: "",
//     email: "",
//     phone: "",
//     reference: "",
//     hasKnowledge: "",
//     exposureDetails: "",
//     qualifications: [{ exam: "", year: "", board: "", marks: "" }],
//     programName: "",
//     duration: "",
//     fees: { total: "", deposit: "", monthly: "", final: "" },
//     studentName: "",
//     studentSignature: "",
//     studentDate: "",
//     representative: "",
//     representativeSignature: "",
//     repDate: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleQualificationChange = (index, field, value) => {
//     const newQualifications = [...formData.qualifications];
//     newQualifications[index][field] = value;
//     setFormData({ ...formData, qualifications: newQualifications });
//   };

//   const addQualificationRow = () => {
//     setFormData({
//       ...formData,
//       qualifications: [...formData.qualifications, { exam: "", year: "", board: "", marks: "" }],
//     });
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("✅ Application submitted successfully!");
// //     console.log(formData);
// //   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log("🚀 Submitting form data:", formData); // debug

//   try {
//     const res = await fetch("http://localhost:5000/api/applications", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     console.log("📡 Response Status:", res.status); // debug
//     const data = await res.json();
//     console.log("📡 Response Data:", data); // debug

//     if (res.ok) {
//       alert("✅ Application submitted successfully!");
//     } else {
//       alert("❌ Error: " + data.error);
//     }
//   } catch (err) {
//     console.error("❌ Network or server error:", err);
//     alert("⚠️ Could not submit application. Check server.");
//   }
// };




//   return (
//     <div className="page">
//       <Header title="📝 Application Form" />

//       {/* Internal CSS */}
//       <style>{`
//         .form {
//           background: #fff;
//           padding: 20px;
//           border-radius: 10px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//         }
//         h3 {
//           margin-top: 20px;
//           color: #2c3e50;
//         }
//         .form-group {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 15px;
//         }
//         .form-group label {
//           font-weight: 600;
//           margin-bottom: 5px;
//         }
//         .form-group input,
//         .form-group textarea,
//         .form-group select {
//           padding: 10px;
//           border: 1px solid #ddd;
//           border-radius: 6px;
//         }
//         .form-row {
//           display: flex;
//           gap: 15px;
//           margin-bottom: 15px;
//         }
//         .form-row div {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }
//         .table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 10px;
//           margin-bottom: 10px;
//         }
//         .table th, .table td {
//           border: 1px solid #ccc;
//           padding: 8px;
//           text-align: center;
//         }
//         .table input {
//           width: 100%;
//           padding: 6px;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//         }
//         .primary-btn {
//           background: #6c5ce7;
//           color: white;
//           border: none;
//           padding: 12px 18px;
//           border-radius: 6px;
//           cursor: pointer;
//           margin-top: 15px;
//           font-size: 16px;
//           font-weight: bold;
//         }
//         .primary-btn:hover {
//           background: #5a4bd1;
//         }
//       `}</style>

//       <form className="form" onSubmit={handleSubmit}>
//         {/* <h3>FOR OFFICE USE ONLY</h3> */}
//         {/* <div className="form-group">
//           <label>Registration No:</label>
//           <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
//         </div>
//         <div className="form-row">
//           <div>
//             <label>Batch:</label>
//             <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Course:</label>
//             <input type="text" name="course" value={formData.course} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Date of Admission:</label>
//             <input type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} />
//           </div>
//         </div> */}

//         <h3>Applicant Details</h3>
//         <div className="form-group">
//           <label>Full name of the Applicant:</label>
//           <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Father’s Name:</label>
//           <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
//         </div>
//         <div className="form-row">
//           <div>
//             <label>Pin Code:</label>
//             <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Email Address:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Phone No:</label>
//             <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
//           </div>
//         </div>
//         <div className="form-group">
//           <label>Reference:</label>
//           <input type="text" name="reference" value={formData.reference} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Do you have any previous computer knowledge?</label>
//           <select name="hasKnowledge" value={formData.hasKnowledge} onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="YES">YES</option>
//             <option value="NO">NO</option>
//           </select>
//         </div>
//         {formData.hasKnowledge === "YES" && (
//           <div className="form-group">
//             <label>If yes, furnish details:</label>
//             <textarea name="exposureDetails" value={formData.exposureDetails} onChange={handleChange}></textarea>
//           </div>
//         )}

//         <h3>Educational Qualification</h3>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Sl. No</th>
//               <th>Exam Passed</th>
//               <th>Year</th>
//               <th>Board/University</th>
//               <th>% of Marks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.qualifications.map((row, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td><input type="text" value={row.exam} onChange={(e) => handleQualificationChange(index, "exam", e.target.value)} /></td>
//                 <td><input type="text" value={row.year} onChange={(e) => handleQualificationChange(index, "year", e.target.value)} /></td>
//                 <td><input type="text" value={row.board} onChange={(e) => handleQualificationChange(index, "board", e.target.value)} /></td>
//                 <td><input type="text" value={row.marks} onChange={(e) => handleQualificationChange(index, "marks", e.target.value)} /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type="button" onClick={addQualificationRow}>➕ Add Row</button>

//         <h3>Training Agreement</h3>
//         <div className="form-group">
//           <label>Program Name:</label>
//           <input type="text" name="programName" value={formData.programName} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Duration:</label>
//           <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
//         </div>
//         <div className="form-row">
//           <div>
//             <label>Total Fees:</label>
//             <input type="text" value={formData.fees.total} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, total: e.target.value } })} />
//           </div>
//           <div>
//             <label>Initial Deposit:</label>
//             <input type="text" value={formData.fees.deposit} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, deposit: e.target.value } })} />
//           </div>
//           <div>
//             <label>Monthly Payments:</label>
//             <input type="text" value={formData.fees.monthly} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, monthly: e.target.value } })} />
//           </div>
//           <div>
//             <label>Final Payment:</label>
//             <input type="text" value={formData.fees.final} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, final: e.target.value } })} />
//           </div>
//         </div>

//         <h3>Signatures</h3>
//         <div className="form-row">
//           <div>
//             <label>Student Name:</label>
//             <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Student Signature:</label>
//             <input type="text" name="studentSignature" value={formData.studentSignature} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Date:</label>
//             <input type="date" name="studentDate" value={formData.studentDate} onChange={handleChange} />
//           </div>
//         </div>
//         <div className="form-row">
//           <div>
//             <label>Training Center Representative:</label>
//             <input type="text" name="representative" value={formData.representative} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Representative Signature:</label>
//             <input type="text" name="representativeSignature" value={formData.representativeSignature} onChange={handleChange} />
//           </div>
//           <div>
//             <label>Date:</label>
//             <input type="date" name="repDate" value={formData.repDate} onChange={handleChange} />
//           </div>
//         </div>

//         <button type="submit" className="primary-btn">Submit Application</button>
//       </form>
//     </div>
//   );
// };

// export default ApplicationForm;








//2

// import React, { useState } from "react";
// import Header from "../../components/Header";

// const ApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     // ---- OFFICE DETAILS ----
//     registrationNo: "",
//     batch: "",
//     course: "",
//     admissionDate: "",

//     // ---- PERSONAL DETAILS ----
//     fullName: "",
//     gender: "",
//     dob: "",
//     address: "",
//     pinCode: "",
//     email: "",
//     phone: "",
//     fatherName: "",
//     fatherPhone: "",

//     // ---- EDUCATIONAL / WORK DETAILS ----
//     qualification: "",
//     boardUniversity: "",
//     workExperience: "",
//     employer: "",
//     passingYear: "",
//     hasKnowledge: "",
//     exposureDetails: "",

//     // ---- COURSE & FEES ----
//     programName: "",
//     duration: "",
//     fees: { total: "", deposit: "", monthly: "", final: "" },

//     // ---- REFERENCE & NOTE ----
//     reference: "",
//     howKnowUs: "",
//     note: "",
//     paymentOption: "",

//     // ---- PREFERENCE ----
//     preferredJoiningDate: "",
//     preferredBatchTiming: "",

//     // ---- SIGNATURE ----
//     studentName: "",
//     studentSignature: "",
//     studentDate: "",
//     representative: "",
//     representativeSignature: "",
//     repDate: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFeesChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       fees: { ...prev.fees, [field]: value },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("🚀 Submitting form data:", formData);

//     try {
//       const res = await fetch("http://localhost:5000/api/applications", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("✅ Application submitted successfully!");
//         setFormData({});
//       } else {
//         alert("❌ Error: " + (data.error || "Something went wrong"));
//       }
//     } catch (err) {
//       console.error("❌ Network Error:", err);
//       alert("⚠️ Could not connect to server.");
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <Header title="📝 Application Form" />
//       <form onSubmit={handleSubmit} style={styles.form}>
//         {/* --- OFFICE USE --- */}
//         {/* <h3 style={styles.section}>FOR OFFICE USE ONLY</h3> */}
//         {/* <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Registration No</label>
//             <input name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Batch</label>
//             <input name="batch" value={formData.batch} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Course</label>
//             <input name="course" value={formData.course} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Date of Admission</label>
//             <input type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} />
//           </div>
//         </div> */}

//         {/* --- PERSONAL INFO --- */}
//         <h3 style={styles.section}>Applicant Details</h3>
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Full Name *</label>
//             <input required name="fullName" value={formData.fullName} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Gender *</label>
//             <select name="gender" value={formData.gender} onChange={handleChange} required>
//               <option value="">Select</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Date of Birth *</label>
//             <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
//           </div>
//         </div>

//         <div style={styles.inputGroup}>
//           <label>Address *</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} />
//         </div>

//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Pin Code</label>
//             <input name="pinCode" value={formData.pinCode} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Email *</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Phone *</label>
//             <input name="phone" value={formData.phone} onChange={handleChange} required />
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Father’s Name *</label>
//             <input name="fatherName" value={formData.fatherName} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Father’s Contact *</label>
//             <input name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} required />
//           </div>
//         </div>

//         {/* --- EDUCATION & WORK --- */}
//         <h3 style={styles.section}>Educational / Work Background</h3>
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Last Qualification *</label>
//             <input name="qualification" value={formData.qualification} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Board / University *</label>
//             <input name="boardUniversity" value={formData.boardUniversity} onChange={handleChange} required />
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Work Experience</label>
//             <input name="workExperience" value={formData.workExperience} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Current Employer (if any)</label>
//             <input name="employer" value={formData.employer} onChange={handleChange} />
//           </div>
//         </div>

//         {/* --- COURSE / FEES --- */}
//         <h3 style={styles.section}>Training Agreement</h3>
//         <div style={styles.inputGroup}>
//           <label>Program Name *</label>
//           <input name="programName" value={formData.programName} onChange={handleChange} required />
//         </div>
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Duration *</label>
//             <input name="duration" value={formData.duration} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Total Fees</label>
//             <input value={formData.fees.total} onChange={(e) => handleFeesChange("total", e.target.value)} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Initial Deposit</label>
//             <input value={formData.fees.deposit} onChange={(e) => handleFeesChange("deposit", e.target.value)} />
//           </div>
//         </div>

//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Monthly Payments</label>
//             <input value={formData.fees.monthly} onChange={(e) => handleFeesChange("monthly", e.target.value)} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Final Payment</label>
//             <input value={formData.fees.final} onChange={(e) => handleFeesChange("final", e.target.value)} />
//           </div>
//         </div>

//         {/* --- PREFERENCES --- */}
//         <h3 style={styles.section}>Preferences</h3>
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Preferred Joining Date</label>
//             <input type="date" name="preferredJoiningDate" value={formData.preferredJoiningDate} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Preferred Batch Timing</label>
//             <select name="preferredBatchTiming" value={formData.preferredBatchTiming} onChange={handleChange}>
//               <option value="">Select</option>
//               <option value="Morning">Morning</option>
//               <option value="Afternoon">Afternoon</option>
//               <option value="Evening">Evening</option>
//             </select>
//           </div>
//         </div>

//         {/* --- REFERENCE & NOTE --- */}
//         <h3 style={styles.section}>Reference & Note</h3>
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Reference</label>
//             <input name="reference" value={formData.reference} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>How did you hear about us?</label>
//             <select name="howKnowUs" value={formData.howKnowUs} onChange={handleChange}>
//               <option value="">Select</option>
//               <option value="Friend">Friend</option>
//               <option value="Facebook">Facebook</option>
//               <option value="Instagram">Instagram</option>
//               <option value="SocialMedia">Other Social Media</option>
//               <option value="WalkIn">Direct Walk-In</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>

//         <div style={styles.inputGroup}>
//           <label>Note</label>
//           <textarea name="note" value={formData.note} onChange={handleChange}></textarea>
//         </div>
//         <div style={styles.inputGroup}>
//           <label>Fees Payment Option</label>
//           <input name="paymentOption" value={formData.paymentOption} onChange={handleChange} />
//         </div>

//         {/* --- SIGNATURES --- */}
//         <h3 style={styles.section}>Signatures</h3>
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Student Name</label>
//             <input name="studentName" value={formData.studentName} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Student Signature</label>
//             <input name="studentSignature" value={formData.studentSignature} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Date</label>
//             <input type="date" name="studentDate" value={formData.studentDate} onChange={handleChange} />
//           </div>
//         </div>

//         {/* <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Training Center Representative</label>
//             <input name="representative" value={formData.representative} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Signature</label>
//             <input name="representativeSignature" value={formData.representativeSignature} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Date</label>
//             <input type="date" name="repDate" value={formData.repDate} onChange={handleChange} />
//           </div>
//         </div> */}

//         <button type="submit" style={styles.submitBtn}>
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// // 🧭 Internal CSS
// const styles = {
//   page: {
//     background: "#f8f9fa",
//     padding: "30px",
//   },
//   form: {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "12px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   section: {
//     color: "#2c3e50",
//     marginTop: "30px",
//     marginBottom: "15px",
//     borderBottom: "2px solid #ccc",
//     paddingBottom: "5px",
//   },
//   row: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "15px",
//     marginBottom: "15px",
//   },
//   inputGroup: {
//     flex: "1",
//     display: "flex",
//     flexDirection: "column",
//   },
//   submitBtn: {
//     background: "#6c5ce7",
//     color: "white",
//     padding: "12px 18px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     marginTop: "20px",
//     fontWeight: "600",
//     fontSize: "16px",
//   },
// };

// export default ApplicationForm;


// // two sepereate forms for admin side and student side
// //options to select login as admin or student






// new one with edits below 
import React, { useState } from "react";
import Header from "../../components/Header";

const Application = () => {
  const [formData, setFormData] = useState({
    // personal
    fullName: "",
    gender: "",
    dob: "",
    address: "",
    pinCode: "",
    email: "",
    phone: "",
    fatherName: "",
    fatherPhone: "",
    // education/work
    qualification: "",
    boardUniversity: "",
    passingYear: "",
    workExperience: "",
    employer: "",
    hasKnowledge: "",
    exposureDetails: "",
    // course & fees
    programName: "",
    duration: "",
    fees: { total: "", deposit: "", monthly: "", final: "" },
    // preferences & refs
    preferredJoiningDate: "",
    preferredBatchTiming: "",
    howKnowUs: "",
    reference: "",
    note: "",
    paymentOption: "",
    // signatures
    studentName: "",
    studentSignature: "",
    studentDate: "",
    // office fields (left empty for student)
    registrationNo: "",
    batch: "",
    course: "",
    admissionDate: "",
    representative: "",
    representativeSignature: "",
    repDate: "",
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFeesChange = (field, value) => {
    setFormData((p) => ({ ...p, fees: { ...p.fees, [field]: value } }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Application submitted successfully!");
        // Optionally show created id:
        if (data.application && data.application._id) {
          alert("Application ID: " + data.application._id);
        }
        // reset (keep UI same)
        setFormData({
          fullName: "",
          gender: "",
          dob: "",
          address: "",
          pinCode: "",
          email: "",
          phone: "",
          fatherName: "",
          fatherPhone: "",
          qualification: "",
          boardUniversity: "",
          passingYear: "",
          workExperience: "",
          employer: "",
          hasKnowledge: "",
          exposureDetails: "",
          programName: "",
          duration: "",
          fees: { total: "", deposit: "", monthly: "", final: "" },
          preferredJoiningDate: "",
          preferredBatchTiming: "",
          howKnowUs: "",
          reference: "",
          note: "",
          paymentOption: "",
          studentName: "",
          studentSignature: "",
          studentDate: "",
          registrationNo: "",
          batch: "",
          course: "",
          admissionDate: "",
          representative: "",
          representativeSignature: "",
          repDate: "",
        });
      } else {
        alert("❌ Error: " + (data.error || "Server error"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Network error — could not submit application.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={styles.page}>
      <Header title="📝 Application Form" />
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3 style={styles.section}>Applicant Details</h3>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Full Name *</label>
            <input required name="fullName" value={formData.fullName} onChange={handleChange} />
          </div>

          <div style={styles.inputGroup}>
            <label>Gender *</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label>Date of Birth *</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label>Address *</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Pin Code</label>
            <input name="pinCode" value={formData.pinCode} onChange={handleChange} />
          </div>

          <div style={styles.inputGroup}>
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div style={styles.inputGroup}>
            <label>Phone *</label>
            <input name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Father’s Name</label>
            <input name="fatherName" value={formData.fatherName} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Father’s Contact</label>
            <input name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} />
          </div>
        </div>

        <h3 style={styles.section}>Educational / Work Background</h3>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Last Qualification</label>
            <input name="qualification" value={formData.qualification} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Board / University</label>
            <input name="boardUniversity" value={formData.boardUniversity} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Passing Year</label>
            <input name="passingYear" value={formData.passingYear} onChange={handleChange} />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Work Experience</label>
            <input name="workExperience `(`if any`)`" value={formData.workExperience} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Current Employer</label>
            <input name="employer" value={formData.employer} onChange={handleChange} />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Do you have previous computer knowledge?</label>
            <select name="hasKnowledge" value={formData.hasKnowledge} onChange={handleChange}>
              <option value="">Select</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>

          {formData.hasKnowledge === "YES" && (
            <div style={styles.inputGroup}>
              <label>Exposure details</label>
              <textarea name="exposureDetails" value={formData.exposureDetails} onChange={handleChange} />
            </div>
          )}
        </div>

        {/* <h3 style={styles.section}>Training Agreement / Fees</h3>
        <div style={styles.inputGroup}>
          <label>Program Name *</label>
          <input name="programName" value={formData.programName} onChange={handleChange} required />
        </div> */}

        {/* <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Duration *</label>
            <input name="duration" value={formData.duration} onChange={handleChange} required />
          </div>

          <div style={styles.inputGroup}>
            <label>Total Fees</label>
            <input value={formData.fees.total} onChange={(e) => handleFeesChange("total", e.target.value)} />
          </div>

          <div style={styles.inputGroup}>
            <label>Initial Deposit</label>
            <input value={formData.fees.deposit} onChange={(e) => handleFeesChange("deposit", e.target.value)} />
          </div>
        </div> */}

        {/* <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Monthly Payments</label>
            <input value={formData.fees.monthly} onChange={(e) => handleFeesChange("monthly", e.target.value)} />
          </div>

          <div style={styles.inputGroup}>
            <label>Final Payment</label>
            <input value={formData.fees.final} onChange={(e) => handleFeesChange("final", e.target.value)} />
          </div>
        </div> */}

        <h3 style={styles.section}>Preferences & Reference</h3>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Preferred Joining Date</label>
            <input type="date" name="preferredJoiningDate" value={formData.preferredJoiningDate} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Preferred Batch Timing</label>
            <select name="preferredBatchTiming" value={formData.preferredBatchTiming} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>How did you hear about us?</label>
            <select name="howKnowUs" value={formData.howKnowUs} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Friend">Friend</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="SocialMedia">Other Social Media</option>
              <option value="WalkIn">Direct Walk-In</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label>Reference</label>
            <input name="reference" value={formData.reference} onChange={handleChange} />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label>Note</label>
          <textarea name="note" value={formData.note} onChange={handleChange} />
        </div>

        <div style={styles.inputGroup}>
          <label>Fees Payment Option</label>
          <input name="paymentOption" value={formData.paymentOption} onChange={handleChange} />
        </div>

        <h3 style={styles.section}>Signatures</h3>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Student Name</label>
            <input name="studentName" value={formData.studentName} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Student Signature</label>
            <input name="studentSignature" value={formData.studentSignature} onChange={handleChange} />
          </div>
          <div style={styles.inputGroup}>
            <label>Date</label>
            <input type="date" name="studentDate" value={formData.studentDate} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" style={styles.submitBtn} disabled={saving}>
          {saving ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    background: "#f8f9fa",
    padding: "30px",
  },
  form: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  section: {
    color: "#2c3e50",
    marginTop: "20px",
    marginBottom: "10px",
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "6px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "12px",
  },
  inputGroup: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  submitBtn: {
    background: "#6c5ce7",
    color: "white",
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "18px",
    fontWeight: "600",
    fontSize: "15px",
  },
};

export default Application;
