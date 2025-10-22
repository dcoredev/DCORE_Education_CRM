import React from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.page}>
        <h1 style={styles.pageTitle}>👥 Users & Roles</h1>
        <p>Here you can manage users and their roles.</p>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div style={styles.sidebar}>
    <h2 style={styles.logo}>🛠️ Admin Panel</h2>
    <ul style={styles.navLinks}>
      <li><NavLink to="/admin/dashboard" style={styles.link}>📊 Dashboard</NavLink></li>
      <li><NavLink to="/admin/inquiries" style={styles.link}>📩 Inquiries</NavLink></li>
      <li><NavLink to="/admin/admissions" style={styles.link}>🎓 Admissions</NavLink></li>
      <li><NavLink to="/admin/payments" style={styles.link}>💳 Payments</NavLink></li>
      <li><NavLink to="/admin/reports" style={styles.link}>📑 Reports</NavLink></li>
      <li><NavLink to="/admin/users" style={styles.link}>👥 Users / Roles</NavLink></li>
    </ul>
  </div>
);

const styles = {
  layout: { display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" },
  sidebar: { width: "250px", background: "#2c3e50", color: "#fff", padding: "20px" },
  logo: { marginBottom: "20px", fontSize: "22px", fontWeight: "bold" },
  navLinks: { listStyle: "none", padding: 0 },
  link: { display: "block", color: "#ecf0f1", textDecoration: "none", padding: "10px 0", fontSize: "16px" },
  page: { flex: 1, padding: "30px", background: "#ecf0f1", overflowY: "auto" },
  pageTitle: { fontSize: "24px", marginBottom: "20px" },
};

export default Users;
