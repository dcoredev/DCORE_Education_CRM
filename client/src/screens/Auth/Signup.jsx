import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Import navigate
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();   // ✅ Initialize navigate hook

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "Student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert("✅ Signup successful!");
        navigate("/Login");  // ✅ Redirect to login
      } else {
        alert("⚠️ " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Error signing up:", err);
      alert("❌ Network error, check if backend is running.");
    }
  };

  return (
    <div className="auth-container">
      <h2>📝 Signup</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group full-width">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit">Signup</button>
        </div>

        <p className="auth-links">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
