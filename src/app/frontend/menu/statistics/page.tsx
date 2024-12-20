"use client";

import { useEffect, useState } from "react";
import NavbarWrapper from "../../component/NavbarWrapper";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

type StatsData = {
  total: number;
  byProvider: { ssid: string; count: number }[];
};

export default function StatisticsPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/backend/db/api/wifi_city/stats");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des statistiques");
        }
        const data: StatsData = await response.json();
        setStats(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Erreur inconnue");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Chargement des statistiques...</div>;
  if (error) return <div>Erreur : {error}</div>;

  const barChartData = {
    labels: stats?.byProvider.map((provider) => provider.ssid),
    datasets: [
      {
        label: "Nombre de points Wi-Fi",
        data: stats?.byProvider.map((provider) => provider.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: stats?.byProvider.map((provider) => provider.ssid),
    datasets: [
      {
        data: stats?.byProvider.map((provider) => provider.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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

      {/* Page Content */}
      <div style={{ paddingTop: "60px", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Statistiques des Wi-Fi à NYC
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div style={{ padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <h3 style={{ textAlign: "center", color:"#000000" }}>Hotspots par fournisseur</h3>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <Bar data={barChartData} />
            <br></br> <br></br> <br></br> <br></br>
            <p style={{ fontSize: "2em", textAlign: "center", color:"#000000", textTransform:"capitalize" }}>Total Wi-Fi : <b>{stats?.total}</b></p>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            <h3 style={{ textAlign: "center",color:"#000000" }}>Répartition par fournisseur</h3>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <Pie data={pieChartData} />
          </div>
        
        </div>
      </div>
    </div>
  );
}
