import React, { useState } from "react";
import Header from "../../components/Header";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    registrationNo: "",
    batch: "",
    course: "",
    admissionDate: "",
    applicantName: "",
    fatherName: "",
    address: "",
    pinCode: "",
    email: "",
    phone: "",
    reference: "",
    hasKnowledge: "",
    exposureDetails: "",
    qualifications: [{ exam: "", year: "", board: "", marks: "" }],
    programName: "",
    duration: "",
    fees: { total: "", deposit: "", monthly: "", final: "" },
    studentName: "",
    studentSignature: "",
    studentDate: "",
    representative: "",
    representativeSignature: "",
    repDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQualificationChange = (index, field, value) => {
    const newQualifications = [...formData.qualifications];
    newQualifications[index][field] = value;
    setFormData({ ...formData, qualifications: newQualifications });
  };

  const addQualificationRow = () => {
    setFormData({
      ...formData,
      qualifications: [...formData.qualifications, { exam: "", year: "", board: "", marks: "" }],
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("✅ Application submitted successfully!");
//     console.log(formData);
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("🚀 Submitting form data:", formData); // debug

  try {
    const res = await fetch("http://localhost:5000/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("📡 Response Status:", res.status); // debug
    const data = await res.json();
    console.log("📡 Response Data:", data); // debug

    if (res.ok) {
      alert("✅ Application submitted successfully!");
    } else {
      alert("❌ Error: " + data.error);
    }
  } catch (err) {
    console.error("❌ Network or server error:", err);
    alert("⚠️ Could not submit application. Check server.");
  }
};




  return (
    <div className="page">
      <Header title="📝 Application Form" />

      {/* Internal CSS */}
      <style>{`
        .form {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h3 {
          margin-top: 20px;
          color: #2c3e50;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        .form-group label {
          font-weight: 600;
          margin-bottom: 5px;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
        }
        .form-row {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }
        .form-row div {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .table th, .table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: center;
        }
        .table input {
          width: 100%;
          padding: 6px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .primary-btn {
          background: #6c5ce7;
          color: white;
          border: none;
          padding: 12px 18px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 15px;
          font-size: 16px;
          font-weight: bold;
        }
        .primary-btn:hover {
          background: #5a4bd1;
        }
      `}</style>

      <form className="form" onSubmit={handleSubmit}>
        <h3>FOR OFFICE USE ONLY</h3>
        <div className="form-group">
          <label>Registration No:</label>
          <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
        </div>
        <div className="form-row">
          <div>
            <label>Batch:</label>
            <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
          </div>
          <div>
            <label>Course:</label>
            <input type="text" name="course" value={formData.course} onChange={handleChange} />
          </div>
          <div>
            <label>Date of Admission:</label>
            <input type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} />
          </div>
        </div>

        <h3>Applicant Details</h3>
        <div className="form-group">
          <label>Name of the Applicant:</label>
          <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Father’s Name:</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <div className="form-row">
          <div>
            <label>Pin Code:</label>
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
          </div>
          <div>
            <label>Email Address:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Phone No:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Reference:</label>
          <input type="text" name="reference" value={formData.reference} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Do you have any previous computer knowledge?</label>
          <select name="hasKnowledge" value={formData.hasKnowledge} onChange={handleChange}>
            <option value="">Select</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>
        {formData.hasKnowledge === "YES" && (
          <div className="form-group">
            <label>If yes, furnish details:</label>
            <textarea name="exposureDetails" value={formData.exposureDetails} onChange={handleChange}></textarea>
          </div>
        )}

        <h3>Educational Qualification</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Exam Passed</th>
              <th>Year</th>
              <th>Board/University</th>
              <th>% of Marks</th>
            </tr>
          </thead>
          <tbody>
            {formData.qualifications.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><input type="text" value={row.exam} onChange={(e) => handleQualificationChange(index, "exam", e.target.value)} /></td>
                <td><input type="text" value={row.year} onChange={(e) => handleQualificationChange(index, "year", e.target.value)} /></td>
                <td><input type="text" value={row.board} onChange={(e) => handleQualificationChange(index, "board", e.target.value)} /></td>
                <td><input type="text" value={row.marks} onChange={(e) => handleQualificationChange(index, "marks", e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addQualificationRow}>➕ Add Row</button>

        <h3>Training Agreement</h3>
        <div className="form-group">
          <label>Program Name:</label>
          <input type="text" name="programName" value={formData.programName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </div>
        <div className="form-row">
          <div>
            <label>Total Fees:</label>
            <input type="text" value={formData.fees.total} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, total: e.target.value } })} />
          </div>
          <div>
            <label>Initial Deposit:</label>
            <input type="text" value={formData.fees.deposit} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, deposit: e.target.value } })} />
          </div>
          <div>
            <label>Monthly Payments:</label>
            <input type="text" value={formData.fees.monthly} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, monthly: e.target.value } })} />
          </div>
          <div>
            <label>Final Payment:</label>
            <input type="text" value={formData.fees.final} onChange={(e) => setFormData({ ...formData, fees: { ...formData.fees, final: e.target.value } })} />
          </div>
        </div>

        <h3>Signatures</h3>
        <div className="form-row">
          <div>
            <label>Student Name:</label>
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
          </div>
          <div>
            <label>Student Signature:</label>
            <input type="text" name="studentSignature" value={formData.studentSignature} onChange={handleChange} />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="studentDate" value={formData.studentDate} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Training Center Representative:</label>
            <input type="text" name="representative" value={formData.representative} onChange={handleChange} />
          </div>
          <div>
            <label>Representative Signature:</label>
            <input type="text" name="representativeSignature" value={formData.representativeSignature} onChange={handleChange} />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="repDate" value={formData.repDate} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="primary-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
