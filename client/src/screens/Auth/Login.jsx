import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";   // ✅ Import navigate

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });


  const navigate = useNavigate();   // ✅ Initialize navigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
  console.log("User:", data);

  // ✅ Save user info to localStorage
  if (data._id) localStorage.setItem("userId", data._id);
  if (data.role) localStorage.setItem("role", data.role);

  const role = data.role || (data.user && data.user.role);

  if (role === "Student") {
    navigate("/studentprofile");  // ✅ no spaces
  } else if (role === "Admin") {
    navigate("/dashboard");
  } else {
    alert("⚠️ Role not found in response");
  }
} else {
      alert("⚠️ " + data.error);
    }
  } catch (err) {
    console.error("Error logging in:", err);
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
          <button type="submit" >Login</button>
        </div>

        <p className="auth-links">
          <a href="/ForgotPassword "   >Forgot Password?</a> <br />
                 Don't have account?    <a href="/Signup"> Create Account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;


