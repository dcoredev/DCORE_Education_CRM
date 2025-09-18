import React, { useEffect, useState } from "react";

const StuPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    fetch(`http://localhost:5000/api/payments/${userId}`)
      .then((res) => res.json())
      .then((data) => setPayments(data))
      .catch((err) => console.error("❌ Error fetching payments:", err));
  }, []);

  return (
    <div className="page">
      <h1>💳 Payments</h1>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <table className="card">
          <thead>
            <tr>
              <th>Txn ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p._id}>
                <td>{p.transactionId}</td>
                <td>₹{p.amount}</td>
                <td>{p.status}</td>
                <td>{new Date(p.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <style>{`
        .page { padding: 30px; }
        table.card {
          width: 100%;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        th {
          background: #f3f4f6;
          color: #374151;
        }
        tr:hover { background: #f9fafc; }
      `}</style>
    </div>
  );
};

export default StuPayments;
