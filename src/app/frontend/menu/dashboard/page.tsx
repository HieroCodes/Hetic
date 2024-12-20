"use client";

import { useEffect, useState } from "react";
import NavbarWrapper from "../../component/NavbarWrapper";
import dynamic from "next/dynamic";
import socket from "../../lib/ socket";
import Notification from "../../component/Notification";

const Map = dynamic(() => import("../../component/Map"), { ssr: false });

type Post = {
  latitude: number;
  longitude: number;
  name: string;
  location: string;
};

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const [locationFilter, setLocationFilter] = useState<string>("");

  const fetchPosts = async (location?: string) => {
    try {
      const url = location
        ? `/backend/db/api/wifi_city/filter?location=${location}`
        : `/backend/db/api/wifi_city`;
      const response = await fetch(url);
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

  useEffect(() => {
    fetchPosts();

    const handleNewPoint = (newPoint : Post) => {
      console.log("Nouveau point reçu :", newPoint);
      setPosts((prevPosts) => [...prevPosts, newPoint]);
    };
  
    socket.on("new-point", handleNewPoint);
  
    return () => {
      socket.off("new-point", handleNewPoint);
    };
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationFilter(e.target.value);
  };

  const handleFilterSubmit = () => {
    setLoading(true);
    fetchPosts(locationFilter);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* Navbar */}
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

      {/* Notification */}
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Filter Box */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "1em",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0", textAlign: "center" }}>Filtrer</h4>
        <input
          type="text"
          placeholder="Entrer un lieu"
          value={locationFilter}
          onChange={handleFilterChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={handleFilterSubmit}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Appliquer
        </button>
      </div>

      {/* Map */}
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Map posts={posts} />
      </div>
    </div>
  );
}
