-- Table pour les tests
CREATE TABLE IF NOT EXISTS tests (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT
);

-- Table pour stocker les données Wi-Fi
CREATE TABLE IF NOT EXISTS wifi_data (
  id SERIAL PRIMARY KEY,
  ssid TEXT,
  location TEXT,
  longitude FLOAT,
  latitude FLOAT
);

-- Ajouter un index sur la colonne "location" pour optimiser les recherches
CREATE INDEX idx_wifi_data_location ON wifi_data USING gin (location gin_trgm_ops);

-- Ajouter un index sur la colonne "ssid" pour optimiser les statistiques
CREATE INDEX idx_wifi_data_ssid ON wifi_data (ssid);

