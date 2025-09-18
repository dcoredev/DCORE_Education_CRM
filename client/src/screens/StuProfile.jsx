


// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const role = localStorage.getItem("role") || "Student"; 
//   return (
//     <div className="sidebar">
//       <h2 className="logo">🎓 IT Academy</h2>
//       {role === "Student" && (
//         <>
//           <h3 className="section-title">Student Portal</h3>
//           <ul className="nav-links">
//             <li><NavLink to="/student/profile">👤 Profile</NavLink></li>
//             <li><NavLink to="/student/application">📝 Apply</NavLink></li>
//             <li><NavLink to="/student/payments">💳 Payments</NavLink></li>
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// const StuProfile = () => {
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//   const userId = localStorage.getItem("userId");
// if (!userId) {
//   console.warn("⚠️ No userId in localStorage. Please log in first.");
//   return;
// }


//   fetch(`http://localhost:5000/api/users/${userId}`)
//     .then(async (res) => {
//       console.log("📡 Response status:", res.status);
//       const data = await res.json();
//       console.log("📡 Response body:", data);
//       if (!res.ok) throw new Error(data.error || "Request failed");
//       setStudent(data);
//     })
//     .catch((err) => console.error("❌ Error fetching student:", err));
// }, []);


//   if (!student) {
//     return <div className="page">⏳ Loading profile...</div>;
//   }

//   return (
//     <div className="layout">
//       <Sidebar />
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


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role") || "Student"; 
  return (
    <div className="sidebar">
      <h2 className="logo">🎓 IT Academy</h2>
      {role === "Student" && (
        <>
          <h3 className="section-title">Student Portal</h3>
          <ul className="nav-links">
             <li><NavLink to="/inquiry">⁉️ Inquiry</NavLink></li>
            <li><NavLink to="/studentprofileedit">👤 Profile</NavLink></li>
            <li><NavLink to="/studentapplication">📝 Apply</NavLink></li>
            <li><NavLink to="/studentpayments">💳 Payments</NavLink></li>
           
           
          </ul>
        </>
      )}
    </div>
  );
};

const StuProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.warn("⚠️ No userId in localStorage. Please log in first.");
      return;
    }

    fetch(`http://localhost:5000/api/users/${userId}`)
      .then(async (res) => {
        console.log("📡 Response status:", res.status);
        const data = await res.json();
        console.log("📡 Response body:", data);
        if (!res.ok) throw new Error(data.error || "Request failed");
        setStudent(data);
      })
      .catch((err) => console.error("❌ Error fetching student:", err));
  }, []);

  if (!student) {
    return <div className="page">⏳ Loading profile...</div>;
  }

  return (
    <div className="layout">
      {/* Internal CSS */}
      <style>{`
        .layout {
          display: flex;
          height: 100vh;
          background: #f9fafc;
          font-family: "Segoe UI", Roboto, Arial, sans-serif;
        }

        .sidebar {
          width: 250px;
          background: linear-gradient(180deg, #4f46e5, #4338ca);
          color: #fff;
          padding: 20px;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 30px;
          text-align: center;
        }

        .section-title {
          font-size: 14px;
          margin: 15px 0 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
        }

        .nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-links li {
          margin-bottom: 12px;
        }

        .nav-links a {
          text-decoration: none;
          color: #e0e7ff;
          font-size: 16px;
          padding: 10px 14px;
          border-radius: 8px;
          display: block;
          transition: all 0.2s ease-in-out;
        }

        .nav-links a:hover,
        .nav-links a.active {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        .page {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }

        .page-title {
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #1f2937;
        }

        .profile-header {
          display: flex;
          align-items: center;
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
          transition: transform 0.2s ease;
        }

        .profile-header:hover {
          transform: translateY(-2px);
        }

        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 20px;
          border: 3px solid #4f46e5;
        }

        .card {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .card h3 {
          font-size: 18px;
          margin-bottom: 12px;
          color: #4f46e5;
        }

        .card p {
          margin: 6px 0;
          font-size: 15px;
          color: #374151;
        }

        .card strong {
          color: #111827;
        }
      `}</style>

      <Sidebar />
      <div className="page">
        <h1 className="page-title">👤 Student Profile</h1>

        <div className="profile-header">
          <img
            src={`https://i.pravatar.cc/120?u=${student._id}`}
            alt="Student Avatar"
            className="avatar"
          />
          <div>
            <h2>{student.fullName}</h2>
            <p>📧 {student.email}</p>
            <p>📞 {student.phone}</p>
          </div>
        </div>

        <div className="card">
          <h3>Account Info</h3>
          <p><strong>Role:</strong> {student.role}</p>
          <p><strong>User ID:</strong> {student._id}</p>
          <p><strong>Created At:</strong> {new Date(student.createdAt).toLocaleString()}</p>
          <p><strong>Last Updated:</strong> {new Date(student.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StuProfile;
