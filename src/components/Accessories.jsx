// 2. ACCESSORIES - Updated to match Menswear style
import { Link } from "react-router-dom";
import { useCart } from "./ShopContext";
import data from "../data";

const Accessories = () => {
  const { addToCart } = useCart();

  const products = data.products.filter(
    item => item.category === "Accessories"
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleWishlist = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    // Add wishlist logic here
    console.log("Add to wishlist:", product.name);
  };

  const handleQuickView = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    // Add quick view logic here
    console.log("Quick view:", product.name);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Accessories Collection
        </h1>
        <p className="text-gray-500 mt-2">
          Complete your look with our premium accessories
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Link wrapping the image and product info */}
            <Link to={`/product/${product.id}`} className="block">
              {/* Image Container */}
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
                  <button 
                    onClick={(e) => handleWishlist(e, product)}
                    className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"
                  >
                    ❤️
                  </button>
                  <button 
                    onClick={(e) => handleQuickView(e, product)}
                    className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"
                  >
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
              </div>
            </Link>

            {/* Add to Cart Button - Hidden until hover */}
            <div className="px-5 pb-5">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-black text-white py-3 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;