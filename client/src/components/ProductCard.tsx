import { Product } from "../../../server/src/shared-types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm">
      <img
        className="p-8 rounded-t-lg object-contain rounded-md overflow-hidden"
        src={product.imageUrl || ""}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {product.name}
        </h5>
        <div>
          <p className="line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-3xl font-bold text-gray-900">
            {product.price} Ks
          </span>
          <button className="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
