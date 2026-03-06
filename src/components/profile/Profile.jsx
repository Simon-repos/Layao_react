import React, { useState } from 'react';
import './Profile.css';
import Sidebar from '../dashboard/Sidebar';

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: 'Jane Doe',
    email: 'jane.doe@email.com',
    jobTitle: 'Product Manager',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <header className="page-header">
          <p>USER PROFILE</p>
          <h1>Jane Doe</h1>
        </header>
        <div className="profile-card">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/80" alt="Profile" />
          </div>
          <form className="profile-form">
            <div className="input-group">
              <label>Full Name</label>
              <input name="fullName" value={profile.fullName} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input name="email" value={profile.email} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Job Title</label>
              <input name="jobTitle" value={profile.jobTitle} onChange={handleChange} />
            </div>
            <button className="edit-btn" type="button">Edit Profile</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
