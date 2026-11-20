import data from "../data";
import { Link } from 'react-router-dom';
import { useCart } from '../components/ShopContext';

const FeatureProduct = () => {
    const { products } = data;
    const { addToCart } = useCart();
    
    const khmerPattern = "កខគឃង";

    const handleQuickAdd = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        
        addToCart(product, 'M', 'Black', 1);
        
        // Show success message
        const event = new CustomEvent('cart:added', { 
            detail: { 
                product: product.name,
                quantity: 1 
            } 
        });
        window.dispatchEvent(event);
    };

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        
        addToCart(product, 'M', 'Black', 1);
        
        // Show success message
        const event = new CustomEvent('cart:added', { 
            detail: { 
                product: product.name,
                quantity: 1 
            } 
        });
        window.dispatchEvent(event);
    };

    // Khmer currency formatter
    const formatPrice = (price) => {
        if (typeof price === 'string' && price.includes('$')) {
            const amount = price.replace('$', '');
            return `$${amount} | ៛${(parseFloat(amount) * 4000).toLocaleString()}`;
        }
        return price;
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white via-[#f8f5f0] to-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Premium Khmer Header Section */}
                <div className="text-center mb-20 relative">
                    {/* Khmer Pattern Background */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-5">
                        <span className="text-6xl font-khmer tracking-wider">{khmerPattern}</span>
                    </div>
                    
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#0d2d4a] text-white rounded-full text-xs font-medium mb-6 tracking-[0.2em] uppercase">
                        ✦ ផលិតផលកំពូល
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0d2d4a] mb-8 tracking-tight">
                        <span className="font-khmer text-5xl md:text-6xl block mb-4">ផលិតផលទាំងអស់</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#f8b739] block">
                            All Products
                        </span>
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#f8b739] to-transparent"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] mx-2"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#f8b739]"></div>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        Discover our exclusive collection of premium Khmer-inspired fashion, meticulously crafted for the modern connoisseur.
                    </p>
                </div>

                {/* Luxury Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="group relative"
                        >
                            <Link 
                                to={`/product/${product.id}`}
                                className="block"
                            >
                                {/* Product Card Container */}
                                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border border-gray-100/50 relative">
                                    {/* Khmer Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#0d2d4a_49%,#0d2d4a_51%,transparent_52%)] bg-[size:20px_20px]"></div>
                                    </div>

                                    {/* Premium Image Container */}
                                    <div className="relative h-80 overflow-hidden">
                                        {/* Main Image with Gradient Overlay */}
                                        <div className="absolute inset-0">
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Khmer Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d4a]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                        
                                        {/* Luxury Badge */}
                                        {product.badge && (
                                            <div className="absolute top-6 left-6 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-2xl">
                                                {product.badge}
                                            </div>
                                        )}
                                        
                                        {/* Quick Add to Cart - Floating Button */}
                                        <button 
                                            onClick={(e) => handleQuickAdd(product, e)}
                                            className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg group/quick"
                                            aria-label={`Quick add ${product.name} to cart`}
                                        >
                                            <svg className="w-4 h-4 text-[#0d2d4a] group-hover/quick:text-[#f8b739] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>

                                        {/* Khmer Silk Indicator */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                                <div className="w-2 h-2 bg-[#f8b739] rounded-full"></div>
                                                <span className="text-xs text-[#0d2d4a] font-medium">Khmer Silk</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Luxury Product Info */}
                                    <div className="p-6 pt-8 relative">
                                        {/* Category & Rating */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                                                {product.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <div className="flex text-[#f8b739]">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg 
                                                            key={i} 
                                                            className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'fill-[#f8b739]' : 'text-gray-300'}`}
                                                            fill="currentColor" 
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500">({product.reviews || 0})</span>
                                            </div>
                                        </div>

                                        {/* Product Name */}
                                        <h3 className="text-lg font-bold text-[#0d2d4a] mb-3 group-hover:text-[#1a4d6e] transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                                            {product.name}
                                        </h3>

                                        {/* Price & Actions */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl font-bold text-[#0d2d4a]">{formatPrice(product.price)}</span>
                                                    {product.originalPrice && (
                                                        <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <span className="text-[#1a4d6e] bg-[#a8d5e5]/20 px-2 py-1 rounded font-medium flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        ដឹកជញ្ជូនឥតគិតថ្លៃ
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            {/* View Details Arrow */}
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg className="w-5 h-5 text-[#0d2d4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Add to Cart Button - Main Button */}
                                        <button 
                                            onClick={(e) => handleAddToCart(product, e)}
                                            className="w-full py-3 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white font-medium rounded-lg hover:from-[#1a4d6e] hover:to-[#0d2d4a] transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 group/cart"
                                        >
                                            <svg className="w-4 h-4 group-hover/cart:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            បន្ថែមទៅកន្ត្រក
                                        </button>
                                    </div>

                                    {/* Khmer Pattern Corner Decorations */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#f8b739]/30 rounded-tl-2xl"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#f8b739]/30 rounded-tr-2xl"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#0d2d4a]/30 rounded-bl-2xl"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#0d2d4a]/30 rounded-br-2xl"></div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Premium View All Button */}
                <div className="text-center mt-20 pt-12 border-t border-gray-100/50 relative">
                    {/* Floating Khmer Pattern */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-10">
                        <span className="text-4xl font-khmer">{khmerPattern}</span>
                    </div>
                    
                    <Link 
                        to="/shop"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white rounded-full font-medium hover:from-[#1a4d6e] hover:to-[#0d2d4a] transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f8b739] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <span className="tracking-wider relative z-10">Explore Collection</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    
                    {/* Khmer Divider */}
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#f8b739]"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-xs text-gray-400 tracking-widest uppercase">Premium Quality Guaranteed</span>
                            <span className="text-xs text-[#0d2d4a]/60 mt-1 font-khmer">គុណភាពប្រាកដប្រជា</span>
                        </div>
                        <div className="w-12 h-px bg-gradient-to-r from-[#f8b739] to-transparent"></div>
                    </div>

                    {/* Additional Khmer Info */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f8b739] to-[#ffd166] flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-[#0d2d4a]">Authentic Materials</div>
                                <div className="text-xs text-gray-500">វត្ថុធាតុដើមពិតប្រាកដ</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-[#0d2d4a]">Fast Delivery</div>
                                <div className="text-xs text-gray-500">ដឹកជញ្ជូនលឿន</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a4d6e] to-[#0d2d4a] flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-[#0d2d4a]">Easy Returns</div>
                                <div className="text-xs text-gray-500">ត្រឡប់ដោយងាយស្រួល</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureProduct;