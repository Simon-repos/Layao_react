import React from 'react';
import './dashboard.css';
import { Home, Calendar as CalIcon, Mail, MessageSquare, User, Settings, LogOut, Bell, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar - Optimized Navigation Only */}
      <nav className="sidebar">
        {/* Brand/Logo */}
        <div className="sidebar-brand">
          <div className="brand-logo">L</div>
          <div className="brand-name">Layao</div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-img">
            <img src="https://via.placeholder.com/50" alt="Jane" />
          </div>
          <div className="profile-info">
            <h4>Jane Doe</h4>
            <p>Product Manager</p>
          </div>
        </div>

        {/* Navigation Icons with Labels */}
        <div className="nav-icons">
          <div className="nav-item active">
            <Home />
            <span className="nav-label">Dashboard</span>
          </div>
          
          <div className="nav-item">
            <TrendingUp />
            <span className="nav-label">Analytics</span>
          </div>
          
          <div className="nav-item">
            <CalIcon />
            <span className="nav-label">Calendar</span>
          </div>
          
          <div className="mail-wrapper nav-item">
            <Mail />
            <span className="nav-label">Messages</span>
            <span className="nav-badge">3</span>
          </div>
          
          <div className="nav-item">
            <MessageSquare />
            <span className="nav-label">Chat</span>
            <span className="badge">+1</span>
          </div>
          
          <div className="nav-item">
            <User />
            <span className="nav-label">Profile</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-footer">
          <div className="nav-item">
            <Bell />
            <span className="nav-label">Notifications</span>
          </div>
          
          <div className="nav-item">
            <Settings />
            <span className="nav-label">Settings</span>
          </div>
          
          <div className="nav-item special">
            <LogOut />
            <span className="nav-label">Logout</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Unchanged */}
      <main className="main-content">
        <header className="header">
          <div className="welcome">
            <p>WELCOME!</p>
            <h1>Jane Doe</h1>
          </div>
          <button className="btn-new">New Project</button>
        </header>

        <div className="dashboard-grid">
          {/* Stats Card */}
          <section className="card stats-card">
            <h3 className="card-title">STATISTICS <span>Processes</span></h3>
            <div className="stats-row">
              <StatItem percent="25" label="Back End" status="Overdue" color="yellow" />
              <StatItem percent="50" label="Front End" status="Delayed" color="purple" />
              <StatItem percent="62" label="Design" status="On track" color="teal" />
              <StatItem percent="75" label="Copywriting" status="On track" color="green" />
            </div>
          </section>

          {/* Monthly Goal */}
          <section className="card goal-card">
            <div className="goal-header">
              <p>MONTHLY GOAL <br/><span>January</span></p>
              <select><option>Monthly</option></select>
            </div>
            <h2>$ 1.000.000</h2>
          </section>

          {/* Projection Card */}
          <section className="card projection-card">
            <div className="projection-header">
              <p>PROJECTION <br/><span>January 4th</span></p>
              <span className="price">$ 265.000</span>
            </div>
            <div className="mini-chart">
               <svg viewBox="0 0 100 20"><path d="M0 15 Q 25 5, 50 15 T 100 10" fill="none" stroke="#8b5cf6" strokeWidth="2"/></svg>
            </div>
          </section>

          {/* Chat Section */}
          <section className="card chat-card">
            <h3 className="card-title">CHAT</h3>
            <div className="user-list">
              <UserRow name="Peter Dawson" role="Developer" />
              <UserRow name="Gina Stewart" role="Designer" />
              <UserRow name="Janet Smith" role="Front end dev" />
            </div>
          </section>

          {/* Appointments & Calendar */}
          <section className="card calendar-section">
            <div className="appointments">
               <h3 className="card-title">UPCOMING APPOINTMENTS</h3>
               <AppointmentRow name="Peter Dawson" time="6/01 @ 15:00hs" />
               <AppointmentRow name="Gina Stewart" time="6/01 @ 15:00hs" />
            </div>
            <div className="mini-calendar">
              <p className="cal-month">JANUARY 2020</p>
              <div className="cal-grid">
                {['S','M','T','W','T','F','S'].map(d => <span key={d} className="day-name">{d}</span>)}
                {[...Array(31)].map((_, i) => <span key={i} className={`day ${i+1===15 ? 'active':''}`}>{i+1}</span>)}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// Internal sub-components (unchanged)
const StatItem = ({ percent, label, status, color }) => (
  <div className="stat-item">
    <div className={`circle ${color}`}>{percent}%</div>
    <p>{label}</p>
    <span className={`status-tag ${color}`}>{status}</span>
  </div>
);

const UserRow = ({ name, role }) => (
  <div className="user-row">
    <div className="avatar-small">{name[0]}</div>
    <div className="user-info">
      <p className="name">{name}</p>
      <p className="role">{role}</p>
    </div>
    <span className="status-dot">Active</span>
  </div>
);

const AppointmentRow = ({ name, time }) => (
  <div className="app-row">
    <div className="avatar-small">{name[0]}</div>
    <div className="app-info">
      <p>{name}</p>
      <span>{time}</span>
    </div>
    <button className="btn-cancel">Cancel</button>
  </div>
);

export default Dashboard;