import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} width="100" />
        <h3>{product.title}</h3>
      </Link>
    </div>
  );
}