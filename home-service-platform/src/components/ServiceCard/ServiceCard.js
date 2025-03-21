// src/components/ServiceCard/ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button>Book Now</button>
    </div>
  );
};

export default ServiceCard;