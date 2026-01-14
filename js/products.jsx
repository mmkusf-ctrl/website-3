import products from "../data/products.json";
import { useParams } from "react-router-dom";

export default function Products() {
  const { collection, category } = useParams();

  const filtered = products.filter(
    p => p.collection === collection && p.category === category
  );

  return (
    <div className="grid">
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
