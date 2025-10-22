import React from "react";
import Header from "../../components/Header";

const stages = [
  "New", "Contacted", "Interested", "Applied", "Shortlisted", "Admitted", "Enrolled"
];

const Pipeline = () => {
  return (
    <div className="page">
      <Header title="📈 Admissions Pipeline" />

      <div className="pipeline">
        {stages.map((stage) => (
          <div className="kanban-column" key={stage}>
            <h4>{stage}</h4>
            <div className="kanban-card">John Doe</div>
            <div className="kanban-card">Priya Sharma</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pipeline;
