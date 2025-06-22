import { useEffect, useState } from "react";
import { config } from "../config";
import { ProductCateogry } from "../../../server/src/shared-types";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Category() {
  const [categories, setCategories] = useState<ProductCateogry[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const categoryId = Number(searchParams.get("category")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const categories = await (
          await fetch(`${config.apiBaseUrl}/api/productCategory`)
        ).json();
        setCategories(categories);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) return <div>Company loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex space-x-3 overflow-x-scroll mt-2 scrollbar-hide p-2">
      {categories?.map((item) => {
        const isActive = item.id === categoryId;
        return (
          <div
            onClick={() => navigate(`/?category=${item.id}`)}
            className={`px-2.5 cursor-pointer select-none py-1 rounded-full font-semibold transition-colors border-2 ${
              isActive ? "bg-primary text-white" : "border-primary"
            }`}
            key={item.id}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
