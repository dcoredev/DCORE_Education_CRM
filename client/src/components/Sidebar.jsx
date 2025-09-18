// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>🎓 IT Academy CRM</h2>
//       <ul>
//         <li><Link to="/">Dashboard</Link></li>
//         <li><Link to="/inquiries">Inquiries</Link></li>
//         <li><Link to="/pipeline">Admissions Pipeline</Link></li>
//         <li><Link to="/applications">Applications</Link></li>
//         <li><Link to="/payments">Payments</Link></li>
//         <li><Link to="/reports">Reports</Link></li>
//         <li><Link to="/users">Users & Roles</Link></li>
//         <li><Link to="/settings">Settings</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../screens/crm.css";

const Sidebar = () => {
  // Read role from localStorage
  const role = localStorage.getItem("role"); // "Admin" or "Student"

  return (
    <div className="sidebar">
      <h2 className="logo">🎓 IT Academy</h2>

      {role === "Admin" && (
        <>
          <h3 className="section-title">Admin CRM</h3>
          <ul className="nav-links">
            <li><NavLink to="/" end>📊 Dashboard</NavLink></li>
            <li><NavLink to="/inquiries">📩 Inquiries</NavLink></li>
            <li><NavLink to="/pipeline">📈 Admissions Pipeline</NavLink></li>
            <li><NavLink to="/applications">📝 Applications</NavLink></li>
            <li><NavLink to="/payments">💰 Payments</NavLink></li>
            <li><NavLink to="/reports">📑 Reports</NavLink></li>
            <li><NavLink to="/users">👥 Users & Roles</NavLink></li>
            <li><NavLink to="/settings">⚙️ Settings</NavLink></li>
          </ul>
        </>
      )}

      {role === "Student" && (
        <>
          <h3 className="section-title">Student Portal</h3>
          <ul className="nav-links">
            <li><NavLink to="/student/profile">👤 Profile</NavLink></li>
            <li><NavLink to="/student/application">📝 Apply</NavLink></li>
            <li><NavLink to="/student/payments">💳 Payments</NavLink></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
