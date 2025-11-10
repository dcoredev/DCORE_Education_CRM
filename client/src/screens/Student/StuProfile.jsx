


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


//batch, course details, reg no, fees, 