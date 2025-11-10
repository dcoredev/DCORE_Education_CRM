


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









// with login options

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     emailOrPhone: "",
//     password: "",
//     role: "Student", // default role
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         alert("✅ Login successful!");
//         localStorage.setItem("userId", data._id);
//         localStorage.setItem("role", data.role);

//         // Redirect based on role
//         if (data.role === "Student") navigate("/studentprofile");
//         else if (data.role === "Admin") navigate("/admin-profile");
//       } else {
//         alert("⚠️ " + data.error);
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       alert("❌ Server error during login.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>🔑 Login</h2>

//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Email / Phone</label>
//           <input
//             type="text"
//             name="emailOrPhone"
//             value={formData.emailOrPhone}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Login As</label>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             style={styles.select}
//           >
//             <option value="Student">Student</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>

//         <button type="submit" style={styles.button}>
//           Login
//         </button>

//         <p style={styles.links}>
//           <a href="/ForgotPassword" style={styles.link}>Forgot Password?</a> <br />
//           Don’t have an account?{" "}
//           <a href="/Signup" style={styles.link}>Create Account</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// // 🎨 Inline CSS
// const styles = {
//   container: {
//     width: "360px",
//     margin: "80px auto",
//     padding: "30px",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//     backgroundColor: "#fff",
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "25px",
//     color: "#333",
//     fontSize: "24px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "stretch",
//   },
//   inputGroup: {
//     marginBottom: "15px",
//     textAlign: "left",
//   },
//   label: {
//     fontWeight: "600",
//     display: "block",
//     marginBottom: "6px",
//     color: "#555",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     outline: "none",
//     fontSize: "14px",
//   },
//   select: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     outline: "none",
//     fontSize: "14px",
//   },
//   button: {
//     marginTop: "20px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     padding: "10px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   links: {
//     marginTop: "15px",
//     fontSize: "14px",
//     color: "#555",
//   },
//   link: {
//     color: "#007BFF",
//     textDecoration: "none",
//   },
// };

// export default Login;
