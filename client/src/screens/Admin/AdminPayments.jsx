// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminPayments = () => {
//   const [students, setStudents] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [formData, setFormData] = useState({
//     studentId: "",
//     total: "",
//     deposit: "",
//     monthly: "",
//     final: "",
//     notes: "",
//   });
//   const [feeStatus, setFeeStatus] = useState("Pending");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch users (students) from backend
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/users");
//         console.log("API Response:", res.data);
//         if (Array.isArray(res.data)) {
//           setStudents(res.data);
//         } else {
//           setStudents([]);
//           setMessage("⚠️ Unexpected data format from API.");
//         }
//       } catch (error) {
//         console.error("Error fetching students:", error);
//         setMessage("❌ Failed to load students. Check console for details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudents();
//   }, []);

//   // Handle live search
//   const handleSearchChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(e.target.value);

//     if (query.length > 0) {
//       const filtered = students.filter(
//         (s) =>
//           s.fullName?.toLowerCase().includes(query) ||
//           s.email?.toLowerCase().includes(query) ||
//           `${s.fullName} (${s.email})`.toLowerCase().includes(query)
//       );
//       setSuggestions(filtered);
//     } else {
//       setSuggestions([]);
//       setFormData({ ...formData, studentId: "" });
//       setFeeStatus("Pending");
//     }
//   };

//   // Handle student selection
//   const handleSelectStudent = async (student) => {
//     setSearchQuery(`${student.fullName} (${student.email})`);
//     setFormData(prev => ({ ...prev, studentId: student._id }));
//     setSuggestions([]);

//     try {
//       const res = await axios.get(`http://localhost:5000/api/payments/${student._id}`);
//       const data = res.data;

//       if (data.fees) {
//         setFormData({
//           studentId: student._id,
//           total: data.fees.total || "",
//           deposit: data.fees.deposit || "",
//           monthly: data.fees.monthly || "",
//           final: data.fees.final || "",
//           notes: data.fees.notes || "",
//         });
//         setFeeStatus(data.fees.status || "Pending");
//       } else {
//         setFormData({
//           studentId: student._id,
//           total: "",
//           deposit: "",
//           monthly: "",
//           final: "",
//           notes: "",
//         });
//         setFeeStatus("Pending");
//       }
//     } catch (error) {
//       console.error("Error fetching fee status:", error);
//       setFeeStatus("Pending");
//     }
//   };

//   // Handle field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle fee assignment
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting fee data:", formData);

//     if (!formData.studentId || !formData.total || !formData.deposit || !formData.monthly || !formData.final) {
//       setMessage("⚠️ Please select a student and fill all fee fields.");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/payments/assign-fee", formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setMessage("✅ Fee assigned/updated successfully!");
//       setFeeStatus(res.data.fee?.status || "Updated");
//       setTimeout(() => setMessage(""), 3000);
//     } catch (error) {
//       console.error("Error assigning fee:", {
//         message: error.message,
//         response: error.response ? error.response.data : "No response",
//         status: error.response ? error.response.status : "No status",
//       });
//       setMessage("❌ Failed to assign fee. Check console for details.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>💳 Manage Student Fees</h2>
//       {message && <p style={styles.message}>{message}</p>}
//       {loading ? (
//         <p>Loading students...</p>
//       ) : (
//         <form onSubmit={handleSubmit} style={styles.form}>
//           {/* Student Search */}
//           <div style={{ position: "relative", marginBottom: "15px" }}>
//             <input
//               type="text"
//               placeholder="Search student by name or email"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               style={styles.input}
//             />
//             {suggestions.length > 0 && (
//               <ul style={styles.suggestions}>
//                 {suggestions.map((s) => (
//                   <li
//                     key={s._id}
//                     onClick={() => handleSelectStudent(s)}
//                     onMouseDown={(e) => e.preventDefault()}
//                     style={styles.suggestionItem}
//                   >
//                     {s.fullName} ({s.email})
//                   </li>
//                 ))}
//               </ul>
//             )}
//             {searchQuery.trim() !== "" && suggestions.length === 0 && students.length > 0 && (
//               <ul style={styles.suggestions}>
//                 <li style={{ padding: "8px", color: "#888" }}>No students found</li>
//               </ul>
//             )}
//           </div>

//           {/* Fee Fields */}
//           <input
//             type="number"
//             name="total"
//             placeholder="Total Fee"
//             value={formData.total}
//             onChange={handleChange}
//             style={styles.input}
//             required
//             min="0"
//           />
//           <input
//             type="number"
//             name="deposit"
//             placeholder="Deposit"
//             value={formData.deposit}
//             onChange={handleChange}
//             style={styles.input}
//             required
//             min="0"
//           />
//           <input
//             type="number"
//             name="monthly"
//             placeholder="Monthly Fee"
//             value={formData.monthly}
//             onChange={handleChange}
//             style={styles.input}
//             required
//             min="0"
//           />
//           <input
//             type="number"
//             name="final"
//             placeholder="Final Payment"
//             value={formData.final}
//             onChange={handleChange}
//             style={styles.input}
//             required
//             min="0"
//           />
//           <textarea
//             name="notes"
//             placeholder="Notes"
//             value={formData.notes}
//             onChange={handleChange}
//             style={styles.textarea}
//           />

//           {/* Fee Status */}
//           <div style={styles.statusContainer}>
//             <p>
//               <strong>Current Fee Status:</strong>{" "}
//               <span style={styles.status}>{feeStatus}</span>
//             </p>
//           </div>

//           <button type="submit" style={styles.button}>
//             Assign/Update Fee
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// // Inline CSS
// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "20px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     backgroundColor: "#fafafa",
//   },
//   form: { display: "flex", flexDirection: "column" },
//   input: {
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     width: "100%",
//     boxSizing: "border-box",
//   },
//   textarea: {
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     width: "100%",
//     minHeight: "80px",
//     boxSizing: "border-box",
//   },
//   button: {
//     padding: "10px",
//     background: "linear-gradient(to right, #6b48ff, #00c4cc)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
//   message: {
//     margin: "10px 0",
//     fontWeight: "bold",
//     color: "#dc3545",
//   },
//   suggestions: {
//     position: "absolute",
//     top: "100%",
//     left: 0,
//     right: 0,
//     border: "1px solid #ccc",
//     backgroundColor: "#fff",
//     borderRadius: "5px",
//     listStyle: "none",
//     padding: "0",
//     margin: "0",
//     maxHeight: "150px",
//     overflowY: "auto",
//     zIndex: "1000",
//   },
//   suggestionItem: {
//     padding: "8px",
//     cursor: "pointer",
//   },
//   statusContainer: {
//     marginBottom: "15px",
//     padding: "10px",
//     background: "#f5f6fa",
//     borderRadius: "5px",
//   },
//   status: {
//     padding: "6px 10px",
//     borderRadius: "6px",
//     fontSize: "14px",
//     fontWeight: "bold",
//     background: "#ffeaa7",
//   },
// };

// export default AdminPayments;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "../../components/Sidebar";

// const AdminPayments = () => {
//   const [students, setStudents] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [formData, setFormData] = useState({
//     studentId: "", total: "", deposit: "", monthly: "", final: "", notes: ""
//   });
//   const [feeStatus, setFeeStatus] = useState("Pending");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/users")
//       .then(res => setStudents(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     if (!query) return setSuggestions([]);
//     const filtered = students.filter(
//       s => s.fullName.toLowerCase().includes(query.toLowerCase()) ||
//            s.email.toLowerCase().includes(query.toLowerCase())
//     );
//     setSuggestions(filtered);
//   };

//   const handleSelectStudent = async (student) => {
//     setSearchQuery(`${student.fullName} (${student.email})`);
//     setFormData(prev => ({ ...prev, studentId: student._id }));
//     setSuggestions([]);

//     try {
//       const res = await axios.get(`http://localhost:5000/api/payments/${student._id}`);
//       const fee = res.data.fees || {};
//       setFormData(prev => ({
//         ...prev,
//         total: fee.total || "",
//         deposit: fee.deposit || "",
//         monthly: fee.monthly || "",
//         final: fee.final || "",
//         notes: fee.notes || ""
//       }));
//       setFeeStatus(fee.status || "Pending");
//     } catch (err) {
//       console.error(err);
//       setFeeStatus("Pending");
//     }
//   };

//   const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.studentId) return setMessage("Select a student first!");
//     try {
//       const res = await axios.post("http://localhost:5000/api/payments/assign-fee", formData);
//       setFeeStatus(res.data.fee.status || "Updated");
//       setMessage("✅ Fee assigned/updated successfully!");
//       setTimeout(() => setMessage(""), 3000);
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Failed to assign fee");
//     }
//   };

//   return (
    
//     <div style={{ maxWidth: 500, margin: "50px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      
//       <h2>💳 Manage Student Fees</h2>
//       {message && <p style={{ color: "#dc3545" }}>{message}</p>}

//       <form onSubmit={handleSubmit}>
//         <div style={{ position: "relative", marginBottom: 15 }}>
//           <input
//             type="text" placeholder="Search student"
//             value={searchQuery} onChange={handleSearchChange}
//             style={{ width: "100%", padding: 10 }}
//           />
//           {suggestions.length > 0 && (
//             <ul style={{ position: "absolute", top: "100%", left: 0, right: 0, border: "1px solid #ccc", background: "#fff", listStyle: "none", margin: 0, padding: 0 }}>
//               {suggestions.map(s =>
//                 <li key={s._id} onMouseDown={() => handleSelectStudent(s)} style={{ padding: 8, cursor: "pointer" }}>
//                   {s.fullName} ({s.email})
//                 </li>
//               )}
//             </ul>
//           )}
//         </div>
     

//         <input type="number" name="total" placeholder="Total Fee" value={formData.total} onChange={handleChange} required style={{ width: "100%", padding: 10, marginBottom: 10 }} />
//         <input type="number" name="deposit" placeholder="Deposit" value={formData.deposit} onChange={handleChange} required style={{ width: "100%", padding: 10, marginBottom: 10 }} />
//         <input type="number" name="monthly" placeholder="Monthly Fee" value={formData.monthly} onChange={handleChange} required style={{ width: "100%", padding: 10, marginBottom: 10 }} />
//         <input type="number" name="final" placeholder="Final Payment" value={formData.final} onChange={handleChange} required style={{ width: "100%", padding: 10, marginBottom: 10 }} />
//         <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} style={{ width: "100%", padding: 10, marginBottom: 10 }} />

//         <p>Current Fee Status: <strong>{feeStatus}</strong></p>
//         <button type="submit" style={{ padding: 10, background: "#6b48ff", color: "#fff", border: "none", cursor: "pointer" }}>Assign/Update Fee</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPayments;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

const AdminPayments = () => {
  const [students, setStudents] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    studentId: "",
    total: "",
    deposit: "",
    monthly: "",
    final: "",
    notes: "",
  });
  const [feeStatus, setFeeStatus] = useState("Pending");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query) return setSuggestions([]);
    const filtered = students.filter(
      (s) =>
        s.fullName.toLowerCase().includes(query.toLowerCase()) ||
        s.email.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelectStudent = async (student) => {
    setSearchQuery(`${student.fullName} (${student.email})`);
    setFormData((prev) => ({ ...prev, studentId: student._id }));
    setSuggestions([]);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/payments/${student._id}`
      );
      const fee = res.data.fees || {};
      setFormData((prev) => ({
        ...prev,
        total: fee.total || "",
        deposit: fee.deposit || "",
        monthly: fee.monthly || "",
        final: fee.final || "",
        notes: fee.notes || "",
      }));
      setFeeStatus(fee.status || "Pending");
    } catch (err) {
      console.error(err);
      setFeeStatus("Pending");
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentId) return setMessage("Select a student first!");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/payments/assign-fee",
        formData
      );
      setFeeStatus(res.data.fee.status || "Updated");
      setMessage("✅ Fee assigned/updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to assign fee");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <h1 className="pageTitle">💳 Manage Student Fees</h1>

        <div
          style={{
            maxWidth: 500,
            margin: "20px auto",
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 10,
            background: "#fff",
          }}
        >
          {message && (
            <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            {/* Search Student */}
            <div style={{ position: "relative", marginBottom: 15 }}>
              <input
                type="text"
                placeholder="Search student"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ width: "100%", padding: 10 }}
              />
              {suggestions.length > 0 && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    border: "1px solid #ccc",
                    background: "#fff",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    maxHeight: 150,
                    overflowY: "auto",
                    zIndex: 10,
                  }}
                >
                  {suggestions.map((s) => (
                    <li
                      key={s._id}
                      onMouseDown={() => handleSelectStudent(s)}
                      style={{
                        padding: 8,
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {s.fullName} ({s.email})
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Fee Inputs */}
            <input
              type="number"
              name="total"
              placeholder="Total Fee"
              value={formData.total}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <input
              type="number"
              name="deposit"
              placeholder="Deposit"
              value={formData.deposit}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <input
              type="number"
              name="monthly"
              placeholder="Monthly Fee"
              value={formData.monthly}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <input
              type="number"
              name="final"
              placeholder="Final Payment"
              value={formData.final}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <textarea
              name="notes"
              placeholder="Notes"
              value={formData.notes}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
                height: 60,
              }}
            />

            <p>
              Current Fee Status: <strong>{feeStatus}</strong>
            </p>
            <button
              type="submit"
              style={{
                padding: 10,
                background: "#6b48ff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                width: "100%",
                borderRadius: 6,
              }}
            >
              Assign / Update Fee
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .layout {
          display: flex;
          height: 100vh;
          font-family: Arial, sans-serif;
          background: #ecf0f1;
        }
        .page {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }
        .pageTitle {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default AdminPayments;
