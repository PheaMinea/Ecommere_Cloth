const BannerDiscount = () => {
    return (
        <section className="py-12 px-6 bg-gradient-to-r from-red-500 to-orange-500">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between text-white">
                    
                    {/* Left Content */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <div className="text-4xl md:text-5xl font-bold mb-2">
                            <span className="block">SUMMER SALE</span>
                            <span className="block text-5xl md:text-6xl mt-2">50% OFF</span>
                        </div>
                        <p className="text-lg opacity-90">On selected items</p>
                    </div>

                    {/* Right Content */}
                    <div className="text-center">
                        <div className="bg-white text-red-600 px-8 py-4 rounded-lg shadow-lg">
                            <div className="text-2xl font-bold mb-1">Limited Time Offer</div>
                            <div className="flex gap-4 justify-center mb-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">02</div>
                                    <div className="text-sm">Days</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">12</div>
                                    <div className="text-sm">Hours</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">45</div>
                                    <div className="text-sm">Mins</div>
                                </div>
                            </div>
                            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerDiscount;