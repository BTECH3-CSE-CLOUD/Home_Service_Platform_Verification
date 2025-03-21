// src/components/ServiceCard/ServiceCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking', { state: { service } });
  };

  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default ServiceCard;