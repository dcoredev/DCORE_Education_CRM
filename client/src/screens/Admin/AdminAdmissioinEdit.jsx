// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";

// const AdminAdmissionFormEdit = () => {
//   const { id } = useParams(); // application id
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [application, setApplication] = useState(null);
//   const [officeData, setOfficeData] = useState({
//     registrationNo: "",
//     batch: "",
//     course: "",
//     admissionDate: "",
//     fees: { total: "", deposit: "", monthly: "", final: "" },
//     representative: "",
//     representativeSignature: "",
//     repDate: "",
//   });

//   useEffect(() => {
//     if (!id) return;
//     const fetchApp = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/applications/${id}`);
//         const data = await res.json();
//         if (res.ok) {
//           setApplication(data);
//           // prefill officeData if present in the application
//           setOfficeData({
//             registrationNo: data.registrationNo || "",
//             batch: data.batch || "",
//             course: data.course || data.programName || "",
//             admissionDate: data.admissionDate ? new Date(data.admissionDate).toISOString().slice(0, 10) : "",
//             fees: {
//               total: (data.fees && data.fees.total) || "",
//               deposit: (data.fees && data.fees.deposit) || "",
//               monthly: (data.fees && data.fees.monthly) || "",
//               final: (data.fees && data.fees.final) || "",
//             },
//             representative: data.representative || "",
//             representativeSignature: data.representativeSignature || "",
//             repDate: data.repDate ? new Date(data.repDate).toISOString().slice(0, 10) : "",
//           });
//         } else {
//           alert("Failed to load application: " + (data.error || "Unknown"));
//           navigate("/admin-applications");
//         }
//       } catch (err) {
//         console.error(err);
//         alert("Network error while loading application.");
//         navigate("/admin-applications");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchApp();
//   }, [id, navigate]);

//   const handleOfficeChange = (e) => {
//     const { name, value } = e.target;
//     if (name.startsWith("fees.")) {
//       const key = name.split(".")[1];
//       setOfficeData((p) => ({ ...p, fees: { ...p.fees, [key]: value } }));
//     } else setOfficeData((p) => ({ ...p, [name]: value }));
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     try {
//       // Build update object that keeps student data untouched and updates office fields
//       const updatePayload = {
//         ...application,
//         registrationNo: officeData.registrationNo,
//         batch: officeData.batch,
//         course: officeData.course,
//         admissionDate: officeData.admissionDate || null,
//         fees: {
//           total: officeData.fees.total,
//           deposit: officeData.fees.deposit,
//           monthly: officeData.fees.monthly,
//           final: officeData.fees.final,
//         },
//         representative: officeData.representative,
//         representativeSignature: officeData.representativeSignature,
//         repDate: officeData.repDate || null,
//       };

//       // Only send the fields you want to update (safer)
//       const payload = {
//         registrationNo: updatePayload.registrationNo,
//         batch: updatePayload.batch,
//         course: updatePayload.course,
//         admissionDate: updatePayload.admissionDate,
//         fees: updatePayload.fees,
//         representative: updatePayload.representative,
//         representativeSignature: updatePayload.representativeSignature,
//         repDate: updatePayload.repDate,
//       };

//       const res = await fetch(`http://localhost:5000/api/applications/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("✅ Admission details updated!");
//         // reload or navigate
//         navigate("/admin-applications");
//       } else {
//         alert("❌ Error: " + (data.error || "Failed to update"));
//       }
//     } catch (err) {
//       console.error(err);
//       alert("⚠️ Network error while saving.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) return <div style={{ padding: 30 }}>Loading application...</div>;
//   if (!application) return <div style={{ padding: 30 }}>Application not found.</div>;

//   return (
//     <div style={styles.layout}>
//       <Sidebar />
//       <div style={styles.page}>
//         <h1 style={styles.title}>Admission — Review & finalize</h1>

//         <div style={styles.sectionRow}>
//           <div style={styles.card}>
//             <h3>Student-submitted data</h3>
//             <p><strong>Name:</strong> {application.fullName || application.applicantName || application.studentName}</p>
//             <p><strong>Email:</strong> {application.email}</p>
//             <p><strong>Phone:</strong> {application.phone}</p>
//             <p><strong>Address:</strong> {application.address}</p>
//             <p><strong>Qualification:</strong> {application.qualification || (application.qualifications && application.qualifications.map(q => q.exam).join(", "))}</p>
//             <p><strong>Program:</strong> {application.programName}</p>
//           </div>

//           <form style={styles.card} onSubmit={handleSave}>
//             <h3>Office / Admission Details (fill)</h3>

//             <label>Registration No</label>
//             <input name="registrationNo" value={officeData.registrationNo} onChange={handleOfficeChange} />

//             <label>Batch</label>
//             <input name="batch" value={officeData.batch} onChange={handleOfficeChange} />

//             <label>Course / Program</label>
//             <input name="course" value={officeData.course} onChange={handleOfficeChange} />

//             <label>Admission Date</label>
//             <input type="date" name="admissionDate" value={officeData.admissionDate} onChange={handleOfficeChange} />

//             <h4 style={{ marginTop: 12 }}>Fees</h4>
//             <label>Total</label>
//             <input name="fees.total" value={officeData.fees.total} onChange={handleOfficeChange} />

//             <label>Deposit</label>
//             <input name="fees.deposit" value={officeData.fees.deposit} onChange={handleOfficeChange} />

//             <label>Monthly</label>
//             <input name="fees.monthly" value={officeData.fees.monthly} onChange={handleOfficeChange} />

//             <label>Final</label>
//             <input name="fees.final" value={officeData.fees.final} onChange={handleOfficeChange} />

//             <label>Representative</label>
//             <input name="representative" value={officeData.representative} onChange={handleOfficeChange} />

//             <label>Rep Signature</label>
//             <input name="representativeSignature" value={officeData.representativeSignature} onChange={handleOfficeChange} />

//             <label>Rep Date</label>
//             <input type="date" name="repDate" value={officeData.repDate} onChange={handleOfficeChange} />

//             <div style={{ marginTop: 12 }}>
//               <button type="submit" style={styles.saveBtn} disabled={saving}>
//                 {saving ? "Saving..." : "Save Admission Details"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   layout: { display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
//   page: { flex: 1, padding: "30px", background: "#f4f6f8" },
//   title: { marginBottom: 16 },
//   sectionRow: { display: "flex", gap: 20, alignItems: "flex-start" },
//   card: { flex: 1, background: "#fff", padding: 18, borderRadius: 10, boxShadow: "0 3px 10px rgba(0,0,0,0.06)" },
//   saveBtn: { background: "#059669", color: "#fff", padding: "10px 14px", border: "none", borderRadius: 8, cursor: "pointer" },
// };

// export default AdminAdmissionFormEdit;





//css updated
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const AdminAdmissionFormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [application, setApplication] = useState(null);
  const [officeData, setOfficeData] = useState({
    registrationNo: "",
    batch: "",
    course: "",
    admissionDate: "",
    fees: { total: "", deposit: "", monthly: "", final: "" },
    representative: "",
    representativeSignature: "",
    repDate: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchApp = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/applications/${id}`);
        const data = await res.json();
        if (res.ok) {
          setApplication(data);
          setOfficeData({
            registrationNo: data.registrationNo || "",
            batch: data.batch || "",
            course: data.course || data.programName || "",
            admissionDate: data.admissionDate
              ? new Date(data.admissionDate).toISOString().slice(0, 10)
              : "",
            fees: {
              total: (data.fees && data.fees.total) || "",
              deposit: (data.fees && data.fees.deposit) || "",
              monthly: (data.fees && data.fees.monthly) || "",
              final: (data.fees && data.fees.final) || "",
            },
            representative: data.representative || "",
            representativeSignature: data.representativeSignature || "",
            repDate: data.repDate
              ? new Date(data.repDate).toISOString().slice(0, 10)
              : "",
          });
        } else {
          alert("Failed to load application: " + (data.error || "Unknown"));
          navigate("/admin-applications");
        }
      } catch (err) {
        console.error(err);
        alert("Network error while loading application.");
        navigate("/admin-applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApp();
  }, [id, navigate]);

  const handleOfficeChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("fees.")) {
      const key = name.split(".")[1];
      setOfficeData((p) => ({ ...p, fees: { ...p.fees, [key]: value } }));
    } else setOfficeData((p) => ({ ...p, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        registrationNo: officeData.registrationNo,
        batch: officeData.batch,
        course: officeData.course,
        admissionDate: officeData.admissionDate,
        fees: officeData.fees,
        representative: officeData.representative,
        representativeSignature: officeData.representativeSignature,
        repDate: officeData.repDate,
      };

      const res = await fetch(`http://localhost:5000/api/applications/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Admission details updated!");
        navigate("/admin-applications");
      } else {
        alert("❌ Error: " + (data.error || "Failed to update"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Network error while saving.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div style={{ padding: 30 }}>Loading application...</div>;
  if (!application) return <div style={{ padding: 30 }}>Application not found.</div>;

  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.page}>
        <h1 style={styles.title}>Admission — Review & Finalize</h1>

        <div style={styles.sectionRow}>
          {/* ---- LEFT CARD (Student Data) ---- */}
          <div style={styles.studentCard}>
            <h3 style={styles.cardTitle}>Student Details</h3>
            <div style={styles.infoGroup}>
              <p><strong>Name:</strong> {application.fullName || application.applicantName || application.studentName}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone}</p>
              <p><strong>Address:</strong> {application.address}</p>
              <p><strong>Qualification:</strong> {application.qualification || (application.qualifications && application.qualifications.map(q => q.exam).join(", "))}</p>
              <p><strong>Program:</strong> {application.programName}</p>
            </div>
          </div>

          {/* ---- RIGHT CARD (Admin Form) ---- */}
          <form style={styles.formCard} onSubmit={handleSave}>
            <h3 style={styles.cardTitle}>Office / Admission Details</h3>

            <div style={styles.formGrid}>
              <div style={styles.inputGroup}>
                <label>Registration No</label>
                <input name="registrationNo" value={officeData.registrationNo} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Batch</label>
                <input name="batch" value={officeData.batch} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Course / Program</label>
                <input name="course" value={officeData.course} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Admission Date</label>
                <input type="date" name="admissionDate" value={officeData.admissionDate} onChange={handleOfficeChange} />
              </div>

              <h4 style={styles.subTitle}>Fees</h4>

              <div style={styles.inputGroup}>
                <label>Total Fees</label>
                <input name="fees.total" value={officeData.fees.total} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Deposit</label>
                <input name="fees.deposit" value={officeData.fees.deposit} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Monthly</label>
                <input name="fees.monthly" value={officeData.fees.monthly} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Final Payment</label>
                <input name="fees.final" value={officeData.fees.final} onChange={handleOfficeChange} />
              </div>

              <h4 style={styles.subTitle}>Representative</h4>
              <div style={styles.inputGroup}>
                <label>Representative</label>
                <input name="representative" value={officeData.representative} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Signature</label>
                <input name="representativeSignature" value={officeData.representativeSignature} onChange={handleOfficeChange} />
              </div>
              <div style={styles.inputGroup}>
                <label>Date</label>
                <input type="date" name="repDate" value={officeData.repDate} onChange={handleOfficeChange} />
              </div>
            </div>

            <button type="submit" style={styles.saveBtn} disabled={saving}>
              {saving ? "Saving..." : "💾 Save Admission Details"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ---- Improved internal CSS ----
const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "Inter, sans-serif",
  },
  page: {
    flex: 1,
    padding: "30px",
  },
  title: {
    fontSize: "26px",
    color: "#1e293b",
    fontWeight: 600,
    marginBottom: "25px",
  },
  sectionRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    alignItems: "flex-start",
  },
  studentCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  formCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  cardTitle: {
    fontSize: "20px",
    color: "#0f172a",
    marginBottom: "15px",
    borderBottom: "2px solid #e2e8f0",
    paddingBottom: "5px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  subTitle: {
    gridColumn: "1 / -1",
    marginTop: "20px",
    fontWeight: 600,
    color: "#334155",
  },
  saveBtn: {
    marginTop: "25px",
    width: "100%",
    background: "#059669",
    color: "white",
    padding: "12px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "0.3s",
  },
};

export default AdminAdmissionFormEdit;
