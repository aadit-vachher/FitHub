import React from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  return (
    <div className="login-background">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-btn" onClick={onLogin}>Login</button>
        <button className="signup-btn">Create an Account</button>
      </div>
    </div>
  );
};

export default Login;
