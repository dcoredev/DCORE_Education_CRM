




import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const AdminAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/applications") // ✅ correct endpoint
      .then((res) => res.json())
      .then((data) => setAdmissions(data))
      .catch((err) => console.error("Error fetching admissions:", err));
  }, []);

  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.page}>
        <h1 style={styles.pageTitle}>🎓 Admissions</h1>
        <p>Here you can manage student admissions.</p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Student Name</th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {admissions.length > 0 ? (
              admissions.map((admission, index) => (
                <tr key={admission._id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{admission.studentName}</td>
                  <td style={styles.td}>{admission.course}</td>
                  <td style={styles.td}>{admission.email}</td>
                  <td style={styles.td}>{admission.phone}</td>
                  <td style={styles.td}>
                    {admission.status || "Pending"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={styles.td} colSpan="6">
                  No admissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  layout: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" },
  page: { flex: 1, padding: "30px", background: "#ecf0f1", overflowY: "auto" },
  pageTitle: { fontSize: "24px", marginBottom: "20px" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "20px", background: "#fff" },
  th: { border: "1px solid #ccc", padding: "10px", background: "#34495e", color: "#fff", textAlign: "left" },
  td: { border: "1px solid #ccc", padding: "10px", background: "#f9f9f9" },
};

export default AdminAdmissions;
