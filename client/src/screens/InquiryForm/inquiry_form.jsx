import React, { useState } from "react";
import "./inquiry_form.css";
// import Sidebar from "../../components/Sidebar";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    inquiryDate: "",
    fullName: "",
    gender: "",
    dob: "",
    contactNumber: "",
    alternateNumber: "",
    email: "",
    address: "",
    education: "",
    occupation: "",
    courses: "",
    mode: "",
    knowledge: "",
    batchTiming: "",
    startDate: "",
    source: "",
    remarks: "",
    inquiryTakenBy: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          inquiryDate: "",
          fullName: "",
          gender: "",
          dob: "",
          contactNumber: "",
          alternateNumber: "",
          email: "",
          address: "",
          education: "",
          occupation: "",
          courses: "",
          mode: "",
          knowledge: "",
          batchTiming: "",
          startDate: "",
          source: "",
          remarks: "",
          inquiryTakenBy: "",
        });
      } else {
        alert("⚠️ Failed: " + data.error);
      }
    } catch (err) {
      console.error("Error submitting inquiry:", err);
    }
  };

  if (submitted) {
    return (
      <div className="success-container">
        <h2>✅ Thank You!</h2>
        <p>Your inquiry has been submitted successfully.</p>
        <button onClick={() => setSubmitted(false)}>Submit Another Inquiry</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>📋 IT Academy - Inquiry Form</h2>
      <form onSubmit={handleSubmit} className="inquiry-form">

        {/* ✅ REQUIRED FIELDS */}
        <div className="form-group">
          <label>Inquiry Date *</label>
          <input
            type="date"
            name="inquiryDate"
            value={formData.inquiryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number *</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email ID *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Interested Course(s) *</label>
          <input
            type="text"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
            required
          />
        </div>

        {/* ✅ Optional Fields (same as before) */}
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Alternate Number</label>
          <input
            type="tel"
            name="alternateNumber"
            value={formData.alternateNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Educational Qualification</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Current Occupation</label>
          <select name="occupation" value={formData.occupation} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Mode</label>
          <select name="mode" value={formData.mode} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="form-group">
          <label>Previous IT Knowledge</label>
          <select name="knowledge" value={formData.knowledge} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Batch Timing</label>
          <select name="batchTiming" value={formData.batchTiming} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        <div className="form-group">
          <label>Expected Start Date</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>How Did You Hear About Us?</label>
          <select name="source" value={formData.source} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Social Media">Social Media</option>
            <option value="Google">Google</option>
            <option value="Reference">Reference</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Remarks / Notes</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label>Inquiry Taken By</label>
          <input
            type="text"
            name="inquiryTakenBy"
            value={formData.inquiryTakenBy}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit">Submit Inquiry</button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
