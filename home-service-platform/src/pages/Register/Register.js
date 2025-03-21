// src/pages/Register/Register.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    // Simulate registration logic (replace with API call in real app)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.email === formData.email);

    if (userExists) {
      alert('User already exists!');
    } else {
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      navigate('/login');
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <AuthForm type="register" onSubmit={handleRegister} />
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;