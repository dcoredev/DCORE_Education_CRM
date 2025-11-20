


// import React, { useEffect, useState } from "react";
// import Header from "../../components/Header";
// import { NavLink, useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     inquiries: 0,
//     admissions: 0,
//     users: 0,
//     revenue: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // 🔹 Fetch dashboard stats
//   useEffect(() => {
//     fetch("http://localhost:5000/api/dashboard/stats")
//       .then((res) => res.json())
//       .then((data) => {
//         setStats(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching dashboard stats:", err);
//         setLoading(false);
//       });
//   }, []);

//   // 🔹 Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       {/* ---------- SIDEBAR ---------- */}
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

//       {/* ---------- MAIN CONTENT ---------- */}
//       <div className="page">
//         <Header title="📊 Dashboard" />

//         {loading ? (
//           <p>Loading stats...</p>
//         ) : (
//           <div className="stats">
//             <div className="card">Total Inquiries: {stats.inquiries}</div>
//             <div className="card">Total Admissions: {stats.application}</div>
//             <div className="card">Total Users: {stats.users}</div>
//             <div className="card">Total Revenue: ₹{stats.revenue}</div>
//           </div>
//         )}

    

//         <div className="recent">
//           <h3>Recent Activities</h3>
//           <ul>
//             <li>📩 Inquiry from </li>
//             <li>💰 Payment from </li>
//             <li>🎓 Admission confirmed for </li>
//           </ul>
//         </div>
//       </div>

//       {/* ---------- STYLES ---------- */}
//       <style>{`
//         .sidebar {
//           width: 240px;
//           background: #2c3e50;
//           color: #ecf0f1;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           padding: 20px;
//         }
//         .logo {
//           font-size: 22px;
//           font-weight: bold;
//           text-align: center;
//           margin-bottom: 30px;
//         }
//         .navLinks {
//           list-style: none;
//           padding: 0;
//           flex: 1;
//         }
//         .navLinks li {
//           margin: 12px 0;
//         }
//         .link {
//           color: #ecf0f1;
//           text-decoration: none;
//           font-size: 16px;
//           display: block;
//           padding: 8px 12px;
//           border-radius: 8px;
//           transition: background 0.3s;
//         }
//         .link:hover, .link.active {
//           background: #1abc9c;
//         }
//         .logoutBtn {
//           background: #e74c3c;
//           border: none;
//           color: white;
//           padding: 10px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 15px;
//           transition: background 0.3s;
//         }
//         .logoutBtn:hover {
//           background: #c0392b;
//         }
//         .page {
//           flex: 1;
//           padding: 20px;
//           font-family: "Segoe UI", Roboto, Arial, sans-serif;
//           background: #f9fafc;
//         }
//         .stats {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 20px;
//           margin-bottom: 30px;
//         }
//         .card {
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//           font-size: 18px;
//           font-weight: 500;
//           color: #374151;
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }
//         .card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
//         }
//         .charts {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 20px;
//           margin-bottom: 30px;
//         }
//         .chart {
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//         }
//         .chart h3 {
//           margin-bottom: 10px;
//           font-size: 16px;
//           color: #4f46e5;
//         }
//         .recent {
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//         }
//         .recent h3 {
//           margin-bottom: 15px;
//           font-size: 18px;
//           color: #4f46e5;
//         }
//         .recent ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .recent li {
//           padding: 8px 0;
//           border-bottom: 1px solid #e5e7eb;
//           font-size: 15px;
//           color: #374151;
//         }
//         .recent li:last-child {
//           border-bottom: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Dashboard;



// src/screens/dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    inquiries: 0,
    applications: 0,
    admissionsApproved: 0,
    users: 0,
    revenue: 0,
  });
  const [recent, setRecent] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // stats
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard/stats");
        const data = await res.json();
        if (res.ok) setStats(data);
        else console.warn("Stats fetch failed:", data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoadingStats(false);
      }
    })();

    // recent activities
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard/recent");
        const data = await res.json();
        if (res.ok && data.recent) setRecent(data.recent);
        else console.warn("Recent fetch failed:", data);
      } catch (err) {
        console.error("Error fetching recent activities:", err);
      } finally {
        setLoadingRecent(false);
      }
    })();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const formatDate = (d) => {
    if (!d) return "";
    const date = new Date(d);
    return date.toLocaleString();
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR inline (you already have a Sidebar component — replace it if you want) */}
      <div className="sidebar">
        <h2 className="logo">🛠️ Admin Panel</h2>
        <ul className="navLinks">
          <li><NavLink to="/dashboard" className="link">📊 Dashboard</NavLink></li>
          <li><NavLink to="/admin-inquiries" className="link">📩 Inquiries</NavLink></li>
          <li><NavLink to="/admin-admissions" className="link">🎓 Admissions</NavLink></li>
          <li><NavLink to="/admin-payments" className="link">💳 Payments</NavLink></li>
          <li><NavLink to="/admin-reports" className="link">📑 Reports</NavLink></li>
        </ul>
        <button className="logoutBtn" onClick={handleLogout}>🚪 Logout</button>
      </div>

      <div className="page">
        <Header title="📊 Dashboard" />

        {/* STATS */}
        <div style={{ marginBottom: 20 }}>
          {loadingStats ? (
            <p>Loading stats...</p>
          ) : (
            <div className="stats">
              <div className="card">Total Inquiries: {stats.inquiries}</div>
              <div className="card">Total Applications: {stats.applications}</div>
              <div className="card">Total Admissions (approved): {stats.admissionsApproved}</div>
              <div className="card">Total Users: {stats.users}</div>
              <div className="card">Total Revenue: ₹{stats.revenue}</div>
            </div>
          )}
        </div>

        {/* RECENT ACTIVITIES */}
        <div className="recent">
          <h3>Recent Activities</h3>

          {loadingRecent ? (
            <p>Loading recent activities...</p>
          ) : recent.length === 0 ? (
            <p style={{ color: "#6b7280" }}>No recent activities yet.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recent.map((item) => (
                <li key={`${item.type}-${item.id}`} style={{ padding: "10px 0", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>
                      {item.type === "inquiry" && "📩 Inquiry from "}
                      {item.type === "admission" && "🎓 Application — "}
                      {item.type === "payment" && "💰 Payment — "}
                      <span style={{ marginLeft: 6 }}>{item.title}</span>
                    </div>
                    <div style={{ color: "#6b7280", fontSize: 13 }}>
                      {item.subtitle} {item.payload && item.payload.status ? ` • ${item.payload.status}` : ""}
                    </div>
                  </div>

                  <div style={{ textAlign: "right", minWidth: 130 }}>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>{formatDate(item.date)}</div>
                    {/* optional quick action */}
                    {item.type === "admission" && (
                      <a href={`/admin-admissions`} style={{ fontSize: 12, color: "#4f46e5", textDecoration: "none" }}>View</a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Styles (kept inline to match your previous approach) */}
      <style>{`
        .sidebar {
          width: 240px;
          background: #2c3e50;
          color: #ecf0f1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }
        .logo {
          font-size: 22px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 30px;
        }
        .navLinks { list-style: none; padding: 0; flex: 1; }
        .navLinks li { margin: 12px 0; }
        .link { color: #ecf0f1; text-decoration: none; display: block; padding: 8px 12px; border-radius: 8px; }
        .logoutBtn { background: #e74c3c; border: none; color: white; padding: 10px; border-radius: 8px; cursor: pointer; }
        .page { flex: 1; padding: 20px; font-family: "Segoe UI", Roboto, Arial, sans-serif; background: #f9fafc; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .card { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); font-size: 18px; font-weight: 500; color: #374151; }
        .recent { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); margin-top: 10px; }
        .recent h3 { margin-bottom: 10px; color: #1f2937; }
      `}</style>
    </div>
  );
};

export default Dashboard;
