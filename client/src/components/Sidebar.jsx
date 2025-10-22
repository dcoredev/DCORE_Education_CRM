// 📁 src/components/AdminSidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <style>{`
        .sidebar { width: 250px; background: #2c3e50; color: #fff; padding: 20px; display: flex; flex-direction: column; height: 100vh; }
        .logo { margin-bottom: 20px; font-size: 22px; font-weight: bold; }
        .navLinks { list-style: none; padding: 0; flex: 1; }
        .navLinks li { margin-bottom: 8px; }
        .link { display: block; color: #ecf0f1; text-decoration: none; padding: 10px 0; font-size: 16px; transition: color 0.2s ease; }
        .link:hover, .active { color: #1abc9c; }
        .logoutBtn { background: #e74c3c; color: #fff; border: none; padding: 10px; border-radius: 6px; cursor: pointer; margin-top: 20px; font-size: 16px; transition: background 0.2s ease; }
        .logoutBtn:hover { background: #c0392b; }
      `}</style>

      <h2 className="logo">🛠️ Admin Panel</h2>
      <ul className="navLinks">
        <li><NavLink to="/Dashboard" className="link">📊 Dashboard</NavLink></li>
        <li><NavLink to="/admin-inquiries" className="link">📩 Inquiries</NavLink></li>
        <li><NavLink to="/admin-admissions" className="link">🎓 Admissions</NavLink></li>
        <li><NavLink to="/admin-payments" className="link">💳 Payments</NavLink></li>
        <li><NavLink to="/admin-reports" className="link">📑 Reports</NavLink></li>
        {/* <li><NavLink to="/admin/users" className="link">👥 Users / Roles</NavLink></li> */}
      </ul>

      <button className="logoutBtn" onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
};

export default AdminSidebar;
