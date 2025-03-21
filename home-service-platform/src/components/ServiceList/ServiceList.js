// src/components/ServiceList/ServiceList.js
import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceList.css';

const ServiceList = ({ services }) => {
  return (
    <div className="service-list">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;