import { useParams, useNavigate } from 'react-router-dom';
import data from "../data";
import { useState } from 'react';
import { useCart } from '../components/ShopContext';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { products } = data;
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Black');
    const [quantity, setQuantity] = useState(1);
    
    const product = products.find(p => p.id === parseInt(productId));
    
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    const similarProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const colors = ['bg-black', 'bg-gray-300', 'bg-white border', 'bg-stone-200'];
    const colorNames = ['Black', 'Gray', 'White', 'Stone'];

    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor, quantity);
        
        // Show success message
        const event = new CustomEvent('cart:added', { 
            detail: { 
                product: product.name,
                quantity: quantity 
            } 
        });
        window.dispatchEvent(event);
    };

    const handleBuyNow = () => {
        addToCart(product, selectedSize, selectedColor, quantity);
        navigate('/cart');
    };

    return (
        <div className="min-h-screen bg-white py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                {/* Minimal Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors text-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to shop
                </button>

                {/* Main Product Section - Modern Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Product Images - Minimal */}
                    <div>
                        {/* Main Image */}
                        <div className="relative mb-4 overflow-hidden rounded-xl">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full aspect-square object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Badge - Minimal */}
                            {product.badge && (
                                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg`}>
                                    {product.badge}
                                </div>
                            )}
                        </div>
                        
                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((thumb) => (
                                <div 
                                    key={thumb}
                                    className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
                                >
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info - Minimalist */}
                    <div className="space-y-8">
                        {/* Category & SKU */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{product.category}</span>
                            <span>SKU: FASH{product.id.toString().padStart(4, '0')}</span>
                        </div>

                        {/* Product Name */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            {product.name}
                        </h1>

                        {/* Rating & Price */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-gray-300'}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">({product.reviews})</span>
                            </div>
                            
                            <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                                {product.originalPrice && (
                                    <div className="text-sm text-gray-400 line-through">{product.originalPrice}</div>
                                )}
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div className="inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg font-medium">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            In Stock • Free Shipping
                        </div>

                        {/* Description - Minimal */}
                        <div>
                            <p className="text-gray-600 leading-relaxed">
                                Premium craftsmanship meets modern design. Made from sustainable materials with attention to detail and perfect fit.
                            </p>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                            <div className="flex gap-3">
                                {colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedColor(colorNames[index])}
                                        className={`w-10 h-10 ${color} rounded-full border-2 hover:scale-110 transition-transform duration-300 ${selectedColor === colorNames[index] ? 'border-gray-900' : 'border-transparent'}`}
                                        title={colorNames[index]}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Size guide</a>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-2.5 border text-sm font-medium transition-all duration-300 ${selectedSize === size ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-600 hover:border-gray-900'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-200 rounded-lg">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-2 border-x border-gray-200 font-medium">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                                
                                <button 
                                    onClick={handleAddToCart}
                                    className="flex-1 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300 rounded-lg"
                                >
                                    Add to Cart
                                </button>
                                
                                <button className="p-3 border border-gray-200 hover:border-gray-900 transition-colors duration-300 rounded-lg">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            
                            <button 
                                onClick={handleBuyNow}
                                className="w-full py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-lg"
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Features */}
                        <div className="pt-6 border-t border-gray-100">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Premium materials
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Sustainable production
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Perfect fit guarantee
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Shipping</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            Free shipping worldwide
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            30-day returns
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            2-5 business days
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {similarProducts.map((similarProduct) => (
                            <div 
                                key={similarProduct.id}
                                className="group cursor-pointer"
                                onClick={() => navigate(`/product/${similarProduct.id}`)}
                            >
                                <div className="aspect-square mb-3 overflow-hidden rounded-xl">
                                    <img 
                                        src={similarProduct.image} 
                                        alt={similarProduct.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-gray-700 transition-colors">
                                        {similarProduct.name}
                                    </h3>
                                    <div className="text-sm text-gray-900 font-bold">{similarProduct.price}</div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg 
                                                key={i} 
                                                className={`w-3 h-3 ${i < Math.floor(similarProduct.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-xs text-gray-500">({similarProduct.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;