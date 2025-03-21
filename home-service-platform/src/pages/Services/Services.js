// src/pages/Services/Services.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ServiceList from '../../components/ServiceList/ServiceList';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Plumbing',
      description: 'Fix your plumbing issues with our expert plumbers.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Cleaning',
      description: 'Professional cleaning services for your home or office.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Electrical',
      description: 'Safe and reliable electrical repairs and installations.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      name: 'Carpentry',
      description: 'Custom carpentry work for your home or business.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      name: 'Painting',
      description: 'Interior and exterior painting services.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 6,
      name: 'Pest Control',
      description: 'Effective pest control solutions for your property.',
      image: 'https://via.placeholder.com/300x200',
    },
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