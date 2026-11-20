import { useNavigate } from "react-router-dom";
import { useCart } from "../components/ShopContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartCount,
    wishlistCount,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartSubtotal,
    getDiscountAmount,
    getShippingCost,
    getTaxAmount,
    getOrderTotal,
    formatCurrency,
    toggleWishlist,
    isInWishlist,
    moveAllToCart,
  } = useCart();

  const handleQuantityChange = (itemId, change) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      updateQuantity(itemId, newQuantity);
    }
  };

  const subtotal = getCartSubtotal();
  const discount = getDiscountAmount();
  const shipping = getShippingCost();
  const tax = getTaxAmount();
  const total = getOrderTotal();

  const displayCurrency = (amount, showKhmer = false) =>
    formatCurrency(amount, showKhmer, false);

  const handleMoveAllToCart = () => {
    moveAllToCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="relative mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0d2d4a]">
                Shopping Cart
              </h1>
              <div className="flex items-center gap-4 text-gray-600 mt-2">
                <p>
                  <span className="font-semibold text-[#0d2d4a]">
                    {cartCount}
                  </span>{" "}
                  items in cart
                </p>
                <span>•</span>
                <p>
                  <span className="font-semibold text-red-600">
                    {wishlistCount}
                  </span>{" "}
                  in wishlist
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
                >
                  Clear Cart
                </button>
              )}

              <button
                onClick={() => navigate("/wishlist")}
                className="px-4 py-2 border border-[#0d2d4a] rounded-lg hover:bg-[#0d2d4a] hover:text-white"
              >
                View Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-xl p-10 text-center shadow">
                <h3 className="text-xl font-bold mb-4">
                  Your cart is empty
                </h3>
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 bg-[#0d2d4a] text-white rounded-lg"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 rounded-xl shadow flex gap-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.name}</h3>

                      <div className="flex items-center gap-4 mt-3">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, -1)
                          }
                          disabled={item.quantity <= 1}
                          className="px-3 py-1 border rounded"
                        >
                          −
                        </button>
                        <span className="font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, 1)
                          }
                          className="px-3 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-lg font-bold">
                        {displayCurrency(
                          item.price * item.quantity
                        )}
                      </div>

                      <button
                        onClick={() => toggleWishlist(item)}
                        className={
                          isInWishlist(item.id)
                            ? "text-red-600"
                            : "text-gray-500"
                        }
                      >
                        ♥
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{displayCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span>-{displayCurrency(discount)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{displayCurrency(shipping)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>{displayCurrency(tax)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{displayCurrency(total)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 py-3 bg-[#0d2d4a] text-white rounded-lg"
            >
              Proceed to Checkout
            </button>

            {wishlistCount > 0 && (
              <button
                onClick={handleMoveAllToCart}
                className="w-full mt-3 py-2 border border-yellow-400 text-yellow-600 rounded-lg"
              >
                Move all from Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
