import { Category } from "../components/Category";
import { Products } from "../components/Product";
import { SearchBar } from "../components/SearchBar";
import { TopBar } from "../components/TopBar";

function App() {
  return (
    <div className="pb-20">
      <TopBar />
      <div className="mt-14">
        <SearchBar />
      </div>
      <Category />
      <Products />
    </div>
  );
}

export default App;
