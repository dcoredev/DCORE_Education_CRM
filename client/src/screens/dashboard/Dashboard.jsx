

// import React, { useEffect, useState } from "react";
// import Header from "../../components/Header";

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     inquiries: 0,
//     admissions: 0,
//     users: 0,
//     revenue: 0,
//   });

//   const [loading, setLoading] = useState(true);
  

// useEffect(() => {
//   fetch("http://localhost:5000/api/dashboard/stats")
//     .then((res) => res.json())
//     .then((data) => {
//       setStats(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("❌ Error fetching dashboard stats:", err);
//       setLoading(false);
//     });
// }, []);


//   return (
//     <div className="page">
//       {/* Internal CSS */}
//       <style>{`
//         .page {
//           padding: 20px;
//           font-family: "Segoe UI", Roboto, Arial, sans-serif;
//           background: #f9fafc;
//           min-height: 100vh;
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

//       <Header title="📊 Dashboard" />

//       {/* <div className="stats">
//         <div className="card">Total Inquiries: {stats.inquiries}</div>
//         <div className="card">Total Admissions: {stats.admissions}</div>
//         <div className="card">Total Users: {stats.users}</div>
//         <div className="card">Total Revenue: ₹{stats.revenue}</div>
//       </div> */}

//       {loading ? (
//   <p>Loading stats...</p>
// ) : (
//   <div className="stats">
//     <div className="card">Total Inquiries: {stats.inquiries}</div>
//     <div className="card">Total Admissions: {stats.admissions}</div>
//     <div className="card">Total Users: {stats.users}</div>
//     <div className="card">Total Revenue: ₹{stats.revenue}</div>
//   </div>
// )}


//       <div className="charts">
//         <div className="chart">
//           <h3>Inquiries Trend (Monthly)</h3>
//           <p>[📈 Chart Placeholder]</p>
//         </div>
//         <div className="chart">
//           <h3>Conversion Funnel</h3>
//           <p>[🔄 Funnel Placeholder]</p>
//         </div>
//         <div className="chart">
//           <h3>Revenue Chart</h3>
//           <p>[💰 Revenue Graph Placeholder]</p>
//         </div>
//       </div>

//       <div className="recent">
//         <h3>Recent Activities</h3>
//         <ul>
//           <li>📩 Inquiry from John Doe</li>
//           <li>💰 Payment from Priya Sharma</li>
//           <li>🎓 Admission confirmed for Ramesh</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    inquiries: 0,
    admissions: 0,
    users: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 Fetch dashboard stats
  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching dashboard stats:", err);
        setLoading(false);
      });
  }, []);

  // 🔹 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* ---------- SIDEBAR ---------- */}
      <div className="sidebar">
        <h2 className="logo">🛠️ Admin Panel</h2>
        <ul className="navLinks">
          <li><NavLink to="/Dashboard" className="link">📊 Dashboard</NavLink></li>
          <li><NavLink to="/admin-inquiries" className="link">📩 Inquiries</NavLink></li>
          <li><NavLink to="/admin-admissions" className="link">🎓 Admissions</NavLink></li>
          <li><NavLink to="/admin-payments" className="link">💳 Payments</NavLink></li>
          <li><NavLink to="/admin/reports" className="link">📑 Reports</NavLink></li>
          <li><NavLink to="/admin/users" className="link">👥 Users / Roles</NavLink></li>
        </ul>
        <button className="logoutBtn" onClick={handleLogout}>🚪 Logout</button>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="page">
        <Header title="📊 Dashboard" />

        {loading ? (
          <p>Loading stats...</p>
        ) : (
          <div className="stats">
            <div className="card">Total Inquiries: {stats.inquiries}</div>
            <div className="card">Total Admissions: {stats.admissions}</div>
            <div className="card">Total Users: {stats.users}</div>
            <div className="card">Total Revenue: ₹{stats.revenue}</div>
          </div>
        )}

        <div className="charts">
          <div className="chart">
            <h3>Inquiries Trend (Monthly)</h3>
            <p>[📈 Chart Placeholder]</p>
          </div>
          <div className="chart">
            <h3>Conversion Funnel</h3>
            <p>[🔄 Funnel Placeholder]</p>
          </div>
          <div className="chart">
            <h3>Revenue Chart</h3>
            <p>[💰 Revenue Graph Placeholder]</p>
          </div>
        </div>

        <div className="recent">
          <h3>Recent Activities</h3>
          <ul>
            <li>📩 Inquiry from John Doe</li>
            <li>💰 Payment from Priya Sharma</li>
            <li>🎓 Admission confirmed for Ramesh</li>
          </ul>
        </div>
      </div>

      {/* ---------- STYLES ---------- */}
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
        .navLinks {
          list-style: none;
          padding: 0;
          flex: 1;
        }
        .navLinks li {
          margin: 12px 0;
        }
        .link {
          color: #ecf0f1;
          text-decoration: none;
          font-size: 16px;
          display: block;
          padding: 8px 12px;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .link:hover, .link.active {
          background: #1abc9c;
        }
        .logoutBtn {
          background: #e74c3c;
          border: none;
          color: white;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
          transition: background 0.3s;
        }
        .logoutBtn:hover {
          background: #c0392b;
        }
        .page {
          flex: 1;
          padding: 20px;
          font-family: "Segoe UI", Roboto, Arial, sans-serif;
          background: #f9fafc;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        .card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          font-size: 18px;
          font-weight: 500;
          color: #374151;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        .charts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        .chart {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }
        .chart h3 {
          margin-bottom: 10px;
          font-size: 16px;
          color: #4f46e5;
        }
        .recent {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }
        .recent h3 {
          margin-bottom: 15px;
          font-size: 18px;
          color: #4f46e5;
        }
        .recent ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .recent li {
          padding: 8px 0;
          border-bottom: 1px solid #e5e7eb;
          font-size: 15px;
          color: #374151;
        }
        .recent li:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
