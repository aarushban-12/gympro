import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    conditions: "",
    weight: "",
    height: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Register for GymPro</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" name="age" onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" name="phone" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Allergies / Diseases</label>
          <input type="text" className="form-control" name="conditions" onChange={handleChange} placeholder="e.g. Asthma, Gluten Intolerance" />
        </div>
        <div className="col-md-3">
          <label className="form-label">Weight (kg)</label>
          <input type="number" className="form-control" name="weight" onChange={handleChange} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Height (cm)</label>
          <input type="number" className="form-control" name="height" onChange={handleChange} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit Registration</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
