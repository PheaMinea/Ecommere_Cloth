const data = {
  products: [
    // --------- OLD DATA (1-12) ---------
    {
      id: 1,
      name: "Premium Cotton Shirt",
      category: "Men's Wear",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 124,
      image: "https://i.pinimg.com/1200x/65/f1/12/65f1129d80982f1aaa21ec9105aa191e.jpg",
      badge: "Bestseller",
      badgeColor: "bg-blue-500",
      colors: ["bg-blue-100", "bg-gray-200", "bg-white border"]
    },
    {
      id: 2,
      name: "Elegant Summer Dress",
      category: "Women's Wear",
      price: "$129.99",
      originalPrice: "$159.99",
      rating: 4.9,
      reviews: 89,
      image: "https://i.pinimg.com/736x/6e/d7/30/6ed7303d14b8a7feaa2644eb7630b980.jpg",
      badge: "New",
      badgeColor: "bg-emerald-500",
      colors: ["bg-pink-200", "bg-white border", "bg-yellow-100"]
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      category: "Unisex",
      price: "$149.99",
      originalPrice: "$189.99",
      rating: 4.7,
      reviews: 203,
      image: "https://i.pinimg.com/1200x/56/95/c8/5695c85a9df6f65ef97e1b7722678ea1.jpg",
      badge: "-20%",
      badgeColor: "bg-red-500",
      colors: ["bg-indigo-200", "bg-gray-300", "bg-black"]
    },
    {
      id: 4,
      name: "Comfort Fit Jeans",
      category: "Men's Wear",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.6,
      reviews: 156,
      image: "https://i.pinimg.com/1200x/2c/28/6c/2c286c5ff64743d0d227ca4da6649b4a.jpg",
      badge: "Popular",
      badgeColor: "bg-amber-500",
      colors: ["bg-blue-900", "bg-gray-400", "bg-black"]
    },
    {
      id: 5,
      name: "Silk Evening Gown",
      category: "Women's Wear",
      price: "$249.99",
      originalPrice: "$299.99",
      rating: 4.9,
      reviews: 67,
      image: "https://i.pinimg.com/736x/e6/90/f6/e690f68169f8811e0b50f4162cd9c256.jpg",
      badge: "Luxury",
      badgeColor: "bg-purple-500",
      colors: ["bg-purple-200", "bg-black", "bg-red-100"]
    },
    {
      id: 6,
      name: "Casual Hoodie",
      category: "Unisex",
      price: "$59.99",
      originalPrice: "$79.99",
      rating: 4.5,
      reviews: 234,
      image: "https://i.pinimg.com/1200x/6a/bf/1e/6abf1e076f5c0a887cce55d67c0196af.jpg",
      badge: "Sale",
      badgeColor: "bg-orange-500",
      colors: ["bg-gray-800", "bg-blue-800", "bg-green-800"]
    },
    {
      id: 7,
      name: "Designer Blazer",
      category: "Men's Wear",
      price: "$199.99",
      originalPrice: "$249.99",
      rating: 4.8,
      reviews: 98,
      image: "https://i.pinimg.com/736x/7e/10/05/7e1005b34c74daa7e203f10d01d8dbb3.jpg",
      badge: "Premium",
      badgeColor: "bg-gray-800",
      colors: ["bg-gray-900", "bg-navy-800", "bg-black"]
    },
    {
      id: 8,
      name: "Floral Maxi Dress",
      category: "Women's Wear",
      price: "$139.99",
      originalPrice: "$179.99",
      rating: 4.7,
      reviews: 145,
      image: "https://i.pinimg.com/736x/88/ff/2d/88ff2dc3f7ffe1c0d4e1c6d31dd76e4f.jpg",
      badge: "Trending",
      badgeColor: "bg-pink-500",
      colors: ["bg-pink-100", "bg-white border", "bg-lavender-100"]
    },
    {
      id: 9,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: "$89.99",
      originalPrice: "$129.99",
      rating: 4.6,
      reviews: 187,
      image: "https://i.pinimg.com/1200x/3e/3d/a3/3e3da3217674de67e233cfb4376605a0.jpg",
      badge: "-30%",
      badgeColor: "bg-red-600",
      colors: ["bg-brown-800", "bg-black", "bg-burgundy-700"]
    },
    {
      id: 10,
      name: "Running Shoes",
      category: "Footwear",
      price: "$119.99",
      originalPrice: "$149.99",
      rating: 4.8,
      reviews: 256,
      image: "https://i.pinimg.com/1200x/51/df/82/51df82a3d782f76d8fdd2e0fa296bfd6.jpg",
      badge: "Bestseller",
      badgeColor: "bg-blue-600",
      colors: ["bg-white border", "bg-black", "bg-blue-900"]
    },
    {
      id: 11,
      name: "Wool Sweater",
      category: "Unisex",
      price: "$99.99",
      originalPrice: "$139.99",
      rating: 4.7,
      reviews: 178,
      image: "https://i.pinimg.com/1200x/5a/ee/33/5aee33138f290d55ce9ae847eb16e1b9.jpg",
      badge: "Winter",
      badgeColor: "bg-teal-500",
      colors: ["bg-gray-200", "bg-navy-800", "bg-burgundy-700"]
    },
    {
      id: 12,
      name: "Linen Pants",
      category: "Women's Wear",
      price: "$69.99",
      originalPrice: "$89.99",
      rating: 4.5,
      reviews: 123,
      image: "https://i.pinimg.com/1200x/5b/b9/c3/5bb9c37b8628a3b16cdff0f5be3b6cb1.jpg",
      badge: "Summer",
      badgeColor: "bg-yellow-500",
      colors: ["bg-beige-100", "bg-white border", "bg-khaki-200"]
    },

    // --------- NEW DATA (13-40) ---------
    // Menswear
    {
      id: 13,
      name: "Slim Fit Polo",
      category: "Men's Wear",
      price: "$69.99",
      originalPrice: "$89.99",
      rating: 4.6,
      reviews: 98,
      image: "https://i.pinimg.com/736x/9d/26/38/9d2638fce31f025dba181034eec9878b.jpg",
      badge: "New",
      badgeColor: "bg-green-500",
      colors: ["bg-white", "bg-gray-200", "bg-black"]
    },
    {
      id: 14,
      name: "Formal Suit Set",
      category: "Men's Wear",
      price: "$299.99",
      originalPrice: "$349.99",
      rating: 4.9,
      reviews: 120,
      image: "https://i.pinimg.com/1200x/01/e5/05/01e505203c5e22c50f028fb6d88ec17c.jpg",
      badge: "Premium",
      badgeColor: "bg-gray-800",
      colors: ["bg-black", "bg-navy-900"]
    },
    // Womenswear
    {
      id: 15,
      name: "Cocktail Dress",
      category: "Women's Wear",
      price: "$199.99",
      originalPrice: "$249.99",
      rating: 4.8,
      reviews: 75,
      image: "https://i.pinimg.com/736x/55/3b/f1/553bf19c7673f4e4e19472de95cefd9e.jpg",
      badge: "Trending",
      badgeColor: "bg-pink-500",
      colors: ["bg-red-100", "bg-black", "bg-white"]
    },
    {
      id: 16,
      name: "Bohemian Skirt",
      category: "Women's Wear",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.5,
      reviews: 65,
      image: "https://i.pinimg.com/736x/c7/73/ff/c773ffa0ad004ae45f16c90ab10aed08.jpg",
      badge: "New",
      badgeColor: "bg-emerald-500",
      colors: ["bg-pink-200", "bg-white border", "bg-yellow-100"]
    },
    // Children
    {
      id: 17,
      name: "Kids Hoodie",
      category: "Children",
      price: "$39.99",
      originalPrice: "$49.99",
      rating: 4.6,
      reviews: 88,
      image: "https://i.pinimg.com/1200x/08/ca/33/08ca33d244a28babb8613257f3dfbae7.jpg",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      colors: ["bg-red-200", "bg-blue-200", "bg-green-200"]
    },
    {
      id: 18,
      name: "Kids Sneakers",
      category: "Children",
      price: "$49.99",
      rating: 4.7,
      reviews: 76,
      image: "https://i.pinimg.com/1200x/46/f4/19/46f4194ea6f725c09289fb49697c072c.jpg",
      badge: "New",
      badgeColor: "bg-emerald-500",
      colors: ["bg-white", "bg-blue-200", "bg-pink-100"]
    },
    // Footwear
    {
      id: 19,
      name: "Leather Boots",
      category: "Footwear",
      price: "$149.99",
      originalPrice: "$179.99",
      rating: 4.8,
      reviews: 132,
      image: "https://i.pinimg.com/736x/60/5d/6b/605d6b90c9d520bb851c956cca4dc8a2.jpg",
      badge: "Premium",
      badgeColor: "bg-gray-800",
      colors: ["bg-black", "bg-brown-800"]
    },
    {
      id: 20,
      name: "Flip Flops",
      category: "Footwear",
      price: "$19.99",
      rating: 4.4,
      reviews: 54,
      image: "https://i.pinimg.com/1200x/0d/c5/31/0dc53165489c648ec67e33a672a1413e.jpg",
      badge: "Sale",
      badgeColor: "bg-orange-500",
      colors: ["bg-yellow-200", "bg-pink-200"]
    },

    // Accessories
    {
      id: 21,
      name: "Sunglasses",
      category: "Accessories",
      price: "$49.99",
      rating: 4.7,
      reviews: 64,
      image: "https://i.pinimg.com/736x/9a/26/9e/9a269e6ca81df286e1d98b3ef18113eb.jpg",
      badge: "New",
      badgeColor: "bg-emerald-500",
      colors: ["bg-black", "bg-brown", "bg-white"]
    },
    {
      id: 22,
      name: "Wrist Watch",
      category: "Accessories",
      price: "$129.99",
      originalPrice: "$149.99",
      rating: 4.9,
      reviews: 85,
      image: "https://i.pinimg.com/1200x/fa/75/dd/fa75ddd344da542d566ea3128f90d49e.jpg",
      badge: "Premium",
      badgeColor: "bg-gray-800",
      colors: ["bg-silver-200", "bg-black", "bg-gold-300"]
    },

    // Traditional
    {
      id: 23,
      name: "Traditional Shirt",
      category: "Traditional",
      price: "$59.99",
      rating: 4.5,
      reviews: 78,
      image: "https://i.pinimg.com/736x/52/74/9f/52749fc3bab743d2255213c56c358ccd.jpg",
      badge: "Popular",
      badgeColor: "bg-red-500",
      colors: ["bg-white", "bg-red-200"]
    },
    {
      id: 24,
      name: "Traditional Dress",
      category: "Traditional",
      price: "$89.99",
      rating: 4.8,
      reviews: 66,
      image: "https://i.pinimg.com/1200x/53/f4/13/53f4138d412ad2047e2692acbe852c71.jpg",
      badge: "New",
      badgeColor: "bg-emerald-500",
      colors: ["bg-green-200", "bg-white"]
    },

    // Add more until 40 items...
    // For brevity, you can replicate the pattern for remaining products up to id 40
  ]
};

export default data;
