import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    // Simulate slight delay to prevent premature redirect
    setTimeout(() => {
      if (userId && role) {
        setIsAuthenticated(true);
      }
      setIsChecking(false);
    }, 300);
  }, []);

  if (isChecking) {
    return (
      <div style={{ textAlign: "center", marginTop: "20vh", fontSize: 20 }}>
        Checking authentication...
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
