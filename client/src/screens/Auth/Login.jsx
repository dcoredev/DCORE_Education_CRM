// import React, { useState } from "react";
// import "./Auth.css";
// import { useNavigate } from "react-router-dom";   // ✅ Import navigate

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });


//   const navigate = useNavigate();   // ✅ Initialize navigate hook

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();

//     if (res.ok) {
//   alert("✅ Login successful!");
//   console.log("User:", data);

//   // ✅ Save user info to localStorage
//   if (data._id) localStorage.setItem("userId", data._id);
//   if (data.role) localStorage.setItem("role", data.role);

//   const role = data.role || (data.user && data.user.role);

//   if (role === "Student") {
//     navigate("/studentprofile");  // ✅ no spaces
//   } else if (role === "Admin") {
//     navigate("/admin-profile");
//   } else {
//     alert("⚠️ Role not found in response");
//   }
// } else {
//       alert("⚠️ " + data.error);
//     }
//   } catch (err) {
//     console.error("Error logging in:", err);
//   }
// };


//   return (
//     <div className="auth-container">
//       <h2>🔑 Login</h2>
//       <form onSubmit={handleSubmit} className="auth-form">
//         <div className="form-group full-width">
//           <label>Email / Phone</label>
//           <input
//             type="text"
//             name="emailOrPhone"
//             value={formData.emailOrPhone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group full-width">
//           <label>Password</label>
//           <input      
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-actions">
//           <button type="submit" >Login</button>
//         </div>

//         <p className="auth-links">
//           <a href="/ForgotPassword "   >Forgot Password?</a> <br />
//                  Don't have account?    <a href="/Signup"> Create Account</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;



//2
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
//         localStorage.setItem("userId", data._id);
//         localStorage.setItem("role", data.role);

//         if (data.role === "Student") navigate("/studentprofile");
//         else if (data.role === "Admin") navigate("/admin-profile");
//       } else alert(data.error);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔑 Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label>Email / Phone</label>
//         <input
//           type="text"
//           name="emailOrPhone"
//           value={formData.emailOrPhone}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />

//         <button type="submit" style={styles.button}>Login</button>

//         {/* Links */}
//         <div style={styles.links}>
//           <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
//           <span style={{ margin: "0 5px" }}>|</span>
//           <a href="/signup" style={styles.link}>Create Account</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     textAlign: "center",
//     fontFamily: "Arial",
//   },
//   form: { display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" },
//   input: { padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #aaa" },
//   button: { padding: "10px", fontSize: "16px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" },
//   links: { marginTop: "10px", fontSize: "14px" },
//   link: { textDecoration: "none", color: "#007bff" },
// };

// export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

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
//         localStorage.setItem("userId", data._id);
//         localStorage.setItem("role", data.role);

//         if (data.role === "Student") navigate("/studentprofile");
//         else if (data.role === "Admin") navigate("/admin-profile");
//       } else {
//         alert(data.error);
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔑 Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div>
//           <label>Email / Phone</label>
//           <input
//             type="text"
//             name="emailOrPhone"
//             value={formData.emailOrPhone}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>

//         <button type="submit" style={styles.button}>Login</button>

//         <div style={styles.links}>
//           <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
//           <span style={{ margin: "0 5px" }}>|</span>
//           <a href="/signup" style={styles.link}>Create Account</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     textAlign: "center",
//     fontFamily: "Arial",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//     marginTop: "20px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #aaa",
//   },
//   button: {
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     cursor: "pointer",
//   },
//   links: {
//     marginTop: "10px",
//     fontSize: "14px",
//   },
//   link: {
//     textDecoration: "none",
//     color: "#007bff",
//   },
// };

// export default Login;


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
