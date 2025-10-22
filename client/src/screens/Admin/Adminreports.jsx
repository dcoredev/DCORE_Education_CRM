// import React from "react";
// import { NavLink } from "react-router-dom";

// const Reports = () => {
//   return (
//     <div style={styles.layout}>
//       <Sidebar />
//       <div style={styles.page}>
//         <h1 style={styles.pageTitle}>📑 Reports</h1>
//         <p>Here you can generate and view reports.</p>
//       </div>
//     </div>
//   );
// };

// const Sidebar = () => (
//   <div style={styles.sidebar}>
//     <h2 style={styles.logo}>🛠️ Admin Panel</h2>
//     <ul style={styles.navLinks}>
//       <li><NavLink to="/admin/dashboard" style={styles.link}>📊 Dashboard</NavLink></li>
//       <li><NavLink to="/admin/inquiries" style={styles.link}>📩 Inquiries</NavLink></li>
//       <li><NavLink to="/admin/admissions" style={styles.link}>🎓 Admissions</NavLink></li>
//       <li><NavLink to="/admin/payments" style={styles.link}>💳 Payments</NavLink></li>
//       <li><NavLink to="/admin/reports" style={styles.link}>📑 Reports</NavLink></li>
//       <li><NavLink to="/admin/users" style={styles.link}>👥 Users / Roles</NavLink></li>
//     </ul>
//   </div>
// );

// const styles = {
//   layout: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" },
//   sidebar: { width: "250px", background: "#2c3e50", color: "#fff", padding: "20px" },
//   logo: { marginBottom: "20px", fontSize: "22px", fontWeight: "bold" },
//   navLinks: { listStyle: "none", padding: 0 },
//   link: { display: "block", color: "#ecf0f1", textDecoration: "none", padding: "10px 0", fontSize: "16px" },
//   page: { flex: 1, padding: "30px", background: "#ecf0f1", overflowY: "auto" },
//   pageTitle: { fontSize: "24px", marginBottom: "20px" },
// };

// export default Reports;


import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const AdminReports = () => {
  const [inquiryReports, setInquiryReports] = useState([]);
  const [admissionReports, setAdmissionReports] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/reports/inquiries").then((res) => res.json()),
      fetch("http://localhost:5000/api/reports/admissions").then((res) => res.json()),
    ])
      .then(([inqData, admData]) => {
        setInquiryReports(inqData);
        setAdmissionReports(admData);
      })
      .catch((err) => console.error("❌ Error fetching reports:", err));
  }, []);

  const styles = {
    layout: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" },
    page: { flex: 1, padding: "30px", background: "#f4f6f8" },
    section: { marginBottom: "30px" },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.page}>
        <h1>📑 Reports</h1>

        <div style={styles.section}>
          <h2>Inquiry Reports</h2>
          <div style={styles.card}>
            {inquiryReports.length === 0 ? (
              <p>No inquiry reports found.</p>
            ) : (
              <ul>
                {inquiryReports.map((inq) => (
                  <li key={inq._id}>{inq.name} — {inq.email}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div style={styles.section}>
          <h2>Admission Reports</h2>
          <div style={styles.card}>
            {admissionReports.length === 0 ? (
              <p>No admission reports found.</p>
            ) : (
              <ul>
                {admissionReports.map((adm) => (
                  <li key={adm._id}>{adm.name} — {adm.course}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
