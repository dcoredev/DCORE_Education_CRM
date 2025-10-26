


//3
import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");

        // ✅ Save to localStorage
        localStorage.setItem("userId", data._id);
        localStorage.setItem("role", data.role);

        // ✅ Redirect based on role
        if (data.role === "Student") navigate("/studentprofile");
        else if (data.role === "Admin") navigate("/admin-profile");
        else alert("⚠️ Unknown role, please contact admin.");
      } else {
        alert("⚠️ " + data.error);
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("❌ Server error during login.");
    }
  };

  return (
    <div className="auth-container">
      <h2>🔑 Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group full-width">
          <label>Email / Phone</label>
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
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

        <div className="form-actions">
          <button type="submit">Login</button>
        </div>

        <p className="auth-links">
          <a href="/ForgotPassword">Forgot Password?</a> <br />
          Don’t have an account? <a href="/Signup">Create Account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
