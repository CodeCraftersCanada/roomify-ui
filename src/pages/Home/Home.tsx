// Home.tsx
import React, { useState, useEffect } from 'react';
import './Home.scss';
import SimpleMap from './map';
import { getProperties } from '../../services/propertyService'; // This should be an API call to fetch multiple properties

// Define a type for the properties you expect to receive from the API
type Property = {
  _id: string;
  title: string;
  price: {
    $numberDecimal: string;
  };
  imageUrl: string; // Add additional fields as per your data structure
  // ... other property fields
};

const Home = () => {
  const [bestProperties, setBestProperties] = useState<Property[]>([]); // Use the Property type for state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Replace getProperties with the actual function that fetches the properties
    getProperties() // This function should fetch a list of properties
      .then(response => {
        // You need to check the actual structure of your response and adapt accordingly
        if (response.data && response.data.status) {
          setBestProperties(response.data.properties); // Assuming the API returns an array of properties
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Failed to fetch properties:', error);
        setIsLoading(false);
      });
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
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
            <h2>Best Properties</h2>
            <div className="properties-list">
              {bestProperties.map((property) => (
                <div key={property._id} className="property-card">
                  <h3>{property.title}</h3>
                  <p>Price: ${property.price.$numberDecimal}</p>
                  <img src={property.imageUrl} alt={property.title} />
                  {/* Additional property details can be added here */}
                </div>
              ))}
            </div>
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
