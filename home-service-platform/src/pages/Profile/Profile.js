// src/pages/Profile/Profile.js
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserProfile from '../../components/UserProfile/UserProfile';
import './Profile.css';

const Profile = () => {
  const user = { name: 'DONGMO OTIS, SIMO BORIS', email: 'SIMO@example.com', phone: '123-456-7890' };

  return (
    <div className="profile">
      <Header />
      <main>
        <h1>Your Profile</h1>
        <UserProfile user={user} />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;