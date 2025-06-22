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

  const searchTerm = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apiUrl = searchTerm
          ? `${config.apiBaseUrl}/api/products/search/${searchTerm}`
          : `${config.apiBaseUrl}/api/products/category/${categoryId}`;

        const products = await (await fetch(apiUrl)).json();

        setProducts(products);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [categoryId, searchTerm]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!products.length) {
    if (searchTerm?.length) {
      return <div>There is no result.</div>;
    } else {
      return <div>There is no product</div>;
    }
  }
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
      {products.map((item) => (
        <div key={item.id} className="break-inside-avoid mb-4">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}
