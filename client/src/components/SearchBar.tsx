import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        navigate(`?q=${encodeURIComponent(searchTerm)}`);
      } else {
        navigate("");
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTerm, navigate]);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setSearchTerm(q);
  }, [searchParams]);

  return (
    <div className="w-screen md:max-w-lg mx-auto p-3">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          id="default-search"
          className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-primary focus:border-primary"
          placeholder="What are you looking for?"
          required
          value={searchTerm}
          onChange={(e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
          }}
        />
        {/* <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button> */}
      </div>
    </div>
  );
}
