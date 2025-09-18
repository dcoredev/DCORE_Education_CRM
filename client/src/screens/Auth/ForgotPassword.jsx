import React, { useState } from "react";
import "./Auth.css";

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("📩 Reset instructions sent!");
      } else {
        alert("⚠️ " + data.error);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="auth-container">
      <h2>🔐 Forgot Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group full-width">
          <label>Email / Phone</label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Send Reset Link / OTP</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
