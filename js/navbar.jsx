import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6">
      <Link to="/" className="text-2xl text-primary">sync’d</Link>
      <div className="flex gap-6">
        <Link to="/profile">Account</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
