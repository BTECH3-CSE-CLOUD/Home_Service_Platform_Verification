// src/components/UserProfile/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default UserProfile;