import React from "react";
import Header from "../components/Header";

const Applications = () => {
  return (
    <div className="page">
      <Header title="📝 Applications" />

      <table className="table">
        <thead>
          <tr><th>Student</th><th>Course</th><th>Status</th><th>Date Applied</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td><td>Full Stack Development</td><td>Applied</td><td>2025-08-10</td>
          </tr>
          <tr>
            <td>Priya Sharma</td><td>Data Science</td><td>Shortlisted</td><td>2025-08-12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
