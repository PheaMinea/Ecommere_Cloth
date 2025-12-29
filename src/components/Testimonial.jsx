const Testimonia = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Fashion Blogger",
            image: "https://i.pinimg.com/736x/05/6c/85/056c85d23f30445c4ad7889967e6d9a1.jpg",
            rating: 5,
            comment: "The quality is absolutely outstanding! I've never felt such premium fabrics. My new dress got so many compliments at the event.",
            date: "2 days ago"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Software Engineer",
            image: "https://i.pinimg.com/736x/42/7f/c6/427fc6f7c41fd2ba3ecf0cba29cb1fd8.jpg",
            rating: 5,
            comment: "Perfect fit and amazing comfort. The minimalist design is exactly what I was looking for. Will definitely shop again!",
            date: "1 week ago"
        },
        {
            id: 3,
            name: "Emma Wilson",
            role: "Marketing Director",
            image: "https://i.pinimg.com/736x/6e/1c/c4/6e1cc4cc72a5cef35be0eda605c8e46b.jpg",
            rating: 4,
            comment: "Great customer service and fast shipping. The silk shirt exceeded my expectations. The attention to detail is remarkable.",
            date: "3 days ago"
        },
       
        
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                
                {/* Header with Modern Design */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
                        <span className="text-sm font-medium text-blue-600 tracking-widest uppercase">Testimonials</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
                        What Our <span className="font-bold">Customers</span> Say
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Real stories from people who love our products
                    </p>
                </div>

                {/* Testimonials Grid - Modern Card Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Decorative Top Accent */}
                            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            
                            <div className="p-8">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif">"</div>
                                
                                {/* Rating Stars */}
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Comment */}
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                                    {testimonial.comment}
                                </p>

                                {/* Customer Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
                                            <img 
                                                src={testimonial.image} 
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Online Status */}
                                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                            </div>
                                            <span className="text-xs text-gray-400">{testimonial.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Stats Section - Modern */}
                <div className="mt-20 pt-12 border-t border-gray-100">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: "4.9/5", label: "Average Rating", icon: "⭐", color: "text-yellow-500" },
                            { value: "10K+", label: "Happy Customers", icon: "😊", color: "text-blue-500" },
                            { value: "98%", label: "Recommend Us", icon: "❤️", color: "text-red-500" },
                            { value: "24h", label: "Avg Response", icon: "⚡", color: "text-green-500" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                                <div className="text-gray-700 font-medium">{stat.label}</div>
                                <div className="text-2xl mt-2">{stat.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brands Section */}
                <div className="mt-20 pt-8 border-t border-gray-100">
                    <p className="text-center text-gray-500 mb-10 text-sm tracking-widest uppercase">As Featured In</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <div className="text-xl font-bold text-gray-300 hover:text-gray-800 transition-colors cursor-pointer transform hover:scale-110">VOGUE</div>
                        <div className="text-xl font-bold text-gray-300 hover:text-gray-800 transition-colors cursor-pointer transform hover:scale-110">ELLE</div>
                        <div className="text-xl font-bold text-gray-300 hover:text-gray-800 transition-colors cursor-pointer transform hover:scale-110">GQ</div>
                        <div className="text-xl font-bold text-gray-300 hover:text-gray-800 transition-colors cursor-pointer transform hover:scale-110">FORBES</div>
                        <div className="text-xl font-bold text-gray-300 hover:text-gray-800 transition-colors cursor-pointer transform hover:scale-110">COSMO</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonia;