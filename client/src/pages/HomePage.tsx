import { useSearchParams } from "react-router-dom";
import { Category } from "../components/Category";
import { Products } from "../components/Product";
import { SearchBar } from "../components/SearchBar";
import { TopBar } from "../components/TopBar";

function App() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  return (
    <div className="pb-20">
      <TopBar />
      <div className="mt-16 md:mt-20">
        <div className="flex md:hidden">
          <SearchBar />
        </div>
        {searchTerm ? (
          <p className="ml-4">
            Serch result for <span className="font-bold">"{searchTerm}"</span>
          </p>
        ) : null}
        {!searchTerm ? <Category /> : null}
        <div className="mt-4">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
