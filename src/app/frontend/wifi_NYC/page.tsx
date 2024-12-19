"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import NavbarWrapper from "../component/NavbarWrapper";

type Post = {
  latitude: number;
  longitude: number;
  name: string;
  location: string;
};

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("../../backend/db/api/wifi_city");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Post[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Une erreur inconnue s'est produite.");
        }
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <NavbarWrapper
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />

      <MapContainer
        center={[40.7128, -74.006]}
        zoom={12}
        style={{
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
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
    </div>
  );
}
