import React from 'react';
import { Home, User, Settings, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import './dashboard.css';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">L</div>
        <div className="brand-name">Layao</div>
      </div>
      <div className="profile-section">
        <div className="profile-img">
          <img src="https://via.placeholder.com/50" alt="Jane" />
        </div>
        <div className="profile-info">
          <h4>Jane Doe</h4>
          <p>Product Manager</p>
        </div>
      </div>
      <div className="nav-icons">
        <NavLink to="/dashboard" className={({ isActive }) => "nav-item" + (isActive ? " active" : "") }>
          <Home />
          <span className="nav-label">Dashboard</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => "nav-item" + (isActive ? " active" : "") }>
          <User />
          <span className="nav-label">Profile</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => "nav-item" + (isActive ? " active" : "") }>
          <Settings />
          <span className="nav-label">Settings</span>
        </NavLink>
      </div>
        <div className="sidebar-footer">
          <div className="nav-item special" onClick={() => {
            if (typeof window.onLogout === 'function') window.onLogout();
            navigate('/');
          }} style={{ cursor: 'pointer' }}>
            <LogOut />
            <span className="nav-label">Logout</span>
          </div>
        </div>
    </nav>
  );
};

export default Sidebar;
