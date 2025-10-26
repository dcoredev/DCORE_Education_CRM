


import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

const AdminPayments = () => {
  const [students, setStudents] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    studentId: "",
    total: "",
    deposit: "",
    monthly: "",
    final: "",
    notes: "",
  });
  const [feeStatus, setFeeStatus] = useState("Pending");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query) return setSuggestions([]);
    const filtered = students.filter(
      (s) =>
        s.fullName.toLowerCase().includes(query.toLowerCase()) ||
        s.email.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelectStudent = async (student) => {
    setSearchQuery(`${student.fullName} (${student.email})`);
    setFormData((prev) => ({ ...prev, studentId: student._id }));
    setSuggestions([]);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/payments/${student._id}`
      );
      const fee = res.data.fees || {};
      setFormData((prev) => ({
        ...prev,
        total: fee.total || "",
        deposit: fee.deposit || "",
        monthly: fee.monthly || "",
        final: fee.final || "",
        notes: fee.notes || "",
      }));
      setFeeStatus(fee.status || "Pending");
    } catch (err) {
      console.error(err);
      setFeeStatus("Pending");
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentId) return setMessage("Select a student first!");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/payments/assign-fee",
        formData
      );
      setFeeStatus(res.data.fee.status || "Updated");
      setMessage("✅ Fee assigned/updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to assign fee");
    }
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="page">
        <h1 className="pageTitle">💳 Manage Student Fees</h1>

        <div
          style={{
            maxWidth: 500,
            margin: "20px auto",
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 10,
            background: "#fff",
          }}
        >
          {message && (
            <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            {/* Search Student */}
            <div style={{ position: "relative", marginBottom: 15 }}>
              <input
                type="text"
                placeholder="Search student"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ width: "100%", padding: 10 }}
              />
              {suggestions.length > 0 && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    border: "1px solid #ccc",
                    background: "#fff",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    maxHeight: 150,
                    overflowY: "auto",
                    zIndex: 10,
                  }}
                >
                  {suggestions.map((s) => (
                    <li
                      key={s._id}
                      onMouseDown={() => handleSelectStudent(s)}
                      style={{
                        padding: 8,
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {s.fullName} ({s.email})
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Fee Inputs */}
            <input
              type="number"
              name="total"
              placeholder="Total Fee"
              value={formData.total}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <input
              type="number"
              name="deposit"
              placeholder="Deposit"
              value={formData.deposit}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <input
              type="number"
              name="monthly"
              placeholder="Monthly Fee"
              value={formData.monthly}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <input
              type="number"
              name="final"
              placeholder="Final Payment"
              value={formData.final}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
              }}
            />
            <textarea
              name="notes"
              placeholder="Notes"
              value={formData.notes}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
                height: 60,
              }}
            />

            <p>
              Current Fee Status: <strong>{feeStatus}</strong>
            </p>
            <button
              type="submit"
              style={{
                padding: 10,
                background: "#6b48ff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                width: "100%",
                borderRadius: 6,
              }}
            >
              Assign / Update Fee
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .layout {
          display: flex;
          height: 100vh;
          font-family: Arial, sans-serif;
          background: #ecf0f1;
        }
        .page {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }
        .pageTitle {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default AdminPayments;
