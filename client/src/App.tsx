// src/App.tsx
import { Category } from "./components/Category";
import { Products } from "./components/Product";
import { SearchBar } from "./components/SearchBar";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="p-4">
      <TopBar />
      <SearchBar />
      <Category />
      <Products />
    </div>
  );
}

export default App;
