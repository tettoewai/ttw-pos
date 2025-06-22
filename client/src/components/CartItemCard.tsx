import { CartItem, useCart } from "../CartContext";

export function CartItemCard({ cartItem }: { cartItem: CartItem }) {
  const { updateQuantity } = useCart();
  return (
    <div className="h-36 flex items-center justify-between space-x-2 space-y-2 m-1 border rounded-md p-1 overflow-hidden">
      <img
        src={cartItem.imageUrl || ""}
        className="w-32 md:w-20 h-auto object-cover"
      />
      <div>
        <h1 className="text-lg font-bold">{cartItem.name}</h1>
        <p className="line-clamp-1">{cartItem.description}</p>
        <h1 className="text-xl font-extrabold">{cartItem.price} Ks</h1>
      </div>
      <div className="flex flex-col items-center justify-between">
        <button
          onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
          className="text-primary rounded-full size-9 flex items-center justify-center bg-gray-200"
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
        <span className="text-xl font-semibold">{cartItem.quantity}</span>
        <button
          onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
          className="text-primary rounded-full size-9 flex items-center justify-center bg-gray-200"
        >
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
      </div>
    </div>
  );
}
