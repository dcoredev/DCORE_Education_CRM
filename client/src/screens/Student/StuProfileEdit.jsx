import React, { useEffect, useState } from "react";

const StuProfileEdit = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    fetch(`http://localhost:5000/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error("❌ Error fetching profile:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      alert("✅ Profile updated successfully!");
    } catch (err) {
      console.error("❌ Error updating profile:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="page">
      <h1>✏️ Edit Profile</h1>
      <form onSubmit={handleSubmit} className="card">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">💾 Save Changes</button>
      </form>

      <style>{`
        .page { padding: 30px; }
        form.card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 400px;
        }
        label { font-weight: bold; }
        input {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 6px;
        }
        button {
          background: #4f46e5;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover { background: #4338ca; }
      `}</style>
    </div>
  );
};

export default StuProfileEdit;
