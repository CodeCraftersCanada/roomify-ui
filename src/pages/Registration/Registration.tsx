import React from "react";
import "./Registration.scss";

const Registration = () => {
  return (
    <div className="registration-container">
      <h2>College Registration</h2>
      <form>
        <div className="form-group">
          <label htmlFor="collegeName">College Name</label>
          <input type="text" id="collegeName" name="collegeName" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </div>

        <div className="form-group">
          <label htmlFor="geolocation">Geolocation</label>
          <input type="text" id="geolocation" name="geolocation" />
        </div>

        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea id="about" name="about"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="logo">College Logo</label>
          <input type="file" id="logo" name="logo" accept="image/*" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
