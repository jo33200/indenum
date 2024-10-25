import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const ContactMap = () => {
  const position = [44.868027578053166, -0.6080236082763149]; // Coordonnées de votre adresse

  // Icône personnalisée pour le marqueur (optionnel)
  const customIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Map_marker_icon.png', // Remplacez par l'URL de votre icône
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={position} zoom={13} style={{ height: '300px', width: '100%' }} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <a
            href="https://www.google.com/maps?q=44.868027578053166,-0.6080236082763149" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Voir sur Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;