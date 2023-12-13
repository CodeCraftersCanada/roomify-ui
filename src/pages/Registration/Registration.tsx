import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import "./Registration.scss"; 

interface RegistrationProps {}

const Registration: React.FC<RegistrationProps> = () => {
  const [collegeName, setCollegeName] = useState<string>("");
  const [collegeLogo, setCollegeLogo] = useState<File | null>(null);
  const [aboutCollege, setAboutCollege] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleLocationSelect = async (value: string) => {
    try {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setLocation(value);
      // You can still use latLng if needed for other purposes
    } catch (error) {
      console.error("Error selecting location:", error);
    }
  };

  const handleAddressChange = (value: string) => {
    setLocation(value);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCollegeLogo(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form submitted!");
    console.log("College Name:", collegeName);
    console.log("College Logo:", collegeLogo);
    console.log("About College:", aboutCollege);
    console.log("Location:", location);
  };

  return (
    <div className="registration-container">
      <h2>College Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            id="collegeName"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="collegeLogo">College Logo:</label>
          <input
            type="file"
            id="collegeLogo"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="aboutCollege">About College:</label>
          <textarea
            id="aboutCollege"
            value={aboutCollege}
            onChange={(e) => setAboutCollege(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <PlacesAutocomplete
            value={location}
            onChange={handleAddressChange}
            onSelect={handleLocationSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Type and select location",
                  })}
                />
                <div>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => (
                    <div {...getSuggestionItemProps(suggestion)}>
                      {suggestion.description}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <button type="submit">Register College</button>
      </form>
    </div>
  );
};

export default Registration;
