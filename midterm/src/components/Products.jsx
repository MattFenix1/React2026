import useFetch from "/useFetch";
import ProductCard from "/ProductCard";
import Loader from "/Loader";

export default function Products() {
  const { data, loading } = useFetch("/data/products.json");

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}