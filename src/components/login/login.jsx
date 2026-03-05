import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // For demo purposes, just check if fields are not empty
    if (formData.email && formData.password) {
      // You can add more validation here
      onLogin(); // This will set isAuthenticated to true in App.jsx
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left Section: Login Form */}
      <div className="login-left">
        <div className="login-content">
          <div className="brand">
            <div className="brand-logo">L</div>
            <span className="brand-name">Layao</span>
          </div>

          <h1 className="title">Log in to your Account</h1>
          <p className="subtitle">Welcome back! Select method to log in:</p>

          <div className="social-buttons">
            <button className="social-btn" type="button">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
              Google
            </button>
          </div>

          <div className="divider">
            <span>or continue with email</span>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="icon">✉️</span>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="input-group">
              <span className="icon">🔒</span>
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
              <span className="password-toggle"></span>
            </div>

            <div className="form-footer">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                /> 
                Remember me
              </label>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="submit-btn">Log in</button>
          </form>

          <p className="signup-text">
            Don't have an account? <a href="#signup">Create an account</a>
          </p>
        </div>
      </div>

      {/* Right Section: Visual (Hidden on small screens) */}
      <div className="login-right">
        <div className="hero-content">
          <div className="visual-graphic">
             {/* Replace with your illustration from assets */}
             <div className="mock-ui">
                <div className="ui-circle google">G</div>
                <div className="ui-circle slack">S</div>
             </div>
          </div>
          <h2>Connect with every application.</h2>
          <p>Everything you need in an easily customizable dashboard.</p>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;