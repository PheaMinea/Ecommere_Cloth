import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/ShopContext';

const Cart = () => {
    const navigate = useNavigate();
    const { 
        cartItems, 
        cartCount,
        removeFromCart, 
        updateQuantity, 
        clearCart,
        getCartTotal 
    } = useCart();

    const handleQuantityChange = (itemId, change) => {
        const item = cartItems.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity + change;
            updateQuantity(itemId, newQuantity);
        }
    };

    const subtotal = getCartTotal();
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-gray-50 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
                        <p className="text-gray-600 mt-2">{cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart</p>
                    </div>
                    {cartItems.length > 0 && (
                        <button 
                            onClick={clearCart}
                            className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-2 text-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Clear All
                        </button>
                    )}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        {cartItems.length === 0 ? (
                            <div className="bg-white rounded-2xl p-8 text-center">
                                <div className="text-6xl mb-4">🛒</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
                                <p className="text-gray-600 mb-6">Add some items to get started</p>
                                <button 
                                    onClick={() => navigate('/')}
                                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4">
                                        {/* Product Image */}
                                        <div className="md:w-32 md:h-32 w-full aspect-square overflow-hidden rounded-lg">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                                        <span>Size: {item.size}</span>
                                                        <span>Color: {item.color}</span>
                                                    </div>
                                                    {item.inStock ? (
                                                        <div className="inline-flex items-center gap-2 text-green-600 text-sm mt-2">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                            In Stock
                                                        </div>
                                                    ) : (
                                                        <div className="text-red-600 text-sm mt-2">Out of Stock</div>
                                                    )}
                                                </div>
                                                
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Quantity & Price */}
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center border border-gray-200 rounded-lg">
                                                    <button 
                                                        onClick={() => handleQuantityChange(item.id, -1)}
                                                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="px-4 py-1 border-x border-gray-200 font-medium">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => handleQuantityChange(item.id, 1)}
                                                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                
                                                <div className="text-lg font-bold text-gray-900">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 sticky top-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                
                                <div className="border-t pt-4">
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">Including ${tax.toFixed(2)} in taxes</p>
                                </div>
                            </div>
                            
                            {/* Checkout Button */}
                            <button className="w-full py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors mb-4">
                                Proceed to Checkout
                            </button>
                            
                            {/* Continue Shopping */}
                            <button 
                                onClick={() => navigate('/')}
                                className="w-full py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;