import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import toast from "react-hot-toast";
import { CartItemCard } from "../components/CartItemCard";
import { OrderButton } from "../components/OrderButton";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  return (
    <div className="relative pb-28">
      <div className="fixed top-0 bg-background w-full h-16 flex items-center p-4 justify-between">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="border-2 rounded-md p-2 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-primary">
            arrow_back_ios_new
          </span>
        </button>
        <h1 className="font-bold text-primary text-2xl font-iceberg">Cart</h1>
        <button
          onClick={() => {
            clearCart();
            toast.success("Cart is cleared.");
          }}
          type="button"
          className="border-2 rounded-md p-2 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-primary">delete</span>
        </button>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.length ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <CartItemCard cartItem={item} />
            </div>
          ))
        ) : (
          <span className="m-3">There is no product in cart.</span>
        )}
      </div>
      {cartItems.length ? <OrderButton /> : null}
    </div>
  );
}
