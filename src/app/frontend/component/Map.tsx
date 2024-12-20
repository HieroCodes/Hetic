"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Post = {
  latitude: number;
  longitude: number;
  name: string;
  location: string;
};

type MapProps = {
  posts: Post[];
};

const Map = ({ posts }: MapProps) => {
  return (
    <MapContainer
      key={posts.length} // Force un nouveau rendu si les données changent
      center={[40.7128, -74.006]}
      zoom={12}
      style={{ width: "100%", height: "100%", zIndex: 1 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {posts.map((post, index) =>
        post.latitude && post.longitude ? (
          <Marker
            key={index}
            position={[post.latitude, post.longitude]}
            icon={new L.Icon({
              iconUrl:
                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl:
                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
            })}
          >
            <Popup>
              <strong>{post.name}</strong>
              <p>{post.location}</p>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};


export default Map;
