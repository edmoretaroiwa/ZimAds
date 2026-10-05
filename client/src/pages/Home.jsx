import { useEffect, useState } from "react";

export default function Home() {
  const [apiStatus, setApiStatus] = useState("checking...");

  useEffect(() => {
    const API = import.meta.env.VITE_BACKEND_URL || "";
    fetch(`${API}/api/v1/health`)
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status === "ok" ? "online ✅" : "error"))
      .catch(() => setApiStatus("offline ❌"));
  }, []);

  return (
    <div className="page">
      <header className="hero">
        <h1 className="logo">ZimAds</h1>
        <p className="tagline">Zimbabwe's Visual Business & Advertising Marketplace</p>

        <div className="nav-buttons">
          <button className="btn primary">Explore 3D</button>
          <button className="btn secondary">Browse Businesses</button>
          <button className="btn outline">Search</button>
        </div>

        <div className="status">
          <span className="dot" />
          API Status: {apiStatus}
        </div>
      </header>

      <section className="features">
        <div className="card">
          <h3>🏢 Business Profiles</h3>
          <p>Post your business with contact, location, and media.</p>
        </div>
        <div className="card">
          <h3>🎬 Video & Image Ads</h3>
          <p>Reach customers with rich media advertising.</p>
        </div>
        <div className="card">
          <h3>🌍 3D Showroom</h3>
          <p>Coming soon — walk through Zimbabwe's ad districts.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ZimAds — Phase 1 Skeleton</p>
      </footer>
    </div>
  );
            }
