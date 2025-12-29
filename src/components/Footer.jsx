const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="mb-6">
                            <div className="text-3xl font-light tracking-wider mb-2">STYLEHUB</div>
                            <div className="text-sm text-gray-400 tracking-widest">PREMIUM FASHION</div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating everyday style with premium quality clothing. 
                            Sustainable fashion for the modern individual.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-4">
                            {[
                                { icon: "twitter", color: "hover:bg-blue-500" },
                                { icon: "instagram", color: "hover:bg-pink-500" },
                                { icon: "facebook", color: "hover:bg-blue-700" },
                                { icon: "pinterest", color: "hover:bg-red-600" }
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className={`w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300`}
                                >
                                    {social.icon === 'twitter' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    )}
                                    {social.icon === 'instagram' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                        </svg>
                                    )}
                                    {social.icon === 'facebook' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                                        </svg>
                                    )}
                                    {social.icon === 'pinterest' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800">Shop</h3>
                        <ul className="space-y-3">
                            {['New Arrivals', 'Men\'s Collection', 'Women\'s Collection', 'Accessories', 'Footwear', 'Sale Items'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800">Customer Service</h3>
                        <ul className="space-y-3">
                            {['Contact Us', 'Shipping Policy', 'Return & Exchange', 'Size Guide', 'FAQ', 'Order Tracking'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800">Contact Us</h3>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Fashion Street, New York, NY 10001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>support@stylehub.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="max-w-2xl mx-auto mb-12">
                    <p className="text-gray-400 mb-4 text-center">Subscribe to our newsletter for exclusive updates</p>
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-1 px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white text-sm"
                        />
                        <button className="px-6 py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors text-sm">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">By subscribing, you agree to our Privacy Policy</p>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © 2024 StyleHub. All rights reserved.
                        </div>
                        
                        {/* Payment Methods */}
                        <div className="flex items-center gap-4">
                            <div className="text-xs text-gray-400">We accept:</div>
                            <div className="flex gap-2">
                                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center text-xs">💳</div>
                                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center text-xs">🏦</div>
                                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center text-xs">📱</div>
                                <div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center text-xs">💎</div>
                            </div>
                        </div>
                        
                        {/* Legal Links */}
                        <div className="flex gap-6 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                                <a 
                                    key={item} 
                                    href="#" 
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                        <div className="text-gray-500">🔒 Secure Shopping</div>
                        <div className="text-gray-500">🚚 Free Shipping Over $50</div>
                        <div className="text-gray-500">✅ 30-Day Returns</div>
                        <div className="text-gray-500">⭐ 24/7 Support</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;