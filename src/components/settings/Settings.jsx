import React, { useState } from 'react';
import './Settings.css';
import Sidebar from '../dashboard/Sidebar';

const settingsList = [
  {
    key: 'darkMode',
    label: 'Dark Mode',
    description: 'Adjust the interface to reduce eye strain.',
  },
  {
    key: 'notifications',
    label: 'Notifications',
    description: 'Receive updates about your projects.',
  },
  {
    key: 'autoSave',
    label: 'Auto Save',
    description: 'Automatically save changes to your profile.',
  },
];

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    autoSave: true,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <header className="page-header">
          <p>ACCOUNT SETTINGS</p>
          <h1>Jane Doe</h1>
        </header>
        <div className="settings-card">
          {settingsList.map(({ key, label, description }) => (
            <div className="setting-group" key={key}>
              <div className="setting-row">
                <span className="setting-label">{label}</span>
                <label className="toggle-switch">
                  <input type="checkbox" checked={settings[key]} onChange={() => handleToggle(key)} />
                  <span className="slider"></span>
                </label>
              </div>
              <small className="setting-desc">{description}</small>
            </div>
          ))}
          <button className="save-btn" type="button">Save Changes</button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
