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
//         </div>

//         {/* --- PERSONAL INFO --- */}
//         {/* <h3 style={styles.section}>Applicant Details</h3> */}
//         {/* <div style={styles.row}>
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
//         </div> */}

//         {/* <div style={styles.inputGroup}>
//           <label>Address *</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} />
//         </div> */}

//         {/* <div style={styles.row}>
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
//         </div> */}
// {/* 
//         <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Father’s Name *</label>
//             <input name="fatherName" value={formData.fatherName} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Father’s Contact *</label>
//             <input name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} required />
//           </div>
//         </div> */}

//         {/* --- EDUCATION & WORK --- */}
//         {/* <h3 style={styles.section}>Educational / Work Background</h3> */}
//         {/* <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Last Qualification *</label>
//             <input name="qualification" value={formData.qualification} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Board / University *</label>
//             <input name="boardUniversity" value={formData.boardUniversity} onChange={handleChange} required />
//           </div>
//         </div> */}

//         {/* <div style={styles.row}>
//           <div style={styles.inputGroup}>
//             <label>Work Experience</label>
//             <input name="workExperience" value={formData.workExperience} onChange={handleChange} />
//           </div>
//           <div style={styles.inputGroup}>
//             <label>Current Employer (if any)</label>
//             <input name="employer" value={formData.employer} onChange={handleChange} />
//           </div>
//         </div> */}

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
//         {/* <h3 style={styles.section}>Preferences</h3> */}
//         {/* <div style={styles.row}>
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
//         </div> */}

//         {/* --- REFERENCE & NOTE --- */}
//         {/* <h3 style={styles.section}>Reference & Note</h3>
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
//         </div> */}

//         {/* <div style={styles.inputGroup}>
//           <label>Note</label>
//           <textarea name="note" value={formData.note} onChange={handleChange}></textarea>
//         </div>
//         <div style={styles.inputGroup}>
//           <label>Fees Payment Option</label>
//           <input name="paymentOption" value={formData.paymentOption} onChange={handleChange} />
//         </div> */}

//         {/* --- SIGNATURES --- */}
//         {/* <h3 style={styles.section}>Signatures</h3>
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
//         </div> */}

//         <div style={styles.row}>
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
//         </div>

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




//new one for admin admission form

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar"; // use your shared sidebar

const AdminApplicationForm = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then((r) => r.json())
      .then((data) => {
        setApps(data);
      })
      .catch((err) => console.error("Error fetching apps:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={styles.layout}>
      <Sidebar />

      <div style={styles.page}>
        <h1 style={styles.title}>🎓 Applications</h1>

        {loading ? (
          <p>Loading applications...</p>
        ) : apps.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Applicant</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Program</th>
                <th>Submitted</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((a, i) => (
                <tr key={a._id}>
                  <td>{i + 1}</td>
                  <td>{a.fullName || a.applicantName || a.studentName || "—"}</td>
                  <td>{a.phone || a.contactNumber || "—"}</td>
                  <td>{a.email || "—"}</td>
                  <td>{a.programName || a.course || "—"}</td>
                  <td>{new Date(a.createdAt).toLocaleString()}</td>
                  <td>
                    {/* <button style={styles.editBtn} onClick={() => navigate(`/admin/application/${a._id}`)}> */}
                    <button style={styles.editBtn} onClick={() => navigate(`/admin-admission-edit/${a._id}`)}>
                      Edit / Admission
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const styles = {
  layout: { display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
  page: { flex: 1, padding: "30px", background: "#f4f6f8" },
  title: { marginBottom: "18px" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
  },
  editBtn: {
    padding: "6px 10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AdminApplicationForm;
