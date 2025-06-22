import { useState, useEffect } from "react";
import { Product } from "../../../server/src/shared-types";
import { config } from "../config";
import { ProductCard } from "./ProductCard";
import { useSearchParams } from "react-router-dom";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();

  const categoryId = Number(searchParams.get("category")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const products = await (
          await fetch(`${config.apiBaseUrl}/api/products/${categoryId}`)
        ).json();

        setProducts(products);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {products.map((item) => (
        <div key={item.id}>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}
