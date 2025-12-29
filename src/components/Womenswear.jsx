// 3. WOMENSWEAR - Updated with Menswear features
import { Link } from "react-router-dom";
import data from "../data";

const Womenswear = () => {
  const products = data.products.filter(
    item => item.category === "Women's Wear"
  );

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Women's Collection
        </h1>
        <p className="text-gray-500 mt-2">
          Elegant styles designed for modern women
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />

              {/* Sale badge */}
              {product.originalPrice && (
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                  SALE
                </span>
              )}

              {/* Wishlist / Quick view */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center">
                  ❤️
                </button>
                <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center">
                  👁
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="text-sm text-gray-500 mt-1">
                ⭐ {product.rating} ({product.reviews})
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <del className="text-sm text-gray-400">
                    {product.originalPrice}
                  </del>
                )}
              </div>

              {/* Add to cart - Hidden until hover */}
              <button className="mt-5 w-full bg-black text-white py-3 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Womenswear;