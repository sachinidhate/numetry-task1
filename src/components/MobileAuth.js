// MobileAuth.js
import React, { useState } from "react";
import './MobileAuth.css'; // Import the CSS file

const MobileAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = () => {
    // In a real application, you would call an API or Firebase to send OTP
    console.log("Sending OTP to", phone);
    setIsOtpSent(true);
    setMessage("OTP sent successfully!");
  };

  const verifyOtp = () => {
    // In a real application, you'd verify the OTP with your backend service
    if (otp === "123456") {
      setMessage("Phone number verified successfully!");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Mobile Number Authentication</h2>
        
        {!isOtpSent ? (
          <div>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={sendOtp}>Send OTP</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify OTP</button>
          </div>
        )}
        
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default MobileAuth;
