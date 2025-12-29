import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('khmer_style_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Wishlist state
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('khmer_style_wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
      return [];
    }
  });

  // Recently viewed products
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem('khmer_style_recently_viewed');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading recently viewed from localStorage:', error);
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('khmer_style_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('khmer_style_wishlist', JSON.stringify(wishlistItems));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  }, [wishlistItems]);

  // Save recently viewed
  useEffect(() => {
    try {
      localStorage.setItem('khmer_style_recently_viewed', JSON.stringify(recentlyViewed));
    } catch (error) {
      console.error('Error saving recently viewed to localStorage:', error);
    }
  }, [recentlyViewed]);

  // Cart statistics
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlistItems.length;
  const recentlyViewedCount = recentlyViewed.length;

  // Add item to recently viewed
  const addToRecentlyViewed = useCallback((product) => {
    setRecentlyViewed(prev => {
      // Remove if already exists
      const filtered = prev.filter(item => item.id !== product.id);
      // Add to beginning and limit to 10 items
      const newItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
        rating: product.rating,
        viewedAt: new Date().toISOString(),
        khmerName: product.khmerName || product.name
      };
      return [newItem, ...filtered.slice(0, 9)];
    });
  }, []);

  // Cart functions
  const addToCart = useCallback((product, size = 'M', color = 'Black', quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && item.size === size && item.color === color
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      const priceNumber = parseFloat(product.price?.replace(/[^0-9.-]+/g, "") || 0);
      const originalPriceNumber = product.originalPrice 
        ? parseFloat(product.originalPrice?.replace(/[^0-9.-]+/g, "")) 
        : null;
      
      return [...prevItems, {
        id: product.id,
        name: product.name,
        image: product.image,
        price: priceNumber,
        originalPrice: originalPriceNumber,
        size,
        color,
        quantity,
        inStock: true,
        addedAt: new Date().toISOString(),
        category: product.category,
        khmerName: product.khmerName || product.name,
        productId: product.id // Keep reference to original product
      }];
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Wishlist functions
  const toggleWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      
      if (exists) {
        // Remove from wishlist
        return prev.filter(item => item.id !== product.id);
      } else {
        // Add to wishlist
        const priceNumber = parseFloat(product.price?.replace(/[^0-9.-]+/g, "") || 0);
        return [...prev, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: priceNumber,
          originalPrice: product.originalPrice ? parseFloat(product.originalPrice.replace(/[^0-9.-]+/g, "")) : null,
          addedAt: new Date().toISOString(),
          category: product.category,
          khmerName: product.khmerName || product.name,
          rating: product.rating,
          inStock: product.inStock !== false
        }];
      }
    });
  }, []);

  const addToWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev;
      
      const priceNumber = parseFloat(product.price?.replace(/[^0-9.-]+/g, "") || 0);
      return [...prev, {
        id: product.id,
        name: product.name,
        image: product.image,
        price: priceNumber,
        originalPrice: product.originalPrice ? parseFloat(product.originalPrice.replace(/[^0-9.-]+/g, "")) : null,
        addedAt: new Date().toISOString(),
        category: product.category,
        khmerName: product.khmerName || product.name,
        rating: product.rating,
        inStock: product.inStock !== false
      }];
    });
  }, []);

  const removeFromWishlist = useCallback((productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const moveToCart = useCallback((wishlistItem) => {
    addToCart(wishlistItem);
    removeFromWishlist(wishlistItem.id);
  }, [addToCart, removeFromWishlist]);

  const moveAllToCart = useCallback(() => {
    wishlistItems.forEach(item => {
      addToCart(item);
    });
    setWishlistItems([]);
  }, [wishlistItems, addToCart]);

  // Check if product is in wishlist
  const isInWishlist = useCallback((productId) => {
    return wishlistItems.some(item => item.id === productId);
  }, [wishlistItems]);

  // Check if product is in cart
  const isInCart = useCallback((productId, size = 'M', color = 'Black') => {
    return cartItems.some(item => 
      item.id === productId && item.size === size && item.color === color
    );
  }, [cartItems]);

  // Get cart item quantity
  const getCartItemQuantity = useCallback((productId, size = 'M', color = 'Black') => {
    const item = cartItems.find(item => 
      item.id === productId && item.size === size && item.color === color
    );
    return item ? item.quantity : 0;
  }, [cartItems]);

  // Calculate totals
  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const getCartSubtotal = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const originalPrice = item.originalPrice || item.price;
      return total + (originalPrice * item.quantity);
    }, 0);
  }, [cartItems]);

  const getDiscountAmount = useCallback(() => {
    return getCartSubtotal() - getCartTotal();
  }, [getCartSubtotal, getCartTotal]);

  const getShippingCost = useCallback(() => {
    const total = getCartTotal();
    return total > 100 ? 0 : 9.99;
  }, [getCartTotal]);

  const getTaxAmount = useCallback(() => {
    return getCartTotal() * 0.1; // 10% tax
  }, [getCartTotal]);

  const getOrderTotal = useCallback(() => {
    return getCartTotal() + getShippingCost() + getTaxAmount();
  }, [getCartTotal, getShippingCost, getTaxAmount]);

  // Get cart summary
  const getCartSummary = useCallback(() => {
    return {
      itemCount: cartCount,
      uniqueItems: cartItems.length,
      subtotal: getCartSubtotal(),
      discount: getDiscountAmount(),
      shipping: getShippingCost(),
      tax: getTaxAmount(),
      total: getOrderTotal(),
      items: cartItems
    };
  }, [cartCount, cartItems, getCartSubtotal, getDiscountAmount, getShippingCost, getTaxAmount, getOrderTotal]);

  // Group cart items by category
  const getCartByCategory = useCallback(() => {
    return cartItems.reduce((acc, item) => {
      const category = item.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  }, [cartItems]);

  // Khmer currency converter
  const convertToKhmerRiel = useCallback((usdAmount) => {
    const exchangeRate = 4000; // Approximate exchange rate
    return Math.round(usdAmount * exchangeRate);
  }, []);

  // Format currency with Khmer option
  const formatCurrency = useCallback((amount, useKhmer = false, showBoth = false) => {
    if (showBoth) {
      const riel = convertToKhmerRiel(amount);
      return `$${amount.toFixed(2)} | ៛${riel.toLocaleString('km-KH')}`;
    }
    
    if (useKhmer) {
      const riel = convertToKhmerRiel(amount);
      return `៛${riel.toLocaleString('km-KH')}`;
    }
    return `$${amount.toFixed(2)}`;
  }, [convertToKhmerRiel]);

  // Get cart recommendations based on current items
  const getCartRecommendations = useCallback(() => {
    const categories = cartItems.map(item => item.category);
    if (categories.length === 0) return [];
    
    const mostCommonCategory = categories.reduce((a, b, i, arr) => 
      arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
    );
    
    // Mock recommendations - in real app, this would come from an API
    return wishlistItems
      .filter(item => item.category === mostCommonCategory)
      .slice(0, 3);
  }, [cartItems, wishlistItems]);

  // Get wishlist recommendations
  const getWishlistRecommendations = useCallback(() => {
    if (wishlistItems.length === 0) return [];
    
    // Get products from same categories as wishlist items
    const categories = [...new Set(wishlistItems.map(item => item.category))];
    
    // Mock - in real app, this would come from an API
    return recentlyViewed
      .filter(item => categories.includes(item.category))
      .slice(0, 4);
  }, [wishlistItems, recentlyViewed]);

  // Clear recently viewed
  const clearRecentlyViewed = useCallback(() => {
    setRecentlyViewed([]);
  }, []);

  // Clear wishlist
  const clearWishlist = useCallback(() => {
    setWishlistItems([]);
  }, []);

  // Get combined cart and wishlist items
  const getCombinedItems = useCallback(() => {
    const allItems = [...cartItems, ...wishlistItems];
    // Remove duplicates by id
    const uniqueItems = allItems.filter((item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
    );
    return uniqueItems;
  }, [cartItems, wishlistItems]);

  return (
    <CartContext.Provider value={{
      // Cart state
      cartItems,
      cartCount,
      
      // Wishlist state
      wishlistItems,
      wishlistCount,
      isInWishlist,
      isInCart,
      getCartItemQuantity,
      
      // Recently viewed
      recentlyViewed,
      recentlyViewedCount,
      addToRecentlyViewed,
      clearRecentlyViewed,
      
      // Cart actions
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      
      // Wishlist actions
      toggleWishlist,
      addToWishlist,
      removeFromWishlist,
      moveToCart,
      moveAllToCart,
      clearWishlist,
      
      // Calculations
      getCartTotal,
      getCartSubtotal,
      getDiscountAmount,
      getShippingCost,
      getTaxAmount,
      getOrderTotal,
      getCartSummary,
      getCartByCategory,
      
      // Currency
      formatCurrency,
      convertToKhmerRiel,
      
      // Recommendations
      getCartRecommendations,
      getWishlistRecommendations,
      getCombinedItems,
      
      // Analytics
      totalSpent: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
      averageOrderValue: cartItems.length > 0 ? getCartTotal() / cartItems.length : 0,
      favoriteCategory: cartItems.length > 0 
        ? Object.entries(getCartByCategory()).sort((a, b) => b[1].length - a[1].length)[0]?.[0] 
        : null
    }}>
      {children}
    </CartContext.Provider>
  );
};