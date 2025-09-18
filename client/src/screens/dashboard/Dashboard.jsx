import React from "react";
import Header from "../../components/Header";
import "../../components/Sidebar"
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page">
      <Header title="📊 Dashboard" />

      <div className="stats">
        <div className="card">Total Inquiries: 120</div>
        <div className="card">Total Admissions: 40</div>
        <div className="card">Total Revenue: ₹2,50,000</div>
      </div>

      <div className="charts">
        <div className="chart">
          <h3>Inquiries Trend (Monthly)</h3>
          <p>[📈 Chart Placeholder]</p>
        </div>
        <div className="chart">
          <h3>Conversion Funnel</h3>
          <p>[🔄 Funnel Placeholder]</p>
        </div>
        <div className="chart">
          <h3>Revenue Chart</h3>
          <p>[💰 Revenue Graph Placeholder]</p>
        </div>
      </div>

      <div className="recent">
        <h3>Recent Activities</h3>
        <ul>
          <li>📩 Inquiry from John Doe</li>
          <li>💰 Payment from Priya Sharma</li>
          <li>🎓 Admission confirmed for Ramesh</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
