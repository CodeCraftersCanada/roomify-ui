import React from 'react';
import './Home.scss';
import SimpleMap from './map'; 

const Home = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-item">Dashboard</div>
        <div className="sidebar-item">Properties</div>
        <div className="sidebar-item">Settings</div>
      </aside>
      <div className="dashboard-main">
        <header className="dashboard-header">
          <h1>Hello, Alicia Amanda</h1>
          <p>Today, {formattedDate}</p>
          <input type="text" placeholder="Search..." className="search-bar" />
        </header>
        <div className="dashboard-content">
          <section className="map-section">
            <h2>Map View</h2>
            <SimpleMap />
          </section>
          <section className="profile-section">
            <h2>Profile Card</h2>
            {/* User profile card goes here */}
          </section>
          <section className="property-highlights">
            <div className="property-card">Best Property</div>
            <div className="daily-progress">Daily Progress</div>
          </section>
          <section className="activity-section">
            <h2>Recent Activities</h2>
            {/* Calendar and recent activities go here */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
