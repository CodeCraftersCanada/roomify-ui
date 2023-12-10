import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 43.65107,
  lng: -79.347015,
};

const SimpleMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDH5sDdVj2gQMcPRe2LmndeCOK89VlZDX4">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Additional map features like markers can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(SimpleMap);
