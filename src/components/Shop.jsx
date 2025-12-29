import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/ShopContext';
import data from "../data";

const Shop = () => {
    const { products: initialProducts } = data;
    const { addToCart } = useCart();
    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const mobileFilterRef = useRef(null);

    // Enhanced filters
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        sortBy: 'featured',
        minPrice: '',
        maxPrice: ''
    });
    
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    
    const khmerPattern = "កខគឃង";

    // Categories for filtering
    const categories = [
        { id: 'all', name: 'ទាំងអស់', khmer: 'ទាំងអស់', count: initialProducts.length, icon: '📦' },
        { id: 'men', name: 'Men', khmer: 'បុរស', count: initialProducts.filter(p => p.category === 'Men').length, icon: '👨' },
        { id: 'women', name: 'Women', khmer: 'ស្ត្រី', count: initialProducts.filter(p => p.category === 'Women').length, icon: '👩' },
        { id: 'kids', name: 'Kids', khmer: 'កុមារ', count: initialProducts.filter(p => p.category === 'Kids').length, icon: '👶' },
        { id: 'accessories', name: 'Accessories', khmer: 'គ្រឿងតុបតែង', count: initialProducts.filter(p => p.category === 'Accessories').length, icon: '💎' }
    ];

    // Price ranges
    const priceRanges = [
        { id: 'all', name: 'All Prices', khmer: 'គ្រប់តម្លៃ' },
        { id: 'under50', name: 'Under $50', khmer: 'ក្រោម ៥០$' },
        { id: '50to100', name: '$50 - $100', khmer: '៥០$ ដល់ ១០០$' },
        { id: '100to200', name: '$100 - $200', khmer: '១០០$ ដល់ ២០០$' },
        { id: 'over200', name: 'Over $200', khmer: 'លើសពី ២០០$' },
        { id: 'custom', name: 'Custom Range', khmer: 'ជួសជុលតម្លៃ' }
    ];

    // Sort options
    const sortOptions = [
        { id: 'featured', name: 'Featured', khmer: 'លក្ខណៈពិសេស' },
        { id: 'newest', name: 'Newest', khmer: 'ថ្មីបំផុត' },
        { id: 'priceLow', name: 'Price: Low to High', khmer: 'តម្លៃ: ទាបទៅខ្ពស់' },
        { id: 'priceHigh', name: 'Price: High to Low', khmer: 'តម្លៃ: ខ្ពស់ទៅទាប' },
        { id: 'popular', name: 'Most Popular', khmer: 'ពេញនិយមបំផុត' },
        { id: 'rating', name: 'Highest Rated', khmer: 'ការវាយតម្លៃខ្ពស់បំផុត' }
    ];

    // Sizes
    const sizes = [
        { id: 'XS', name: 'XS' },
        { id: 'S', name: 'S' },
        { id: 'M', name: 'M' },
        { id: 'L', name: 'L' },
        { id: 'XL', name: 'XL' },
        { id: 'XXL', name: 'XXL' }
    ];

    // Colors
    const colors = [
        { name: 'Black', value: '#000000', khmer: 'ខ្មៅ' },
        { name: 'White', value: '#FFFFFF', khmer: 'ស', border: true },
        { name: 'Blue', value: '#0d2d4a', khmer: 'ខៀវ' },
        { name: 'Gold', value: '#f8b739', khmer: 'មាស' },
        { name: 'Silver', value: '#C0C0C0', khmer: 'ប្រាក់' },
        { name: 'Red', value: '#DC2626', khmer: 'ក្រហម' },
        { name: 'Green', value: '#10B981', khmer: 'បៃតង' },
        { name: 'Purple', value: '#8B5CF6', khmer: 'ស្វាយ' },
        { name: 'Pink', value: '#EC4899', khmer: 'ផ្កាឈូក' }
    ];

    // Materials
    const materials = [
        { id: 'silk', name: 'Silk', khmer: 'សូត្រ' },
        { id: 'cotton', name: 'Cotton', khmer: 'កប្បាស' },
        { id: 'wool', name: 'Wool', khmer: 'រោមចៀម' },
        { id: 'linen', name: 'Linen', khmer: 'រុំ្ក' },
        { id: 'synthetic', name: 'Synthetic', khmer: 'សំយោគ' }
    ];

    // Search functionality
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    };

    // Filter and sort products
    useEffect(() => {
        let filtered = [...initialProducts];

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery) ||
                product.description?.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery) ||
                product.tags?.some(tag => tag.toLowerCase().includes(searchQuery))
            );
        }

        // Category filter
        if (filters.category !== 'all') {
            filtered = filtered.filter(product => 
                product.category.toLowerCase() === filters.category
            );
        }

        // Price range filter
        if (filters.priceRange !== 'all') {
            filtered = filtered.filter(product => {
                const price = parseFloat(product.price.replace('$', ''));
                
                // Custom price range
                if (filters.priceRange === 'custom') {
                    const min = filters.minPrice ? parseFloat(filters.minPrice) : 0;
                    const max = filters.maxPrice ? parseFloat(filters.maxPrice) : Infinity;
                    return price >= min && price <= max;
                }
                
                // Predefined ranges
                switch(filters.priceRange) {
                    case 'under50': return price < 50;
                    case '50to100': return price >= 50 && price <= 100;
                    case '100to200': return price >= 100 && price <= 200;
                    case 'over200': return price > 200;
                    default: return true;
                }
            });
        }

        // Sort products
        filtered.sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            
            switch(filters.sortBy) {
                case 'newest':
                    return new Date(b.date || 0) - new Date(a.date || 0);
                case 'priceLow':
                    return priceA - priceB;
                case 'priceHigh':
                    return priceB - priceA;
                case 'popular':
                    return (b.sales || 0) - (a.sales || 0);
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                default:
                    return (b.featured || false) - (a.featured || false);
            }
        });

        setFilteredProducts(filtered);
    }, [filters, initialProducts, searchQuery]);

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Use default size and color
        const size = selectedSizes.length > 0 ? selectedSizes[0].id : 'M';
        const color = selectedColors.length > 0 ? selectedColors[0] : 'Black';
        
        addToCart(product, size, color, 1);
        
        // Show success message
        const event = new CustomEvent('cart:added', { 
            detail: { 
                product: product.name,
                quantity: 1 
            } 
        });
        window.dispatchEvent(event);
    };

    const toggleSize = (size) => {
        setSelectedSizes(prev => 
            prev.find(s => s.id === size.id)
                ? prev.filter(s => s.id !== size.id)
                : [...prev, size]
        );
    };

    const toggleColor = (colorName) => {
        setSelectedColors(prev => 
            prev.includes(colorName) 
                ? prev.filter(c => c !== colorName)
                : [...prev, colorName]
        );
    };

    const clearFilters = () => {
        setFilters({
            category: 'all',
            priceRange: 'all',
            sortBy: 'featured',
            minPrice: '',
            maxPrice: ''
        });
        setSelectedSizes([]);
        setSelectedColors([]);
        setSearchQuery('');
    };

    const formatPrice = (price) => {
        if (typeof price === 'string' && price.includes('$')) {
            const amount = price.replace('$', '');
            return `$${parseFloat(amount).toFixed(2)}`;
        }
        return price;
    };

    // Toggle mobile filter
    const toggleMobileFilter = () => {
        setIsMobileFilterOpen(!isMobileFilterOpen);
    };

    // Close mobile filter when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileFilterRef.current && !mobileFilterRef.current.contains(event.target)) {
                setIsMobileFilterOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-[#f8f5f0] to-white">
            {/* Hero Banner with Search */}
            <div className="relative bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#0d2d4a] py-16 md:py-24 overflow-hidden">
                {/* Khmer Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="flex justify-center items-center h-full">
                        <span className="text-6xl md:text-8xl font-khmer tracking-widest animate-pulse">
                            {khmerPattern}
                        </span>
                    </div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="font-khmer text-5xl md:text-6xl block mb-4">ហាងទំនើប</span>
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#f8b739] via-[#ffd166] to-[#f8b739]">
                                Premium Shop
                            </span>
                        </h1>
                        <p className="text-xl text-[#a8d5e5] mb-8 max-w-2xl mx-auto">
                            Discover exquisite Khmer-inspired fashion and accessories. Each piece tells a story of tradition and modernity.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="ស្វែងរកផលិតផល..."
                                    className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#f8b739] focus:border-transparent transition-all duration-300"
                                />
                                <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {searchQuery && (
                                <p className="text-white/80 mt-2 text-sm">
                                    រកឃើញ {filteredProducts.length} ផលិតផលសម្រាប់ "{searchQuery}"
                                </p>
                            )}
                        </div>
                        
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-2 h-2 bg-[#f8b739] rounded-full animate-pulse"></div>
                            <span className="text-[#f8b739] font-medium">{filteredProducts.length} Premium Products</span>
                            <div className="w-2 h-2 bg-[#f8b739] rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Shop Content */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={toggleMobileFilter}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white rounded-xl font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        បើកតម្រង ({Object.values(filters).filter(v => v !== 'all' && v !== '').length + selectedSizes.length + selectedColors.length})
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters - Desktop */}
                    <div className="hidden lg:block lg:w-1/4">
                        <FilterSidebar
                            filters={filters}
                            setFilters={setFilters}
                            categories={categories}
                            priceRanges={priceRanges}
                            sizes={sizes}
                            colors={colors}
                            materials={materials}
                            selectedSizes={selectedSizes}
                            selectedColors={selectedColors}
                            toggleSize={toggleSize}
                            toggleColor={toggleColor}
                            clearFilters={clearFilters}
                            filteredProducts={filteredProducts}
                        />
                    </div>

                    {/* Mobile Filter Overlay */}
                    {isMobileFilterOpen && (
                        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                            <div 
                                ref={mobileFilterRef}
                                className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto animate-slide-in"
                            >
                                <FilterSidebar
                                    filters={filters}
                                    setFilters={setFilters}
                                    categories={categories}
                                    priceRanges={priceRanges}
                                    sizes={sizes}
                                    colors={colors}
                                    materials={materials}
                                    selectedSizes={selectedSizes}
                                    selectedColors={selectedColors}
                                    toggleSize={toggleSize}
                                    toggleColor={toggleColor}
                                    clearFilters={clearFilters}
                                    filteredProducts={filteredProducts}
                                    onClose={() => setIsMobileFilterOpen(false)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Products Section */}
                    <div className="lg:w-3/4">
                        {/* Toolbar */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6 mb-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <p className="text-gray-600">
                                        បានរកឃើញ <span className="font-bold text-[#0d2d4a]">{filteredProducts.length}</span> ផលិតផល
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {searchQuery && `ស្វែងរក: "${searchQuery}" • `}
                                        តម្រងតាមប្រភេទ តម្លៃ និងការតម្រៀប
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <select 
                                            value={filters.sortBy}
                                            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                                            className="appearance-none bg-gray-50 border border-gray-300 text-gray-700 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0d2d4a] focus:border-transparent min-w-[200px]"
                                        >
                                            {sortOptions.map(option => (
                                                <option key={option.id} value={option.id}>
                                                    {option.name} | {option.khmer}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex items-center gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>
                                        </button>
                                        <button className="p-2 bg-gray-100 rounded-lg transition-colors">
                                            <svg className="w-5 h-5 text-[#0d2d4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map((product) => (
                                        <ProductCard 
                                            key={product.id}
                                            product={product}
                                            handleAddToCart={handleAddToCart}
                                            formatPrice={formatPrice}
                                        />
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-sm text-gray-600">
                                        បង្ហាញ 1-{Math.min(12, filteredProducts.length)} នៃ {filteredProducts.length} ផលិតផល
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                            មុន
                                        </button>
                                        <button className="px-4 py-2 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white rounded-lg">
                                            1
                                        </button>
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                            2
                                        </button>
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                            3
                                        </button>
                                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                            បន្ទាប់
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <NoResults clearFilters={clearFilters} searchQuery={searchQuery} />
                        )}
                    </div>
                </div>

                {/* Promotional Banner */}
                <div className="mt-12 bg-gradient-to-r from-[#f8b739] to-[#ffd166] rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="flex justify-center items-center h-full">
                            <span className="text-4xl font-khmer tracking-widest">សម្រនឹងថ្មី</span>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">ទិញច្រើន សន្សំច្រើន</h3>
                            <p className="text-white/90">ទិញច្រើនជាង $100 សម្រាប់ដឹកជញ្ជូនឥតគិតថ្លៃ</p>
                        </div>
                        <Link 
                            to="/sale" 
                            className="px-8 py-3 bg-white text-[#0d2d4a] font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                        >
                            មើលការបញ្ជាទិញឥឡូវនេះ
                        </Link>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <NewsletterSection khmerPattern={khmerPattern} />

            <style jsx>{`
                @keyframes slide-in {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

// Filter Sidebar Component
const FilterSidebar = ({
    filters, setFilters, categories, priceRanges, sizes, colors, materials,
    selectedSizes, selectedColors, toggleSize, toggleColor, clearFilters, 
    filteredProducts, onClose
}) => {
    const hasActiveFilters = filters.category !== 'all' || filters.priceRange !== 'all' || 
                           filters.minPrice || filters.maxPrice || selectedSizes.length > 0 || 
                           selectedColors.length > 0;

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6 sticky top-24 h-fit">
            {onClose && (
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-[#0d2d4a]">តម្រង</h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
            )}
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#0d2d4a] flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#f8b739]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    តម្រង
                </h3>
                <button 
                    onClick={clearFilters}
                    className="text-sm text-[#f8b739] hover:text-[#0d2d4a] transition-colors"
                >
                    សម្អាតទាំងអស់
                </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">ប្រភេទ</h4>
                <div className="space-y-2">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilters(prev => ({ ...prev, category: cat.id }))}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                                filters.category === cat.id 
                                    ? 'bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white' 
                                    : 'hover:bg-gray-50 text-gray-700'
                            }`}
                        >
                            <span className="flex items-center gap-3 font-medium">
                                <span>{cat.icon}</span>
                                {cat.khmer} ({cat.name})
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                                filters.category === cat.id 
                                    ? 'bg-white/20' 
                                    : 'bg-gray-100'
                            }`}>
                                {cat.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">ចំនួនទឹកប្រាក់</h4>
                <div className="space-y-2">
                    {priceRanges.map(range => (
                        <button
                            key={range.id}
                            onClick={() => setFilters(prev => ({ ...prev, priceRange: range.id, minPrice: '', maxPrice: '' }))}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                                filters.priceRange === range.id 
                                    ? 'bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white' 
                                    : 'hover:bg-gray-50 text-gray-700'
                            }`}
                        >
                            {range.khmer} ({range.name})
                        </button>
                    ))}
                    
                    {/* Custom Price Inputs */}
                    {filters.priceRange === 'custom' && (
                        <div className="mt-3 space-y-3 p-3 bg-gray-50 rounded-lg">
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">តម្លៃអប្បបរមា ($)</label>
                                <input
                                    type="number"
                                    value={filters.minPrice}
                                    onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                                    placeholder="0"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d2d4a] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-600 mb-1">តម្លៃអតិបរមា ($)</label>
                                <input
                                    type="number"
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                                    placeholder="1000"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d2d4a] focus:border-transparent"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">ទំហំ</h4>
                <div className="grid grid-cols-3 gap-2">
                    {sizes.map(size => (
                        <button
                            key={size.id}
                            onClick={() => toggleSize(size)}
                            className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                                selectedSizes.find(s => s.id === size.id)
                                    ? 'bg-gradient-to-r from-[#f8b739] to-[#ffd166] text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {size.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color Filter */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">ពណ៌</h4>
                <div className="grid grid-cols-4 gap-3">
                    {colors.map(color => (
                        <button
                            key={color.name}
                            onClick={() => toggleColor(color.name)}
                            className="group flex flex-col items-center"
                        >
                            <div 
                                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                                    selectedColors.includes(color.name) 
                                        ? 'border-[#f8b739] scale-110 ring-2 ring-[#f8b739]/30' 
                                        : color.border 
                                        ? 'border-gray-300 group-hover:border-gray-400'
                                        : 'border-transparent'
                                }`}
                                style={{ backgroundColor: color.value }}
                            />
                            <span className="text-xs mt-1 text-gray-600 truncate w-full text-center">
                                {color.khmer}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
                <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">តម្រងសកម្ម</h4>
                    <div className="flex flex-wrap gap-2">
                        {filters.category !== 'all' && (
                            <span className="px-3 py-1 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white text-xs rounded-full">
                                {categories.find(c => c.id === filters.category)?.khmer}
                            </span>
                        )}
                        {filters.priceRange !== 'all' && (
                            <span className="px-3 py-1 bg-gradient-to-r from-[#f8b739] to-[#ffd166] text-white text-xs rounded-full">
                                {priceRanges.find(p => p.id === filters.priceRange)?.khmer}
                            </span>
                        )}
                        {selectedSizes.map(size => (
                            <span key={size.id} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {size.name}
                            </span>
                        ))}
                        {selectedColors.map(color => (
                            <span key={color} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {colors.find(c => c.name === color)?.khmer}
                            </span>
                        ))}
                        {(filters.minPrice || filters.maxPrice) && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                ${filters.minPrice || 0} - ${filters.maxPrice || '∞'}
                            </span>
                        )}
                    </div>
                </div>
            )}
            
            {/* Results Count */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                    <span className="font-bold text-[#0d2d4a]">{filteredProducts.length}</span> ផលិតផលដែលត្រូវគ្នា
                </p>
            </div>
        </div>
    );
};

// Product Card Component
const ProductCard = ({ product, handleAddToCart, formatPrice }) => (
    <div className="group relative">
        <Link to={`/product/${product.id}`} className="block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100/50 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Badge */}
                    {product.badge && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                            {product.badge}
                        </div>
                    )}
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={(e) => handleAddToCart(product, e)}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                            aria-label="Add to cart"
                        >
                            <svg className="w-4 h-4 text-[#0d2d4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 font-medium uppercase">
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
                            <span className="text-xs text-gray-500">({product.rating || 0})</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#0d2d4a] mb-2 line-clamp-2 flex-grow">
                        {product.name}
                    </h3>

                    <div className="mt-auto">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-[#0d2d4a]">
                                        {formatPrice(product.price)}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    រួមទាំងពន្ធ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

// No Results Component
const NoResults = ({ clearFilters, searchQuery }) => (
    <div className="text-center py-20">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {searchQuery ? 'គ្មានលទ្ធផល' : 'គ្មានផលិតផល'}
        </h3>
        <p className="text-gray-600 mb-6">
            {searchQuery 
                ? `យើងមិនអាចរកផលិតផលណាមួយសម្រាប់ "${searchQuery}" ទេ។`
                : 'សូមសាកល្បងតម្រងផ្សេង ឬសម្អាតតម្រងទាំងអស់'
            }
        </p>
        <button 
            onClick={clearFilters}
            className="px-8 py-3 bg-gradient-to-r from-[#0d2d4a] to-[#1a4d6e] text-white rounded-full font-medium hover:from-[#1a4d6e] hover:to-[#0d2d4a] transition-all duration-300"
        >
            {searchQuery ? 'មើលផលិតផលទាំងអស់' : 'សម្អាតតម្រងទាំងអស់'}
        </button>
    </div>
);

// Newsletter Section Component
const NewsletterSection = ({ khmerPattern }) => (
    <div className="mt-20 bg-gradient-to-r from-[#0d2d4a] via-[#1a4d6e] to-[#0d2d4a] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="flex justify-center items-center h-full">
                <span className="text-4xl font-khmer tracking-widest">{khmerPattern}</span>
            </div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ចូលរួមជាមួយយើង
            </h3>
            <p className="text-[#a8d5e5] mb-8">
                ជាវដើម្បីទទួលបានព័ត៌មានថ្មីៗ ការបញ្ជាទិញពិសេស និងការផ្តល់អនុសាសន៍ពីម្ចាស់ហាងផ្ទាល់។
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="អាសយដ្ឋានអ៊ីមែលរបស់អ្នក"
                    className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f8b739] focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-[#f8b739] to-[#ffd166] text-[#0d2d4a] font-semibold rounded-full hover:from-[#ffd166] hover:to-[#f8b739] transition-all duration-300 transform hover:scale-105">
                    ជាវឥឡូវនេះ
                </button>
            </div>
            <p className="text-sm text-white/70 mt-4">
                ការកំណត់យោបល់ត្រូវបានគោរព។ ស្វែងរកគោលការណ៍ឯកជនភាពរបស់យើង។
            </p>
        </div>
    </div>
);

export default Shop;