// src/App.tsx
import { useEffect, useState } from "react";
import { config } from "./config";

type Product = {
  id: number;
  name: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">POS Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
