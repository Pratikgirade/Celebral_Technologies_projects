import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 // Ensure you import your CSS if you have any

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false); // Add form validation state
  const navigate = useNavigate();

  const validate = (data) => {
    let tempErrors = {};
    if (!data.firstName) tempErrors.firstName = "First Name is required";
    if (!data.lastName) tempErrors.lastName = "Last Name is required";
    if (!data.username) tempErrors.username = "Username is required";
    if (!data.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(data.email)) tempErrors.email = "Email is invalid";
    if (!data.password) tempErrors.password = "Password is required";
    if (!data.phoneNo) tempErrors.phoneNo = "Phone No. is required";
    if (!data.country) tempErrors.country = "Country is required";
    if (!data.city) tempErrors.city = "City is required";
    if (!data.panNo) tempErrors.panNo = "Pan No. is required";
    if (!data.aadharNo) tempErrors.aadharNo = "Aadhar No. is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate form on each change
    const isValid = validate({
      ...formData,
      [name]: value,
    });
    setFormValid(isValid);
  };

  const handleTogglePassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type={formData.showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={handleTogglePassword}>
            {formData.showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Phone No.:</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
          {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label>PAN No.:</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          {errors.panNo && <span className="error">{errors.panNo}</span>}
        </div>
        <div className="form-group">
          <label>Aadhar No.:</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
