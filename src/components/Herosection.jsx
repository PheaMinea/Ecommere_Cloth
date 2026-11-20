import { Link } from 'react-router-dom';

const Herosection = () => {
    const khmerPattern = "កខគឃងចឆជឈញ";
    const carouselImages = [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1558769132-cb1ceedebd1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-white via-[#f8f5f0] to-white overflow-hidden">
            {/* Khmer Inspired Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Khmer patterns */}
                <div className="absolute top-20 left-10 text-6xl text-[#0d2d4a]/5 rotate-12 font-khmer animate-pulse">
                    {khmerPattern}
                </div>
                <div className="absolute bottom-20 right-10 text-6xl text-[#f8b739]/5 -rotate-12 font-khmer animate-pulse">
                    {khmerPattern.split('').reverse().join('')}
                </div>
                
                {/* Gradient orbs */}
                <div className="absolute top-1/4 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-[#a8d5e5]/20 to-[#f8b739]/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-1/4 -right-40 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#f8b739]/20 to-[#1a4d6e]/10 rounded-full blur-3xl opacity-60"></div>
                
                {/* Khmer Geometric Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d2d4a_1px,transparent_1px)] bg-[size:3rem]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8b739_1px,transparent_1px)] bg-[size:3rem]"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative container mx-auto px-4 md:px-6 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-12">
                    
                    {/* Left Content - Khmer Modern Typography */}
                    <div className="lg:w-1/2">
                        {/* Exclusive Khmer Badge */}
                        <div className="inline-flex items-center gap-3 mb-12 px-5 py-3 bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#0d2d4a] text-white rounded-full shadow-2xl animate-fade-in">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gradient-to-r from-[#f8b739] to-[#ffd166] rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium tracking-[0.2em] uppercase">Exclusive Collection 2024</span>
                            </div>
                        </div>

                        {/* Khmer Modern Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight animate-slide-up">
                            <span className="block text-[#0d2d4a]">ស្តាយល៍ខ្មែរ</span>
                            <span className="block mt-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#f8b739]">
                                    Modern Elegance
                                </span>
                            </span>
                        </h1>

                        {/* Premium Description */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-light animate-fade-in delay-200">
                            Where traditional Khmer craftsmanship meets contemporary design. Our curated collections embody timeless elegance for the modern connoisseur.
                        </p>

                        {/* Luxury Stats with Khmer Touch */}
                        <div className="grid grid-cols-3 gap-8 mb-12 animate-fade-in delay-400">
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 w-px h-8 bg-gradient-to-b from-[#f8b739] to-transparent"></div>
                                <div className="text-4xl font-bold text-[#0d2d4a]">250+</div>
                                <div className="text-sm text-gray-500 tracking-wider uppercase">Exclusive Designs</div>
                            </div>
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 w-px h-8 bg-gradient-to-b from-[#f8b739] to-transparent"></div>
                                <div className="text-4xl font-bold text-[#0d2d4a]">98.7%</div>
                                <div className="text-sm text-gray-500 tracking-wider uppercase">Client Satisfaction</div>
                            </div>
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 w-px h-8 bg-gradient-to-b from-[#f8b739] to-transparent"></div>
                                <div className="text-4xl font-bold text-[#0d2d4a]">24/7</div>
                                <div className="text-sm text-gray-500 tracking-wider uppercase">Personal Styling</div>
                            </div>
                        </div>

                        {/* CTA Buttons - Khmer Modern Style */}
                        <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-600">
                            <Link 
                                to="/shop"
                                className="group relative px-10 py-5 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white rounded-xl hover:shadow-2xl hover:shadow-[#0d2d4a]/30 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="font-semibold tracking-wider relative z-10">Explore Collection</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d6e] to-[#0d2d4a] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#f8b739] to-[#0d2d4a] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            </Link>
                            
                            <Link 
                                to="/about"
                                className="group px-10 py-5 bg-transparent text-[#0d2d4a] rounded-xl border-2 border-[#0d2d4a]/30 hover:border-[#f8b739] hover:text-[#f8b739] transition-all duration-500 flex items-center justify-center gap-3 hover:shadow-lg"
                            >
                                <span className="font-semibold tracking-wider">Our Story</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Trusted By Brands */}
                        <div className="mt-16 pt-12 border-t border-gray-200/50 animate-fade-in delay-800">
                            <p className="text-sm text-gray-500 mb-6 tracking-widest uppercase">Featured In</p>
                            <div className="flex flex-wrap gap-8 items-center">
                                <div className="text-xl font-bold text-[#0d2d4a]/60 hover:text-[#0d2d4a] transition-colors duration-300 tracking-widest">VOGUE</div>
                                <div className="text-xl font-bold text-[#0d2d4a]/60 hover:text-[#0d2d4a] transition-colors duration-300 tracking-widest">ELLE</div>
                                <div className="text-xl font-bold text-[#0d2d4a]/60 hover:text-[#0d2d4a] transition-colors duration-300 tracking-widest">GQ</div>
                                <div className="text-xl font-bold text-[#0d2d4a]/60 hover:text-[#0d2d4a] transition-colors duration-300 tracking-widest">HARPER'S</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Luxury Carousel */}
                    <div className="lg:w-1/2 relative">
                        {/* Khmer Modern Carousel */}
                        <div className="relative" data-carousel="slide">
                            {/* Carousel wrapper */}
                            <div className="relative h-[32rem] overflow-hidden rounded-3xl shadow-2xl border border-gray-200/50">
                                {/* Item 1 */}
                                <div className="duration-700 ease-in-out" data-carousel-item>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d2d4a] to-[#1a4d6e]">
                                        <img 
                                            src={carouselImages[0]} 
                                            className="absolute block w-full h-full object-cover opacity-90"
                                            alt="Khmer Modern Fashion 1"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <h3 className="text-2xl font-bold mb-2">Traditional Elegance</h3>
                                            <p className="text-gray-200">Modern interpretation of Khmer silk</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Item 2 */}
                                <div className="duration-700 ease-in-out" data-carousel-item>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#f8b739] to-[#ffd166]">
                                        <img 
                                            src={carouselImages[1]} 
                                            className="absolute block w-full h-full object-cover opacity-90"
                                            alt="Khmer Modern Fashion 2"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <h3 className="text-2xl font-bold mb-2">Contemporary Design</h3>
                                            <p className="text-gray-200">Fusion of tradition and modernity</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Item 3 */}
                                <div className="duration-700 ease-in-out" data-carousel-item>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d6e] to-[#0d2d4a]">
                                        <img 
                                            src={carouselImages[2]} 
                                            className="absolute block w-full h-full object-cover opacity-90"
                                            alt="Khmer Modern Fashion 3"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <h3 className="text-2xl font-bold mb-2">Luxury Craftsmanship</h3>
                                            <p className="text-gray-200">Handcrafted with precision</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Item 4 */}
                                <div className="duration-700 ease-in-out" data-carousel-item>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d2d4a] to-[#f8b739]">
                                        <img 
                                            src={carouselImages[3]} 
                                            className="absolute block w-full h-full object-cover opacity-90"
                                            alt="Khmer Modern Fashion 4"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <h3 className="text-2xl font-bold mb-2">Premium Materials</h3>
                                            <p className="text-gray-200">Finest Cambodian silk</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Item 5 */}
                                <div className="duration-700 ease-in-out" data-carousel-item>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d6e] to-[#ffd166]">
                                        <img 
                                            src={carouselImages[4]} 
                                            className="absolute block w-full h-full object-cover opacity-90"
                                            alt="Khmer Modern Fashion 5"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 text-white">
                                            <h3 className="text-2xl font-bold mb-2">Modern Heritage</h3>
                                            <p className="text-gray-200">Celebrating Khmer culture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Slider indicators - Khmer Modern Style */}
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-6 left-1/2 space-x-3">
                                {carouselImages.map((_, index) => (
                                    <button 
                                        key={index}
                                        type="button" 
                                        className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"
                                        aria-current={index === 0}
                                        aria-label={`Slide ${index + 1}`}
                                        data-carousel-slide-to={index}
                                    ></button>
                                ))}
                            </div>
                            
                            {/* Slider controls - Khmer Modern Style */}
                            <button 
                                type="button" 
                                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-prev
                            >
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 group-hover:scale-110 transition-all duration-300 group-focus:ring-2 group-focus:ring-white/50 group-focus:outline-none">
                                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            
                            <button 
                                type="button" 
                                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-next
                            >
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 group-hover:scale-110 transition-all duration-300 group-focus:ring-2 group-focus:ring-white/50 group-focus:outline-none">
                                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>

                        {/* Carousel Info */}
                        <div className="mt-8 flex justify-between items-center">
                            <div className="text-sm text-gray-600">
                                <span className="text-[#0d2d4a] font-semibold">5</span> Premium Collections
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-sm text-gray-600">Explore our:</div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] cursor-pointer hover:scale-110 transition-transform"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f8b739] to-[#ffd166] cursor-pointer hover:scale-110 transition-transform"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1a4d6e] to-[#0d2d4a] cursor-pointer hover:scale-110 transition-transform"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Luxury Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-[#0d2d4a] mb-3 tracking-widest uppercase">Explore More</span>
                        <div className="w-px h-16 bg-gradient-to-b from-[#f8b739] via-[#1a4d6e] to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Floating Khmer Elements */}
            <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-[#a8d5e5]/20 to-[#f8b739]/10 rounded-full opacity-30 animate-float"></div>
            <div className="absolute bottom-32 left-32 w-36 h-36 bg-gradient-to-tr from-[#f8b739]/20 to-[#1a4d6e]/10 rounded-full opacity-30 animate-float delay-1000"></div>

            {/* Add carousel functionality */}
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </section>
    );
};

export default Herosection;