import React, { createContext, useContext, useState, useEffect } from "react";

/* =========================
   CREATE CONTEXT
========================= */
const ShopContext = createContext();

/* =========================
   CUSTOM HOOK
========================= */
export const useCart = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

/* =========================
   PROVIDER
========================= */
export const CartProvider = ({ children }) => {
  /* ---------- STATES ---------- */
  const [cartItems, setCartItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("avenue_cart")) || []; }
    catch { return []; }
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("avenue_wishlist")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("avenue_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("avenue_wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  /* ---------- CART ACTIONS ---------- */
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  /* ---------- WISHLIST ---------- */
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (id) =>
    wishlistItems.some((item) => item.id === id);

  const moveAllToCart = () => {
    wishlistItems.forEach((item) => addToCart(item));
    setWishlistItems([]);
  };

  /* ---------- COUNTS ---------- */
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

  /* ---------- CALCULATIONS ---------- */
  const getCartSubtotal = () =>
    cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  const getDiscountAmount = () => {
    const subtotal = getCartSubtotal();
    return subtotal > 200 ? subtotal * 0.1 : 0;
  };

  const getShippingCost = () => {
    const subtotal = getCartSubtotal();
    return subtotal > 150 ? 0 : 10;
  };

  const getTaxAmount = () => getCartSubtotal() * 0.05;

  const getOrderTotal = () =>
    getCartSubtotal() +
    getShippingCost() +
    getTaxAmount() -
    getDiscountAmount();

  const getCartTotal = () => getOrderTotal();

  const getCartSummary = () => ({
    subtotal: getCartSubtotal(),
    discount: getDiscountAmount(),
    shipping: getShippingCost(),
    tax: getTaxAmount(),
    total: getOrderTotal(),
  });

  /* ---------- HELPERS ---------- */
  const formatCurrency = (amount, khmer = false) => {
    if (khmer) {
      return `${amount.toLocaleString()} ៛`;
    }
    return `$${amount.toFixed(2)}`;
  };

  /* ---------- RECOMMENDATIONS (DUMMY) ---------- */
  const getCartRecommendations = () => [];
  const getWishlistRecommendations = () => [];

  /* ---------- CONTEXT VALUE ---------- */
  const value = {
    cartItems,
    wishlistItems,
    cartCount,
    wishlistCount,

    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    toggleWishlist,
    isInWishlist,
    moveAllToCart,

    getCartSubtotal,
    getDiscountAmount,
    getShippingCost,
    getTaxAmount,
    getOrderTotal,
    getCartTotal,
    getCartSummary,

    formatCurrency,

    getCartRecommendations,
    getWishlistRecommendations,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

/* =========================
   DEFAULT EXPORT (OPTIONAL)
========================= */
export default ShopContext;
