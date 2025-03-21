// src/pages/Services/Services.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ServiceList from '../../components/ServiceList/ServiceList';
import './Services.css';

const Services = () => {
  const services = [
    { id: 1, name: 'Plumbing', description: 'Fix your plumbing issues.', image: 'plumbing.jpg' },
    { id: 2, name: 'Cleaning', description: 'Professional cleaning services.', image: 'cleaning.jpg' },
    // Add more services
  ];

  return (
    <div className="services">
      <Header />
      <main>
        <h1>Our Services</h1>
        <ServiceList services={services} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;