// import React, { useEffect, useState } from "react";

// const AdminReports = () => {
//   const [activeTab, setActiveTab] = useState("enquiry");
//   const [enquiries, setEnquiries] = useState([]);
//   const [admissions, setAdmissions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch enquiries
//   const fetchEnquiries = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:5000/api/reports/enquiries");
//       const data = await res.json();
//       setEnquiries(data);
//     } catch (err) {
//       console.error("Error fetching enquiries:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Fetch admissions
//   const fetchAdmissions = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:5000/api/reports/admissions");
//       const data = await res.json();
//       setAdmissions(data);
//     } catch (err) {
//       console.error("Error fetching admissions:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === "enquiry") fetchEnquiries();
//     else fetchAdmissions();
//   }, [activeTab]);

//   return (
//     <div className="reports-container">
//       <h1>📑 Reports</h1>

//       {/* 🔹 Tabs */}
//       <div className="tabs">
//         <button
//           className={activeTab === "enquiry" ? "tab active" : "tab"}
//           onClick={() => setActiveTab("enquiry")}
//         >
//           Enquiry Reports
//         </button>
//         <button
//           className={activeTab === "admission" ? "tab active" : "tab"}
//           onClick={() => setActiveTab("admission")}
//         >
//           Admission Reports
//         </button>
//       </div>

//       {/* 🔹 Content */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {activeTab === "enquiry" && (
//             <table className="report-table">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Course</th>
//                   <th>Date</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {enquiries.length > 0 ? (
//                   enquiries.map((item, i) => (
//                     <tr key={item._id || i}>
//                       <td>{i + 1}</td>
//                       <td>{item.name}</td>
//                       <td>{item.email}</td>
//                       <td>{item.phone}</td>
//                       <td>{item.course}</td>
//                       <td>{new Date(item.date).toLocaleDateString()}</td>
//                       <td>{item.status}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" style={{ textAlign: "center" }}>
//                       No enquiries found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}

//           {activeTab === "admission" && (
//             <table className="report-table">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Course</th>
//                   <th>Admission Date</th>
//                   <th>Payment Status</th>
//                   <th>Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admissions.length > 0 ? (
//                   admissions.map((item, i) => (
//                     <tr key={item._id || i}>
//                       <td>{i + 1}</td>
//                       <td>{item.name}</td>
//                       <td>{item.email}</td>
//                       <td>{item.phone}</td>
//                       <td>{item.course}</td>
//                       <td>{new Date(item.admissionDate).toLocaleDateString()}</td>
//                       <td>{item.paymentStatus}</td>
//                       <td>₹{item.amount}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" style={{ textAlign: "center" }}>
//                       No admissions found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           )}
//         </>
//       )}

//       {/* 🔹 Styles */}
//       <style>{`
//         .reports-container {
//           padding: 20px;
//           font-family: "Segoe UI", Roboto, sans-serif;
//           background: #f9fafc;
//           min-height: 100vh;
//         }
//         h1 {
//           margin-bottom: 20px;
//           color: #374151;
//         }
//         .tabs {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 20px;
//         }
//         .tab {
//           background: #e5e7eb;
//           border: none;
//           padding: 10px 18px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-weight: 500;
//           transition: background 0.3s;
//         }
//         .tab:hover {
//           background: #d1d5db;
//         }
//         .tab.active {
//           background: #4f46e5;
//           color: white;
//         }
//         .report-table {
//           width: 100%;
//           border-collapse: collapse;
//           background: white;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 3px 8px rgba(0,0,0,0.08);
//         }
//         th, td {
//           padding: 12px 16px;
//           border-bottom: 1px solid #e5e7eb;
//           text-align: left;
//         }
//         th {
//           background: #f3f4f6;
//           color: #374151;
//         }
//         tr:hover {
//           background: #f9fafc;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AdminReports;


// import React, { useEffect, useState } from "react";
// import AdminSidebar from "../../components/Sidebar"; // ✅ Import sidebar

// const AdminReports = () => {
//   const [activeTab, setActiveTab] = useState("enquiry");
//   const [enquiries, setEnquiries] = useState([]);
//   const [admissions, setAdmissions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // 🔹 Fetch enquiries
//   const fetchEnquiries = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:5000/api/reports/enquiries");
//       const data = await res.json();
//       setEnquiries(data);
//     } catch (err) {
//       console.error("Error fetching enquiries:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Fetch admissions
//   const fetchAdmissions = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:5000/api/reports/admissions");
//       const data = await res.json();
//       setAdmissions(data);
//     } catch (err) {
//       console.error("Error fetching admissions:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (activeTab === "enquiry") fetchEnquiries();
//     else fetchAdmissions();
//   }, [activeTab]);

//   return (
//     <div style={styles.layout}>
//       <AdminSidebar /> {/* ✅ Sidebar added */}

//       <div style={styles.page}>
//         <h1 style={styles.title}>📑 Reports</h1>

//         {/* 🔹 Tabs */}
//         <div style={styles.tabs}>
//           <button
//             style={{
//               ...styles.tab,
//               ...(activeTab === "enquiry" ? styles.activeTab : {}),
//             }}
//             onClick={() => setActiveTab("enquiry")}
//           >
//             Enquiry Reports
//           </button>
//           <button
//             style={{
//               ...styles.tab,
//               ...(activeTab === "admission" ? styles.activeTab : {}),
//             }}
//             onClick={() => setActiveTab("admission")}
//           >
//             Admission Reports
//           </button>
//         </div>

//         {/* 🔹 Content */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             {activeTab === "enquiry" && (
//               <table style={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Course</th>
//                     <th>Date</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {enquiries.length > 0 ? (
//                     enquiries.map((item, i) => (
//                       <tr key={item._id || i}>
//                         <td>{i + 1}</td>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.phone}</td>
//                         <td>{item.course}</td>
//                         <td>{new Date(item.date).toLocaleDateString()}</td>
//                         <td>{item.status}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="7" style={{ textAlign: "center" }}>
//                         No enquiries found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}

//             {activeTab === "admission" && (
//               <table style={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Course</th>
//                     <th>Admission Date</th>
//                     <th>Payment Status</th>
//                     <th>Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {admissions.length > 0 ? (
//                     admissions.map((item, i) => (
//                       <tr key={item._id || i}>
//                         <td>{i + 1}</td>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.phone}</td>
//                         <td>{item.course}</td>
//                         <td>
//                           {new Date(item.admissionDate).toLocaleDateString()}
//                         </td>
//                         <td>{item.paymentStatus}</td>
//                         <td>₹{item.amount}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="8" style={{ textAlign: "center" }}>
//                         No admissions found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // ✅ Clean styles (matching admin layout)
// const styles = {
//   layout: {
//     display: "flex",
//     background: "#f9fafc",
//     minHeight: "100vh",
//   },
//   page: {
//     flex: 1,
//     padding: "30px",
//   },
//   title: {
//     marginBottom: "20px",
//     color: "#374151",
//   },
//   tabs: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   tab: {
//     background: "#e5e7eb",
//     border: "none",
//     padding: "10px 18px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontWeight: 500,
//     transition: "background 0.3s",
//   },
//   activeTab: {
//     background: "#4f46e5",
//     color: "white",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     background: "white",
//     borderRadius: "10px",
//     overflow: "hidden",
//     boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
//   },
// };

// export default AdminReports;


//new
import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/Sidebar";

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState("enquiry");
  const [enquiries, setEnquiries] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch enquiries
  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/inquiries");
      const data = await res.json();
      console.log("Enquiries data:", data);
      setEnquiries(data);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch admissions
  const fetchAdmissions = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/applications");
      const data = await res.json();
      console.log("Admissions data:", data);
      setAdmissions(data);
    } catch (err) {
      console.error("Error fetching admissions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "enquiry") fetchEnquiries();
    else fetchAdmissions();
  }, [activeTab]);

  return (
    <div style={styles.layout}>
      <AdminSidebar />

      <div style={styles.page}>
        <h1 style={styles.title}>📑 Reports</h1>

        {/* 🔹 Tabs */}
        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === "enquiry" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab("enquiry")}
          >
            Enquiry Reports
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === "admission" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab("admission")}
          >
            Admission Reports
          </button>
        </div>

        {/* 🔹 Content */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {activeTab === "enquiry" && (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Mode</th>
                    <th>Inquiry Date</th>
                    <th>Source</th>
                    <th>Inquiry Taken By</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.length > 0 ? (
                    enquiries.map((item, i) => (
                      <tr key={item._id || i}>
                        <td>{i + 1}</td>
                        <td>{item.fullName}</td>
                        <td>{item.contactNumber}</td>
                        <td>{item.email}</td>
                        <td>{item.courses}</td>
                        <td>{item.mode}</td>
                        <td>
                          {item.inquiryDate
                            ? new Date(item.inquiryDate).toLocaleDateString()
                            : "-"}
                        </td>
                        <td>{item.source}</td>
                        <td>{item.inquiryTakenBy}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" style={{ textAlign: "center" }}>
                        No enquiries found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "admission" && (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Registration No</th>
                    <th>Applicant Name</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Admission Date</th>
                    <th>Total Fees</th>
                    <th>Deposit</th>
                    <th>Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {admissions.length > 0 ? (
                    admissions.map((item, i) => (
                      <tr key={item._id || i}>
                        <td>{i + 1}</td>
                        <td>{item.registrationNo}</td>
                        <td>{item.applicantName}</td>
                        <td>{item.course || item.programName}</td>
                        <td>{item.batch}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          {item.admissionDate
                            ? new Date(item.admissionDate).toLocaleDateString()
                            : "-"}
                        </td>
                        <td>₹{item.fees?.total || "-"}</td>
                        <td>₹{item.fees?.deposit || "-"}</td>
                        <td>₹{item.fees?.monthly || "-"}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" style={{ textAlign: "center" }}>
                        No admissions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// ✅ Clean styles
const styles = {
  layout: {
    display: "flex",
    background: "#f9fafc",
    minHeight: "100vh",
  },
  page: {
    flex: 1,
    padding: "30px",
  },
  title: {
    marginBottom: "20px",
    color: "#374151",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tab: {
    background: "#e5e7eb",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 500,
    transition: "background 0.3s",
  },
  activeTab: {
    background: "#4f46e5",
    color: "white",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
  },
};

export default AdminReports;
