


import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar"; // ✅ Import shared sidebar

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/inquiries")
      .then((res) => res.json())
      .then((data) => setInquiries(data))
      .catch((err) => console.error("❌ Error fetching inquiries:", err));
  }, []);

  const styles = {
    layout: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" },
    page: { flex: 1, padding: "30px", background: "#ecf0f1", overflowY: "auto" },
    pageTitle: { fontSize: "24px", marginBottom: "20px" },
    card: {
      background: "#fff",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
    th: { textAlign: "left", padding: "10px", background: "#2c3e50", color: "#fff" },
    td: { padding: "10px", borderBottom: "1px solid #ddd" },
  };

  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.page}>
        <h1 style={styles.pageTitle}>📩 Student Inquiries</h1>
        <p>Here you can view and manage all student inquiries.</p>

        <div style={styles.card}>
          {inquiries.length === 0 ? (
            <p>No inquiries found.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Full Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Contact</th>
                  <th style={styles.th}>Course</th>
                  <th style={styles.th}>Mode</th>
                  <th style={styles.th}>Education</th>
                  <th style={styles.th}>Occupation</th>
                  <th style={styles.th}>Source</th>
                  <th style={styles.th}>Inquiry Taken By</th>
                  <th style={styles.th}>Inquiry Date</th>
                  <th style={styles.th}>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq, index) => (
                  <tr key={inq._id}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{inq.fullName}</td>
                    <td style={styles.td}>{inq.email}</td>
                    <td style={styles.td}>{inq.contactNumber}</td>
                    <td style={styles.td}>{inq.courses}</td>
                    <td style={styles.td}>{inq.mode}</td>
                    <td style={styles.td}>{inq.education}</td>
                    <td style={styles.td}>{inq.occupation}</td>
                    <td style={styles.td}>{inq.source}</td>
                    <td style={styles.td}>{inq.inquiryTakenBy}</td>
                    <td style={styles.td}>
                      {new Date(inq.inquiryDate).toLocaleDateString()}
                    </td>
                    <td style={styles.td}>{inq.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInquiries;
