import { useEffect, useState } from "react";
import { Company } from "../../../server/src/shared-types";
import { config } from "../config";

export function TopBar() {
  const [company, setCompany] = useState<Company>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const company = await (
          await fetch(`${config.apiBaseUrl}/api/company`)
        ).json();
        setCompany(company);
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
    <div className="w-full px-4 py-2 h-14 flex items-center bg-background justify-between">
      <h1 className="font-bold text-primary text-2xl font-iceberg">
        {company?.name}
      </h1>
      <span className="material-symbols-outlined text-3xl">shopping_cart</span>
    </div>
  );
}
