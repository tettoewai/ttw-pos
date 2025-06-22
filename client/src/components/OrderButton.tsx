import toast from "react-hot-toast";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

export function OrderButton() {
  const { clearCart } = useCart();
  const navigator = useNavigate();

  return (
    <div className="fixed bottom-1 w-full">
      <button
        onClick={() => {
          clearCart();
          toast.success("Fake Order finished successfully!");
          navigator(-1);
        }}
        type="button"
        className="text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full"
      >
        Order
      </button>
    </div>
  );
}
