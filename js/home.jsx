import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>sync’d</h1>
      <p>…with your beauty</p>

      <div className="flex gap-6">
        <Link to="/collection/premium" className="btn">
          Premium Collection
        </Link>
        <Link to="/collection/pearl" className="btn-outline">
          Pearl Collection
        </Link>
      </div>
    </div>
  );
}
