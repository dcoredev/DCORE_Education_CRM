



// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Sidebar = ({ onLogout }) => {
//   const role = localStorage.getItem("role") || "Student"; 

//   return (
//     <div className="sidebar">
//       <h2 className="logo">🎓 IT Academy</h2>
//       {role === "Student" && (
//         <>
//           <h3 className="section-title">Student Portal</h3>
//           <ul className="nav-links">
//             <li><NavLink to="/inquiry">⁉️ Inquiry</NavLink></li>
//             <li><NavLink to="/studentprofileedit">👤 Profile</NavLink></li>
//             <li><NavLink to="/studentapplication">📝 Apply</NavLink></li>
//             <li><NavLink to="/studentpayments">💳 Payments</NavLink></li>
//           </ul>

//           {/* ✅ Logout button */}
//           <button className="logout-btn" onClick={onLogout}>
//             🚪 Logout
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// const StuProfile = () => {
//   const [student, setStudent] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Logout handler
//   const handleLogout = () => {
//     localStorage.clear(); // clear user data
//     navigate("/login"); // redirect to login page
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       console.warn("⚠️ No userId in localStorage. Please log in first.");
//       navigate("/login");
//       return;
//     }

//     fetch(`http://localhost:5000/api/users/${userId}`)
//       .then(async (res) => {
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || "Request failed");
//         setStudent(data);
//       })
//       .catch((err) => console.error("❌ Error fetching student:", err));
//   }, [navigate]);

//   if (!student) {
//     return <div className="page">⏳ Loading profile...</div>;
//   }

//   return (
//     <div className="layout">
//       <style>{`
//         .layout {
//           display: flex;
//           height: 100vh;
//           background: #f9fafc;
//           font-family: "Segoe UI", Roboto, Arial, sans-serif;
//         }

//         .sidebar {
//           width: 250px;
//           background: linear-gradient(180deg, #4f46e5, #4338ca);
//           color: #fff;
//           padding: 20px;
//           box-shadow: 2px 0 10px rgba(0, 0, 0, 0.08);
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }

//         .logo {
//           font-size: 22px;
//           font-weight: bold;
//           margin-bottom: 30px;
//           text-align: center;
//         }

//         .section-title {
//           font-size: 14px;
//           margin: 15px 0 8px;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           opacity: 0.8;
//         }

//         .nav-links {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           flex: 1;
//         }

//         .nav-links li {
//           margin-bottom: 12px;
//         }

//         .nav-links a {
//           text-decoration: none;
//           color: #e0e7ff;
//           font-size: 16px;
//           padding: 10px 14px;
//           border-radius: 8px;
//           display: block;
//           transition: all 0.2s ease-in-out;
//         }

//         .nav-links a:hover,
//         .nav-links a.active {
//           background: rgba(255, 255, 255, 0.15);
//           color: #fff;
//         }

//         .logout-btn {
//           background: #ef4444;
//           color: #fff;
//           border: none;
//           padding: 10px;
//           border-radius: 8px;
//           font-size: 16px;
//           cursor: pointer;
//           margin-top: 20px;
//           transition: background 0.3s ease;
//         }

//         .logout-btn:hover {
//           background: #dc2626;
//         }

//         .page {
//           flex: 1;
//           padding: 30px;
//           overflow-y: auto;
//         }

//         .page-title {
//           font-size: 26px;
//           font-weight: bold;
//           margin-bottom: 20px;
//           color: #1f2937;
//         }

//         .profile-header {
//           display: flex;
//           align-items: center;
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//           margin-bottom: 20px;
//           transition: transform 0.2s ease;
//         }

//         .profile-header:hover {
//           transform: translateY(-2px);
//         }

//         .avatar {
//           width: 100px;
//           height: 100px;
//           border-radius: 50%;
//           margin-right: 20px;
//           border: 3px solid #4f46e5;
//         }

//         .card {
//           background: #fff;
//           border-radius: 12px;
//           padding: 20px;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//         }

//         .card h3 {
//           font-size: 18px;
//           margin-bottom: 12px;
//           color: #4f46e5;
//         }

//         .card p {
//           margin: 6px 0;
//           font-size: 15px;
//           color: #374151;
//         }

//         .card strong {
//           color: #111827;
//         }
//       `}</style>

//       <Sidebar onLogout={handleLogout} />
//       <div className="page">
//         <h1 className="page-title">👤 Student Profile</h1>

//         <div className="profile-header">
//           <img
//             src={`https://i.pravatar.cc/120?u=${student._id}`}
//             alt="Student Avatar"
//             className="avatar"
//           />
//           <div>
//             <h2>{student.fullName}</h2>
//             <p>📧 {student.email}</p>
//             <p>📞 {student.phone}</p>
//           </div>
//         </div>

//         <div className="card">
//           <h3>Account Info</h3>
//           <p><strong>Role:</strong> {student.role}</p>
//           <p><strong>User ID:</strong> {student._id}</p>
//           <p><strong>Created At:</strong> {new Date(student.createdAt).toLocaleString()}</p>
//           <p><strong>Last Updated:</strong> {new Date(student.updatedAt).toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StuProfile;

//2
// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// // ✅ Sidebar component
// const Sidebar = ({ onLogout }) => {
//   const role = localStorage.getItem("role") || "Student";

//   return (
//     <div style={styles.sidebar}>
//       <h2 style={styles.logo}>🎓 IT Academy</h2>
//       {role === "Student" && (
//         <>
//           <h3 style={styles.sectionTitle}>Student Portal</h3>
//           <ul style={styles.navLinks}>
//             <li><NavLink to="/inquiry" style={styles.navLink}>⁉️ Inquiry</NavLink></li>
//             <li><NavLink to="/studentprofileedit" style={styles.navLink}>👤 Profile</NavLink></li>
//             <li><NavLink to="/studentapplication" style={styles.navLink}>📝 Apply</NavLink></li>
//             <li><NavLink to="/studentpayments" style={styles.navLink}>💳 Payments</NavLink></li>
//           </ul>

//           <button style={styles.logoutBtn} onClick={onLogout}>
//             🚪 Logout
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// // ✅ Student Profile Page
// const StuProfile = () => {
//   const [student, setStudent] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Logout handler
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       navigate("/login");
//       return;
//     }

//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/users/${userId}`);
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || "Failed to fetch student");
//         setStudent(data);
//       } catch (err) {
//         console.error("❌ Error fetching student:", err);
//         alert("Failed to load student data. Please login again.");
//         navigate("/login");
//       }
//     };

//     fetchStudent();
//   }, [navigate]);

//   if (!student) {
//     return <div style={styles.loading}>⏳ Loading profile...</div>;
//   }

//   return (
//     <div style={styles.layout}>
//       <Sidebar onLogout={handleLogout} />
//       <div style={styles.page}>
//         <h1 style={styles.pageTitle}>👤 Student Profile</h1>

//         <div style={styles.profileHeader}>
//           <img
//             src={`https://i.pravatar.cc/120?u=${student._id}`}
//             alt="Student Avatar"
//             style={styles.avatar}
//           />
//           <div>
//             <h2>{student.fullName}</h2>
//             <p>📧 {student.email}</p>
//             <p>📞 {student.phone}</p>
//           </div>
//         </div>

//         <div style={styles.card}>
//           <h3>Account Info</h3>
//           <p><strong>Role:</strong> {student.role}</p>
//           <p><strong>User ID:</strong> {student._id}</p>
//           <p><strong>Created At:</strong> {new Date(student.createdAt).toLocaleString()}</p>
//           <p><strong>Last Updated:</strong> {new Date(student.updatedAt).toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ✅ Internal CSS
// const styles = {
//   layout: {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
//     background: "#f9fafc",
//   },
//   sidebar: {
//     width: "250px",
//     background: "linear-gradient(180deg, #4f46e5, #4338ca)",
//     color: "#fff",
//     padding: "20px",
//     boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   logo: {
//     fontSize: "22px",
//     fontWeight: "bold",
//     marginBottom: "30px",
//     textAlign: "center",
//   },
//   sectionTitle: {
//     fontSize: "14px",
//     margin: "15px 0 8px",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     opacity: 0.8,
//   },
//   navLinks: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     flex: 1,
//   },
//   navLink: {
//     display: "block",
//     textDecoration: "none",
//     color: "#e0e7ff",
//     fontSize: "16px",
//     padding: "10px 14px",
//     borderRadius: "8px",
//     marginBottom: "12px",
//   },
//   logoutBtn: {
//     background: "#ef4444",
//     color: "#fff",
//     border: "none",
//     padding: "10px",
//     borderRadius: "8px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "20px",
//   },
//   page: {
//     flex: 1,
//     padding: "30px",
//     overflowY: "auto",
//   },
//   pageTitle: {
//     fontSize: "26px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     color: "#1f2937",
//   },
//   profileHeader: {
//     display: "flex",
//     alignItems: "center",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
//     marginBottom: "20px",
//     transition: "transform 0.2s ease",
//   },
//   avatar: {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     marginRight: "20px",
//     border: "3px solid #4f46e5",
//   },
//   card: {
//     background: "#fff",
//     borderRadius: "12px",
//     padding: "20px",
//     boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
//   },
//   loading: {
//     textAlign: "center",
//     marginTop: "50px",
//     fontSize: "18px",
//   },
// };

// export default StuProfile;


//3
// import React, { useEffect, useState } from "react";

// const StudentProfile = () => {
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       setError("User not logged in.");
//       return;
//     }

//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/students/${userId}`);
//         const data = await res.json();

//         if (res.ok) {
//           setStudent(data);
//         } else {
//           setError(data.error || "Failed to load student data.");
//         }
//       } catch (err) {
//         console.error("Error fetching student data:", err);
//         setError("Server error while loading profile.");
//       }
//     };

//     fetchStudent();
//   }, []);

//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   if (!student) return <p>Loading profile...</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🎓 Student Profile</h2>
//       <p><b>Name:</b> {student.fullName}</p>
//       <p><b>Email:</b> {student.email}</p>
//       <p><b>Phone:</b> {student.phone}</p>
//       <p><b>Role:</b> {student.role}</p>
//     </div>
//   );
// };

// export default StudentProfile;


//4
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const StudentProfile = () => {
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ Fetch student data from backend
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (!userId) {
//       setError("Please login again.");
//       return;
//     }

//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/students/${userId}`);
//         const data = await res.json();

//         if (res.ok) {
//           setStudent(data);
//         } else {
//           setError(data.error || "Failed to load student data. Please login again.");
//         }
//       } catch (err) {
//         console.error("Error fetching student data:", err);
//         setError("Server error while fetching profile data.");
//       }
//     };

//     fetchStudent();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("role");
//     navigate("/");
//   };

//   if (error) {
//     return (
//       <div style={styles.errorContainer}>
//         <h2 style={{ color: "red" }}>{error}</h2>
//         <button style={styles.retryButton} onClick={() => navigate("/")}>
//           🔑 Login Again
//         </button>
//       </div>
//     );
//   }

//   if (!student) {
//     return (
//       <div style={styles.loadingContainer}>
//         <h2>Loading your profile...</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.layout}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <h2>🎓 IT Academy</h2>
//         <ul style={styles.menu}>
//           <li style={styles.menuItem}>🏠 Dashboard</li>
//           <li style={styles.menuItem}>📚 Courses</li>
//           <li style={styles.menuItem}>💳 Payments</li>
//           <li style={styles.menuItem}>📄 Applications</li>
//           <li style={styles.menuItem}>👤 Profile</li>
//         </ul>
//         <button onClick={handleLogout} style={styles.logoutBtn}>
//           🚪 Logout
//         </button>
//       </div>

//       {/* Main Profile Section */}
//       <div style={styles.main}>
//         <h1 style={styles.pageTitle}>👤 My Profile</h1>

//         <div style={styles.card}>
//           <p><strong>Full Name:</strong> {student.fullName}</p>
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone || "N/A"}</p>
//           <p><strong>Role:</strong> {student.role}</p>
//           <p><strong>Account Created:</strong> {new Date(student.createdAt).toLocaleString()}</p>
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
//     backgroundColor: "#f8f9fa",
//   },
//   sidebar: {
//     width: "240px",
//     backgroundColor: "#2c3e50",
//     color: "#fff",
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
//   menu: {
//     listStyle: "none",
//     padding: 0,
//     marginTop: "20px",
//   },
//   menuItem: {
//     padding: "10px 0",
//     borderBottom: "1px solid rgba(255,255,255,0.1)",
//     cursor: "pointer",
//   },
//   logoutBtn: {
//     backgroundColor: "#e74c3c",
//     color: "#fff",
//     border: "none",
//     padding: "10px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   main: {
//     flex: 1,
//     padding: "40px",
//   },
//   pageTitle: {
//     fontSize: "28px",
//     marginBottom: "20px",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     lineHeight: "1.8",
//   },
//   errorContainer: {
//     textAlign: "center",
//     marginTop: "100px",
//   },
//   retryButton: {
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   loadingContainer: {
//     textAlign: "center",
//     marginTop: "100px",
//   },
// };

// export default StudentProfile;


//5
// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const StudentProfile = () => {
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ Logout handler
//   const handleLogout = () => {
//     localStorage.clear(); // clear user data
//     navigate("/login"); // redirect to login page
//   };

//   // ✅ Fetch student data
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       console.warn("⚠️ No userId in localStorage. Please log in first.");
//       navigate("/login");
//       return;
//     }

//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/students/${userId}`);
//         const data = await res.json();

//         if (res.ok) {
//           setStudent(data);
//         } else {
//           setError(data.error || "Failed to load student data. Please login again.");
//         }
//       } catch (err) {
//         console.error("Error fetching student data:", err);
//         setError("Server error while fetching profile data.");
//       }
//     };

//     fetchStudent();
//   }, [navigate]);

//   if (error) {
//     return (
//       <div style={styles.errorContainer}>
//         <h2 style={{ color: "red" }}>{error}</h2>
//         <button style={styles.retryButton} onClick={() => navigate("/login")}>
//           🔑 Login Again
//         </button>
//       </div>
//     );
//   }

//   if (!student) {
//     return (
//       <div style={styles.loadingContainer}>
//         <h2>Loading your profile...</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.layout}>
//       {/* ✅ Sidebar */}
//       <div style={styles.sidebar}>
//         <h2 style={styles.logo}>🎓 IT Academy</h2>

//         <h3 style={styles.sectionTitle}>Student Portal</h3>
//         <ul style={styles.navLinks}>
//           <li><NavLink to="/inquiry" style={styles.navLink}>⁉️ Inquiry</NavLink></li>
//           <li><NavLink to="/studentprofileedit" style={styles.navLink}>👤 Profile</NavLink></li>
//           <li><NavLink to="/studentapplication" style={styles.navLink}>📝 Apply</NavLink></li>
//           <li><NavLink to="/studentpayments" style={styles.navLink}>💳 Payments</NavLink></li>
//         </ul>

//         <button style={styles.logoutBtn} onClick={handleLogout}>
//           🚪 Logout
//         </button>
//       </div>

//       {/* ✅ Main Content */}
//       <div style={styles.main}>
//         <div style={styles.header}>
//           <h1 style={styles.pageTitle}>👤 My Profile</h1>
//         </div>

//         <div style={styles.card}>
//           <div style={styles.infoRow}>
//             <span style={styles.label}>Full Name:</span>
//             <span style={styles.value}>{student.fullName}</span>
//           </div>
//           <div style={styles.infoRow}>
//             <span style={styles.label}>Email:</span>
//             <span style={styles.value}>{student.email}</span>
//           </div>
//           <div style={styles.infoRow}>
//             <span style={styles.label}>Phone:</span>
//             <span style={styles.value}>{student.phone || "N/A"}</span>
//           </div>
//           <div style={styles.infoRow}>
//             <span style={styles.label}>Role:</span>
//             <span style={styles.value}>{student.role}</span>
//           </div>
//           <div style={styles.infoRow}>
//             <span style={styles.label}>Account Created:</span>
//             <span style={styles.value}>
//               {new Date(student.createdAt).toLocaleString()}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   layout: {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "Segoe UI, sans-serif",
//     backgroundColor: "#f4f6f8",
//   },
//   sidebar: {
//     width: "260px",
//     backgroundColor: "#1e293b",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     padding: "20px",
//   },
//   logo: {
//     fontSize: "22px",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: "15px",
//   },
//   sectionTitle: {
//     fontSize: "16px",
//     margin: "15px 0 8px",
//     borderBottom: "1px solid rgba(255,255,255,0.2)",
//     paddingBottom: "5px",
//   },
//   navLinks: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     flex: 1,
//   },
//   navLink: {
//     display: "block",
//     padding: "10px 12px",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "6px",
//     marginBottom: "5px",
//     backgroundColor: "transparent",
//     transition: "0.3s",
//   },
//   logoutBtn: {
//     backgroundColor: "#e11d48",
//     color: "#fff",
//     border: "none",
//     padding: "10px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   main: {
//     flex: 1,
//     padding: "40px",
//     overflowY: "auto",
//   },
//   header: {
//     marginBottom: "25px",
//     borderBottom: "2px solid #e5e7eb",
//     paddingBottom: "10px",
//   },
//   pageTitle: {
//     fontSize: "28px",
//     fontWeight: "600",
//     color: "#111827",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     padding: "25px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   },
//   infoRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "10px 0",
//     borderBottom: "1px solid #f1f5f9",
//   },
//   label: {
//     fontWeight: "600",
//     color: "#374151",
//   },
//   value: {
//     color: "#111827",
//   },
//   errorContainer: {
//     textAlign: "center",
//     marginTop: "100px",
//   },
//   retryButton: {
//     marginTop: "10px",
//     padding: "10px 20px",
//     backgroundColor: "#3b82f6",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   loadingContainer: {
//     textAlign: "center",
//     marginTop: "100px",
//   },
// };

// export default StudentProfile;


//with enhanced UI

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // ✅ Fetch student data
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.warn("⚠️ No userId in localStorage. Please log in first.");
      navigate("/login");
      return;
    }

    const fetchStudent = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/students/${userId}`);
        const data = await res.json();

        if (res.ok) setStudent(data);
        else setError(data.error || "Failed to load student data. Please login again.");
      } catch (err) {
        console.error("Error fetching student data:", err);
        setError("Server error while fetching profile data.");
      }
    };

    fetchStudent();
  }, [navigate]);

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <h2 style={{ color: "red" }}>{error}</h2>
        <button style={styles.retryButton} onClick={() => navigate("/login")}>
          🔑 Login Again
        </button>
      </div>
    );
  }

  if (!student) {
    return (
      <div style={styles.loadingContainer}>
        <h2>Loading your profile...</h2>
      </div>
    );
  }

  return (
    <div style={styles.layout}>
      {/* ✅ Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>🎓 IT Academy</h2>
        <h3 style={styles.sectionTitle}>Student Portal</h3>

        <ul style={styles.navLinks}>
          <li><NavLink to="/inquiry" style={styles.navLink}>⁉️ Inquiry</NavLink></li>
          <li><NavLink to="/studentprofileedit" style={styles.navLink}>👤 Profile</NavLink></li>
          <li><NavLink to="/studentapplication" style={styles.navLink}>📝 Apply</NavLink></li>
          <li><NavLink to="/studentpayments" style={styles.navLink}>💳 Payments</NavLink></li>
        </ul>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      {/* ✅ Main Content */}
      <div style={styles.main}>
        <div style={styles.header}>
          <h1 style={styles.pageTitle}>👤 My Profile</h1>
        </div>

        {/* ✅ Profile Header Card */}
        <div style={styles.profileHeader}>
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(student.fullName)}&background=0D8ABC&color=fff`}
            alt="Profile Avatar"
            style={styles.avatar}
          />
          <div>
            <h2 style={styles.studentName}>{student.fullName}</h2>
            <p style={styles.studentEmail}>{student.email}</p>
          </div>
        </div>

        {/* ✅ Profile Info Card */}
        <div style={styles.card}>
          <h3 style={styles.infoTitle}>Personal Information</h3>

          <div style={styles.infoGrid}>
            <div style={styles.infoBox}>
              <p style={styles.label}>📞 Phone</p>
              <p style={styles.value}>{student.phone || "N/A"}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>🧑 Role</p>
              <p style={styles.value}>{student.role}</p>
            </div>

            <div style={styles.infoBox}>
              <p style={styles.label}>🕒 Account Created</p>
              <p style={styles.value}>
                {new Date(student.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🎨 Styles
const styles = {
  layout: {
    display: "flex",
    height: "100vh",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#f9fafb",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#1e293b",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "15px",
  },
  sectionTitle: {
    fontSize: "16px",
    margin: "15px 0 10px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    paddingBottom: "5px",
  },
  navLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    flex: 1,
  },
  navLink: {
    display: "block",
    padding: "10px 12px",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    marginBottom: "6px",
    transition: "0.3s",
  },
  logoutBtn: {
    backgroundColor: "#e11d48",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  main: {
    flex: 1,
    padding: "40px",
    overflowY: "auto",
  },
  header: {
    marginBottom: "25px",
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: "10px",
  },
  pageTitle: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#111827",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    padding: "20px 25px",
    marginBottom: "30px",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginRight: "20px",
    border: "3px solid #0ea5e9",
  },
  studentName: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "5px",
  },
  studentEmail: {
    color: "#6b7280",
    fontSize: "14px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  infoTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "20px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "10px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  infoBox: {
    backgroundColor: "#f8fafc",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  label: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "5px",
  },
  value: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#111827",
  },
  errorContainer: {
    textAlign: "center",
    marginTop: "100px",
  },
  retryButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loadingContainer: {
    textAlign: "center",
    marginTop: "100px",
  },
};

export default StudentProfile;
