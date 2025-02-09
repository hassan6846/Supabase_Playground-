import React from "react";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Social Auth Buttons */}
        <div className="social-auth">
          <button className="google-btn">Continue with Google</button>
          <button className="github-btn">Continue with GitHub</button>
        </div>

        {/* Separator */}
        <div className="separator">
          <span>OR</span>
        </div>

        {/* Signup Form */}
        <form className="signup-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
