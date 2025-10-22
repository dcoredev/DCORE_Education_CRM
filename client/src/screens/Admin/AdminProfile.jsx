// import React from "react";
// import { NavLink } from "react-router-dom";

// const AdminProfile = () => {
//   return (
//     <div style={styles.layout}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <h2 style={styles.logo}>🛠️ Admin Panel</h2>
//         <ul style={styles.navLinks}>
//           <li><NavLink to="/Dashboard" style={styles.link}>📊 Dashboard</NavLink></li>
//           <li><NavLink to="/admin-inquiries" style={styles.link}>📩 Inquiries</NavLink></li>
//           <li><NavLink to="/admin-admissions" style={styles.link}>🎓 Admissions</NavLink></li>
//           <li><NavLink to="/admin-payments" style={styles.link}>💳 Payments</NavLink></li>
//           <li><NavLink to="/admin/reports" style={styles.link}>📑 Reports</NavLink></li>
//           <li><NavLink to="/admin/users" style={styles.link}>👥 Users / Roles</NavLink></li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div style={styles.page}>
//         <h1 style={styles.pageTitle}>👨‍💼 Admin Profile</h1>

//         <div style={styles.profileHeader}>
//           <img
//             src="https://i.pravatar.cc/120?u=admin"
//             alt="Admin Avatar"
//             style={styles.avatar}
//           />
//           <div>
//             <h2>Admin User</h2>
//             <p>📧 admin@example.com</p>
//             <p>🔑 Role: Super Admin</p>
//           </div>
//         </div>

//         <div style={styles.card}>
//           <h3>Account Info</h3>
//           <p><strong>User ID:</strong> ADMIN001</p>
//           <p><strong>Created At:</strong> {new Date().toLocaleDateString()}</p>
//           <p><strong>Last Updated:</strong> {new Date().toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   layout: {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "Arial, sans-serif",
//   },
//   sidebar: {
//     width: "250px",
//     background: "#2c3e50",
//     color: "#fff",
//     padding: "20px",
//   },
//   logo: {
//     marginBottom: "20px",
//     fontSize: "22px",
//     fontWeight: "bold",
//   },
//   navLinks: {
//     listStyle: "none",
//     padding: 0,
//   },
//   link: {
//     display: "block",
//     color: "#ecf0f1",
//     textDecoration: "none",
//     padding: "10px 0",
//     fontSize: "16px",
//   },
//   page: {
//     flex: 1,
//     padding: "30px",
//     background: "#ecf0f1",
//     overflowY: "auto",
//   },
//   pageTitle: {
//     fontSize: "24px",
//     marginBottom: "20px",
//   },
//   profileHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "20px",
//     marginBottom: "20px",
//   },
//   avatar: {
//     borderRadius: "50%",
//     width: "120px",
//     height: "120px",
//     border: "3px solid #2c3e50",
//   },
//   card: {
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//   },
// };

// export default AdminProfile;



//2
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const AdminProfile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/profile")
//       .then((res) => res.json())
//       .then((data) => {
//         setAdmin(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching admin profile:", err);
//         setError("Failed to load profile");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p style={{ padding: "20px" }}>Loading profile...</p>;
//   if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
//   if (!admin) return <p style={{ padding: "20px" }}>Admin not found</p>;

//   return (
//     <div className="layout">
//       <style>{`
//         .layout {
//           display: flex;
//           height: 100vh;
//           font-family: Arial, sans-serif;
//         }
//         .sidebar {
//           width: 250px;
//           background: #2c3e50;
//           color: #fff;
//           padding: 20px;
//         }
//         .logo {
//           margin-bottom: 20px;
//           font-size: 22px;
//           font-weight: bold;
//         }
//         .navLinks {
//           list-style: none;
//           padding: 0;
//         }
//         .navLinks li {
//           margin-bottom: 8px;
//         }
//         .link {
//           display: block;
//           color: #ecf0f1;
//           text-decoration: none;
//           padding: 10px 0;
//           font-size: 16px;
//           transition: color 0.2s ease;
//         }
//         .link:hover {
//           color: #1abc9c;
//         }
//         .page {
//           flex: 1;
//           padding: 30px;
//           background: #ecf0f1;
//           overflow-y: auto;
//         }
//         .pageTitle {
//           font-size: 24px;
//           margin-bottom: 20px;
//         }
//         .profileHeader {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           margin-bottom: 20px;
//         }
//         .avatar {
//           border-radius: 50%;
//           width: 120px;
//           height: 120px;
//           border: 3px solid #2c3e50;
//         }
//         .card {
//           background: #fff;
//           padding: 20px;
//           border-radius: 10px;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.1);
//         }
//         .card h3 {
//           margin-bottom: 10px;
//         }
//         .card p {
//           margin: 6px 0;
//         }
//       `}</style>

//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2 className="logo">🛠️ Admin Panel</h2>
//         <ul className="navLinks">
//           <li><NavLink to="/Dashboard" className="link">📊 Dashboard</NavLink></li>
//           <li><NavLink to="/admin-inquiries" className="link">📩 Inquiries</NavLink></li>
//           <li><NavLink to="/admin-admissions" className="link">🎓 Admissions</NavLink></li>
//           <li><NavLink to="/admin-payments" className="link">💳 Payments</NavLink></li>
//           <li><NavLink to="/admin/reports" className="link">📑 Reports</NavLink></li>
//           <li><NavLink to="/admin/users" className="link">👥 Users / Roles</NavLink></li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="page">
//         <h1 className="pageTitle">👨‍💼 Admin Profile</h1>

//         <div className="profileHeader">
//           <img
//             src={admin.avatar || "https://i.pravatar.cc/120?u=admin"}
//             alt="Admin Avatar"
//             className="avatar"
//           />
//           <div>
//             <h2>{admin.fullName}</h2>
//             <p>📧 {admin.email}</p>
//             <p>🔑 Role: {admin.role}</p>
//           </div>
//         </div>

//         <div className="card">
//           <h3>Account Info</h3>
//           <p><strong>User ID:</strong> {admin._id}</p>
//           <p><strong>Created At:</strong> {new Date(admin.createdAt).toLocaleDateString()}</p>
//           <p><strong>Last Updated:</strong> {new Date(admin.updatedAt).toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;


//3
// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const AdminProfile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // ✅ Add navigate hook

//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/profile")
//       .then((res) => res.json())
//       .then((data) => {
//         setAdmin(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching admin profile:", err);
//         setError("Failed to load profile");
//         setLoading(false);
//       });
//   }, []);

//   const handleLogout = () => {
//     // Clear any authentication tokens (adjust according to your auth setup)
//     localStorage.removeItem("token");
//     sessionStorage.clear();

//     // Redirect to login page
//     navigate("/login");
//   };

//   if (loading) return <p style={{ padding: "20px" }}>Loading profile...</p>;
//   if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
//   if (!admin) return <p style={{ padding: "20px" }}>Admin not found</p>;

//   return (
//     <div className="layout">
//       <style>{`
//         .layout { display: flex; height: 100vh; font-family: Arial, sans-serif; }
//         .sidebar { width: 250px; background: #2c3e50; color: #fff; padding: 20px; display: flex; flex-direction: column; }
//         .logo { margin-bottom: 20px; font-size: 22px; font-weight: bold; }
//         .navLinks { list-style: none; padding: 0; flex: 1; }
//         .navLinks li { margin-bottom: 8px; }
//         .link { display: block; color: #ecf0f1; text-decoration: none; padding: 10px 0; font-size: 16px; transition: color 0.2s ease; }
//         .link:hover { color: #1abc9c; }
//         .logoutBtn { background: #e74c3c; color: #fff; border: none; padding: 10px; border-radius: 6px; cursor: pointer; margin-top: 20px; font-size: 16px; transition: background 0.2s ease; }
//         .logoutBtn:hover { background: #c0392b; }
//         .page { flex: 1; padding: 30px; background: #ecf0f1; overflow-y: auto; }
//         .pageTitle { font-size: 24px; margin-bottom: 20px; }
//         .profileHeader { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
//         .avatar { border-radius: 50%; width: 120px; height: 120px; border: 3px solid #2c3e50; }
//         .card { background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
//         .card h3 { margin-bottom: 10px; }
//         .card p { margin: 6px 0; }
//       `}</style>

//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2 className="logo">🛠️ Admin Panel</h2>
//         <ul className="navLinks">
//           <li><NavLink to="/Dashboard" className="link">📊 Dashboard</NavLink></li>
//           <li><NavLink to="/admin-inquiries" className="link">📩 Inquiries</NavLink></li>
//           <li><NavLink to="/admin-admissions" className="link">🎓 Admissions</NavLink></li>
//           <li><NavLink to="/admin-payments" className="link">💳 Payments</NavLink></li>
//           <li><NavLink to="/admin/reports" className="link">📑 Reports</NavLink></li>
//           <li><NavLink to="/admin/users" className="link">👥 Users / Roles</NavLink></li>
//         </ul>
//         <button className="logoutBtn" onClick={handleLogout}>🚪 Logout</button>
//       </div>

//       {/* Main Content */}
//       <div className="page">
//         <h1 className="pageTitle">👨‍💼 Admin Profile</h1>

//         <div className="profileHeader">
//           <img
//             src={admin.avatar || "https://i.pravatar.cc/120?u=admin"}
//             alt="Admin Avatar"
//             className="avatar"
//           />
//           <div>
//             <h2>{admin.fullName}</h2>
//             <p>📧 {admin.email}</p>
//             <p>🔑 Role: {admin.role}</p>
//           </div>
//         </div>

//         <div className="card">
//           <h3>Account Info</h3>
//           <p><strong>User ID:</strong> {admin._id}</p>
//           <p><strong>Created At:</strong> {new Date(admin.createdAt).toLocaleDateString()}</p>
//           <p><strong>Last Updated:</strong> {new Date(admin.updatedAt).toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;


// 📁 src/pages/AdminProfile.jsx
import React, { useEffect, useState } from "react";
// import AdminSidebar from "../components/Sidebar"; // ✅ import your sidebar
import AdminSidebar from "../../components/Sidebar.jsx"; // ✅ import your sidebar

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/profile")
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching admin profile:", err);
        setError("Failed to load profile");
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading profile...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  if (!admin) return <p style={{ padding: "20px" }}>Admin not found</p>;

  return (
    <div className="layout">
      <style>{`
        .layout { display: flex; height: 100vh; font-family: Arial, sans-serif; }
        .page { flex: 1; padding: 30px; background: #ecf0f1; overflow-y: auto; }
        .pageTitle { font-size: 24px; margin-bottom: 20px; }
        .profileHeader { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
        .avatar { border-radius: 50%; width: 120px; height: 120px; border: 3px solid #2c3e50; }
        .card { background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
        .card h3 { margin-bottom: 10px; }
        .card p { margin: 6px 0; }
      `}</style>

      <AdminSidebar /> {/* ✅ Sidebar used here */}

      <div className="page">
        <h1 className="pageTitle">👨‍💼 Admin Profile</h1>

        <div className="profileHeader">
          <img
            src={admin.avatar || "https://i.pravatar.cc/120?u=admin"}
            alt="Admin Avatar"
            className="avatar"
          />
          <div>
            <h2>{admin.fullName}</h2>
            <p>📧 {admin.email}</p>
            <p>🔑 Role: {admin.role}</p>
          </div>
        </div>

        <div className="card">
          <h3>Account Info</h3>
          <p><strong>User ID:</strong> {admin._id}</p>
          <p><strong>Created At:</strong> {new Date(admin.createdAt).toLocaleDateString()}</p>
          <p><strong>Last Updated:</strong> {new Date(admin.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
