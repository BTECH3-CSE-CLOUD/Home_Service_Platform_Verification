// src/pages/Booking/Booking.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BookingForm from '../../components/BookingForm/BookingForm';
import './Booking.css';

const Booking = () => {
  const service = { id: 1, name: 'Plumbing', description: 'Fix your plumbing issues.', image: 'plumbing.jpg' };

  return (
    <div className="booking">
      <Header />
      <main>
        <h1>Book a Service</h1>
        <BookingForm service={service} />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;