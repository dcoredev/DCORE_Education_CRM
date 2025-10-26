


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
