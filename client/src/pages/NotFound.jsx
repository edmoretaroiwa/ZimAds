import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page center">
      <h1 className="logo">404</h1>
      <p className="tagline">This page doesn't exist.</p>
      <Link to="/" className="btn primary">← Back to Home</Link>
    </div>
  );
}
