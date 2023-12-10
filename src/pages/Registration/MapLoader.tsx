import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

interface MapLoaderProps {
  center: {
    lat: number;
    lng: number;
  };
  apiKey: string;
}

const MapLoader: React.FC<MapLoaderProps> = ({ center, apiKey }) => {
  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapLoader;
