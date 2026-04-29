import { useParams, useNavigate } from "react-router-dom";
import useFetch from "/useFetch";
import Loader from "/Loader";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useFetch("/data/products.json");

  if (loading) return <Loader />;

  const product = data.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}