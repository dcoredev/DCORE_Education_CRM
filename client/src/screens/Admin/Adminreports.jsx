


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
