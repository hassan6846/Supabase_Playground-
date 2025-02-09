import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Social Auth Buttons */}
        <div className="social-auth">
          <button className="google-btn">Sign in with Google</button>
          <button className="github-btn">Sign in with GitHub</button>
        </div>

        {/* Separator */}
        <div className="separator">
          <span>OR</span>
        </div>

        {/* Email & Password Login */}
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit-btn">Login</button>
        </form>

        {/* Register Link */}
        <p className="register-link">
          Don't have an account? <a href="/signup">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
