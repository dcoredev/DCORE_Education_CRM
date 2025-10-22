import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const StudentPayments = () => {
  const [fees, setFees] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const studentId = localStorage.getItem("userId");// Replace with auth context

  useEffect(() => {
    const fetchStudentPayments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/payments/${studentId}`);
        const data = await res.json();
        console.log("Fetched data:", data);
        setFees(data.fees);
        setPayments(data.payments || []);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching student payments:", err);
        setLoading(false);
      }
    };

    fetchStudentPayments();
  }, [studentId]);

  const totalPaid = payments.reduce((sum, p) => sum + Number(p.amount || 0), 0);
  const totalDue = fees ? Number(fees.total || 0) - totalPaid : 0;

  const handlePayNow = () => {
    if (totalDue > 0) {
      alert(`Please pay ₹${totalDue} via your preferred method. Redirecting to payment gateway...`);
      // TODO: Integrate with a payment gateway
    } else {
      alert("No dues pending!");
    }
  };

  return (
    <div className="page">
      <Header title="💳 My Payments" />

      <style>{`
        .student-payments {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-top: 20px;
        }
        .fee-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        .card-box {
          background: #f5f6fa;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }
        .card-box h3 {
          margin: 5px 0;
          font-size: 18px;
        }
        .card-box p {
          font-size: 16px;
          font-weight: bold;
          color: #2d3436;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        th, td {
          padding: 12px;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        th {
          background: #f1f2f6;
          font-weight: 600;
        }
        tr:hover {
          background: #f9f9f9;
        }
        .status {
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: bold;
        }
        .Completed {
          background: #55efc4;
          color: #2d3436;
        }
        .Pending {
          background: #ffeaa7;
          color: #636e72;
        }
        .Partial {
          background: #fab1a0;
          color: #d63031;
        }
        .pay-now-btn {
          padding: 10px 20px;
          background: #ff4757;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 15px;
        }
        .pay-now-btn:hover {
          background: #e84118;
        }
      `}</style>

      <div className="student-payments">
        {loading ? (
          <p>⏳ Loading payment details...</p>
        ) : !fees ? (
          <p>No fee structure available.</p>
        ) : (
          <>
            <div className="fee-card">
              <div className="card-box">
                <h3>Total Fees</h3>
                <p>₹{fees.total}</p>
              </div>
              <div className="card-box">
                <h3>Deposit</h3>
                <p>₹{fees.deposit}</p>
              </div>
              <div className="card-box">
                <h3>Monthly Fee</h3>
                <p>₹{fees.monthly}</p>
              </div>
              <div className="card-box">
                <h3>Final Payment</h3>
                <p>₹{fees.final}</p>
              </div>
              <div className="card-box">
                <h3>Total Paid</h3>
                <p>₹{totalPaid}</p>
              </div>
              <div className="card-box">
                <h3>Due Amount</h3>
                <p>₹{totalDue}</p>
              </div>
              <div className="card-box">
                <h3>Status</h3>
                <p>
                  <span className={`status ${fees.status}`}>{fees.status}</span>
                </p>
              </div>
            </div>

            {totalDue > 0 && (
              <button className="pay-now-btn" onClick={handlePayNow}>
                Pay Now (₹{totalDue})
              </button>
            )}

            <h3>Payment History</h3>
            {payments.length === 0 ? (
              <p>No payments found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Amount (₹)</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p) => (
                    <tr key={p._id}>
                      <td>{p.amount}</td>
                      <td>
                        <span className={`status ${p.status}`}>{p.status}</span>
                      </td>
                      <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudentPayments;


