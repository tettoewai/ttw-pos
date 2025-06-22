import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

export function Cart() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/cart")}
      type="button"
      className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-red-300"
    >
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="sr-only">Cart</span>
      {totalItems > 0 ? (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
          {totalItems}
        </div>
      ) : null}
    </button>
  );
}
