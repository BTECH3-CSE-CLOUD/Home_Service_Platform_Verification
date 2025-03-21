// src/pages/Login/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // Simulate login logic (replace with API call in real app)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <AuthForm type="login" onSubmit={handleLogin} />
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;