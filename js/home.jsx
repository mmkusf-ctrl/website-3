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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-[80vh] flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-6xl text-primary">sync’d</h1>
      <p className="mb-10">…with your beauty</p>

      <div className="flex gap-6">
        <Link to="/collection/premium" className="btn">Premium Collection</Link>
        <Link to="/collection/pearl" className="btn-outline">Pearl Collection</Link>
      </div>
    </motion.div>
  );
}
