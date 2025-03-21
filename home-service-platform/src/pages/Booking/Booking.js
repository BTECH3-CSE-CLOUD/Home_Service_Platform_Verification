// src/pages/Booking/Booking.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || { service: { id: 0, name: 'Unknown Service' } };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: service.name,
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission (replace with API call in real app)
    alert(`Booking confirmed for ${formData.service} on ${formData.date} at ${formData.time}`);
    navigate('/');
  };

  return (
    <div className="booking">
      <Header />
      <main>
        <h1>Book {service.name}</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Service:
            <input
              type="text"
              name="service"
              value={formData.service}
              readOnly
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Additional Notes:
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </label>
          <button type="submit">Confirm Booking</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;