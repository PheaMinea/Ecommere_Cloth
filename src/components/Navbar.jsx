import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './ShopContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { cartCount, wishlistCount = 3 } = useCart();
    const navItems = ["Home", "Men", "Women", "Kids", "Accessories", "Sale"];
    const brandName = "Khmer Style";
    const khmerPattern = "១២៣៤៥៦៧៨៩";

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-b from-white to-gray-50/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
            {/* Khmer Pattern Announcement Bar */}
            <div className="relative bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#0d2d4a] text-white py-3 overflow-hidden">
                {/* Khmer Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="flex justify-center items-center h-full">
                        <span className="text-2xl tracking-widest font-light animate-pulse">
                            {khmerPattern}
                        </span>
                    </div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between text-sm">
                        <div className="flex items-center gap-6 mb-2 md:mb-0">
                            <span className="flex items-center gap-2 font-medium bg-gradient-to-r from-[#f8b739] to-[#ffd166] bg-clip-text text-transparent">
                                <div className="w-2 h-2 bg-[#f8b739] rounded-full animate-pulse"></div>
                                Free Express Shipping
                            </span>
                            <span className="hidden md:inline text-gray-400">|</span>
                            <span className="flex items-center gap-2 text-[#a8d5e5]">
                                <svg className="w-4 h-4 text-[#f8b739]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                24-Hour Delivery
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-[#a8d5e5] hover:text-white transition-colors text-sm font-medium hover:scale-105 transform duration-200">
                                Store Locator
                            </a>
                            <span className="hidden md:inline text-gray-400">|</span>
                            <a href="#" className="text-[#a8d5e5] hover:text-white transition-colors text-sm font-medium hover:scale-105 transform duration-200">
                                Track Order
                            </a>
                            <span className="hidden md:inline text-gray-400">|</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#f8b739] rounded-full animate-pulse"></span>
                                <span className="text-[#f8b739] font-medium">{50 + cartCount} Online Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* Khmer Style Luxury Brand Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            {/* Traditional Khmer inspired logo */}
                            <div className="relative w-16 h-16 bg-gradient-to-br from-[#0d2d4a] via-[#1a4d6e] to-[#0d2d4a] rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 shadow-xl overflow-hidden">
                                {/* Khmer pattern overlay */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="grid grid-cols-3 gap-1 w-full h-full">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="border border-white/20"></div>
                                        ))}
                                    </div>
                                </div>
                                {/* Main logo text */}
                                <div className="relative">
                                    <div className="text-white text-3xl font-bold tracking-wider">KS</div>
                                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#f8b739] rounded-full"></div>
                                </div>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#f8b739] to-[#0d2d4a] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-[#0d2d4a] tracking-tight">
                                KHMER STYLE
                                <span className="block text-xs font-normal text-gray-500 tracking-wider mt-1 uppercase">
                                    Premium Cambodian Fashion
                                </span>
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Khmer Modern */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <Link 
                                    to="#" 
                                    className="text-gray-700 hover:text-[#0d2d4a] font-medium text-sm tracking-wide transition-all duration-300 group-hover:font-semibold"
                                >
                                    {item}
                                </Link>
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f8b739] to-[#0d2d4a] group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Action Icons - Modern Khmer Style */}
                    <div className="flex items-center gap-6">
                        {/* Search */}
                        <div className="hidden md:block relative group">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#0d2d4a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className="absolute right-0 top-full mt-2 w-80 p-4 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Search luxury products..." 
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d2d4a] focus:bg-white text-sm"
                                    />
                                    <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* User Account */}
                        <button className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 rounded-full transition-all duration-300 group border border-gray-200">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#0d2d4a] to-[#1a4d6e] rounded-full flex items-center justify-center shadow-md">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <span className="text-sm font-medium text-[#0d2d4a] block">Account</span>
                                <span className="text-xs text-gray-500">Welcome</span>
                            </div>
                        </button>

                        {/* Wishlist */}
                        <button className="relative p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 group">
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-[#d32f2f] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#d32f2f] to-[#ff5252] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform">
                                    {wishlistCount}
                                </span>
                            )}
                        </button>

                        {/* Shopping Cart - Khmer Modern Design */}
                        <button 
                            onClick={() => navigate('/cart')}
                            className="relative p-2.5 hover:bg-gray-100 rounded-full transition-all duration-300 group"
                            aria-label={`Shopping cart with ${cartCount} items`}
                        >
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-[#0d2d4a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <>
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        {cartCount > 99 ? '99+' : cartCount}
                                    </span>
                                    <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-[#f8b739] rounded-full animate-ping"></div>
                                </>
                            )}
                        </button>

                        {/* Mobile Menu Button - Modern Khmer Style */}
                        <button className="lg:hidden flex flex-col items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-lg transition-colors group">
                            <span className="block w-6 h-0.5 bg-[#0d2d4a] mb-1.5 group-hover:w-4 transition-all duration-300 group-hover:bg-[#f8b739]"></span>
                            <span className="block w-4 h-0.5 bg-[#0d2d4a] mb-1.5 group-hover:w-6 transition-all duration-300 group-hover:bg-[#1a4d6e]"></span>
                            <span className="block w-5 h-0.5 bg-[#0d2d4a] group-hover:w-3 transition-all duration-300 group-hover:bg-[#0d2d4a]"></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden mt-6 pt-6 border-t border-gray-200">
                    <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-3">
                        {navItems.map((item, index) => (
                            <Link 
                                key={index} 
                                to="#" 
                                className="flex-shrink-0 px-4 py-2.5 text-xs font-medium text-gray-700 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 hover:text-[#0d2d4a] rounded-full transition-all duration-300 whitespace-nowrap border border-gray-200 hover:border-gray-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Mobile Search */}
                    <div className="mt-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search luxury products..." 
                                className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d2d4a] focus:bg-white text-sm transition-all duration-300"
                            />
                            <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <Link to="/account" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0d2d4a] transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <span>Account</span>
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0d2d4a] transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-full flex items-center justify-center relative">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#d32f2f] to-[#ff5252] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                        {wishlistCount}
                                    </span>
                                )}
                            </div>
                            <span>Wishlist</span>
                        </Link>
                        <Link to="/cart" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0d2d4a] transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-full flex items-center justify-center relative">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span>Cart</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Khmer Traditional Pattern Bar */}
            <div className="hidden lg:block bg-gradient-to-r from-white via-gray-50/50 to-white border-t border-gray-200/50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-10 py-4 relative">
                        {/* Decorative Khmer pattern */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#f8b739] to-transparent"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#f8b739] to-transparent"></div>
                        <Link to="/menswear" className="text-xs font-medium text-gray-600 hover:text-[#0d2d4a] uppercase tracking-[0.2em] transition-all duration-300 hover:font-semibold group">
                            <span className="relative">
                                Shop
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8b739] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                        <Link to="/menswear" className="text-xs font-medium text-gray-600 hover:text-[#0d2d4a] uppercase tracking-[0.2em] transition-all duration-300 hover:font-semibold group">
                            <span className="relative">
                                Menswear
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8b739] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                        <Link to="/womenswear" className="text-xs font-medium text-gray-600 hover:text-[#0d2d4a] uppercase tracking-[0.2em] transition-all duration-300 hover:font-semibold group">
                            <span className="relative">
                                Womenswear
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8b739] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                        <Link to="/children" className="text-xs font-medium text-gray-600 hover:text-[#0d2d4a] uppercase tracking-[0.2em] transition-all duration-300 hover:font-semibold group">
                            <span className="relative">
                                Children
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8b739] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                        <Link to="/footwear" className="text-xs font-medium text-gray-600 hover:text-[#0d2d4a] uppercase tracking-[0.2em] transition-all duration-300 hover:font-semibold group">
                            <span className="relative">
                                Footwear
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8b739] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                        <Link to="/accessories" className="text-xs font-medium text-gray-600 hover:text-[#0d2d4a] uppercase tracking-[0.2em] transition-all duration-300 hover:font-semibold group">
                            <span className="relative">
                                Accessories
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8b739] group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;