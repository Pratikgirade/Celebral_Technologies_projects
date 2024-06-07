import React from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const {
    firstName,
    lastName,
    username,
    email,
    phoneNo,
    country,
    city,
    panNo,
    aadharNo,
  } = location.state;

  return (
    <div className="success-container">
      <h2>Form Submission Successful</h2>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone No.:</strong> {phoneNo}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>PAN No.:</strong> {panNo}</p>
      <p><strong>Aadhar No.:</strong> {aadharNo}</p>
    </div>
  );
}

export default Success;
