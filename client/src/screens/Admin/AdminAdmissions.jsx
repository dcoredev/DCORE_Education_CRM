// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const AdminAdmissions = () => {
//   const [admissions, setAdmissions] = useState([]);

//   useEffect(() => {
//     // Fetch admissions data from backend
//     fetch("http://localhost:5000/api/applications") // update with your backend route
//       .then((res) => res.json())
//       .then((data) => setAdmissions(data))
//       .catch((err) => console.error("Error fetching admissions:", err));
//   }, []);

//   return (
//     <div style={styles.layout}>
//       <Sidebar />
//       <div style={styles.page}>
//         <h1 style={styles.pageTitle}>🎓 Admissions</h1>
//         <p>Here you can manage student admissions.</p>

//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>#</th>
//               <th style={styles.th}>Student Name</th>
//               <th style={styles.th}>Course</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Phone</th>
//               <th style={styles.th}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {admissions.length > 0 ? (
//               admissions.map((admission, index) => (
//                 <tr key={admission._id}>
//                   <td style={styles.td}>{index + 1}</td>
//                   <td style={styles.td}>{admission.studentName}</td>
//                   <td style={styles.td}>{admission.course}</td>
//                   <td style={styles.td}>{admission.email}</td>
//                   <td style={styles.td}>{admission.phone}</td>
//                   <td style={styles.td}>
//                     {admission.status || "Pending"}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td style={styles.td} colSpan="6">
//                   No admissions found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
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

//   table: { width: "100%", borderCollapse: "collapse", marginTop: "20px", background: "#fff" },
//   th: { border: "1px solid #ccc", padding: "10px", background: "#34495e", color: "#fff", textAlign: "left" },
//   td: { border: "1px solid #ccc", padding: "10px", background: "#f9f9f9" },
// };

// export default AdminAdmissions;


// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";

// const AdminAdmissions = () => {
//   const [admissions, setAdmissions] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/admissions")
//       .then((res) => res.json())
//       .then((data) => setAdmissions(data))
//       .catch((err) => console.error("❌ Error fetching admissions:", err));
//   }, []);

//   const styles = {
//     layout: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" },
//     page: { flex: 1, padding: "30px", background: "#f4f6f8" },
//     card: {
//       background: "#fff",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
//     },
//     table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
//     th: { background: "#2c3e50", color: "#fff", padding: "10px" },
//     td: { borderBottom: "1px solid #ddd", padding: "10px" },
//   };

//   return (
//     <div style={styles.layout}>
//       <Sidebar />
//       <div style={styles.page}>
//         <h1>🎓 Admissions</h1>
//         <div style={styles.card}>
//           {admissions.length === 0 ? (
//             <p>No admissions found.</p>
//           ) : (
//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={styles.th}>Student Name</th>
//                   <th style={styles.th}>Course</th>
//                   <th style={styles.th}>Email</th>
//                   <th style={styles.th}>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admissions.map((adm) => (
//                   <tr key={adm._id}>
//                     <td style={styles.td}>{adm.name}</td>
//                     <td style={styles.td}>{adm.course}</td>
//                     <td style={styles.td}>{adm.email}</td>
//                     <td style={styles.td}>{new Date(adm.createdAt).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAdmissions;




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
