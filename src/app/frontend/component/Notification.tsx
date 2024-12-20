"use client";

import { useState, useEffect } from "react";

type NotificationProps = {
  message: string;
  onClose: () => void;
};


export default function Notification({ message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 15000); // Ferme la notification après 5 secondes
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1100,
        backgroundColor: "#0d6efd",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: "10px",
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
    </div>
  );
}
