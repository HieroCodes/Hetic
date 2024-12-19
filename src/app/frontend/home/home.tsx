// pages/index.js
import Navbar from '../component/Navbar'; // Import du composant Navbar

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to NYC Wi-Fi Hotspot Locations</h1>
      <p>Explore the available Wi-Fi locations in New York City.</p>
      <Navbar />
    </div>
  );
}
