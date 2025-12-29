import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Service from './components/Service';
import FeatureProduct from './components/FeatureProduct';
import BannerDiscount from './components/BannerDiscount';
import Testimonia from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './components/ShopContext';
import Menswear from './components/Menswear';
import Womenswear from './components/Womenswear';
import Children from './components/Children';
import Footwear from './components/Footwear';
import Accessories from './components/Accessories';
import Shop from './components/Shop';


function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Herosection />
                                <FeatureProduct />
                                <BannerDiscount />
                                <Testimonia />
                                 <Service/>
                            </>
                        } />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/menswear" element={<Menswear/>}/>
                        <Route path="/womenswear" element={<Womenswear/>}/>
                        <Route path="/children" element={<Children/>}/>
                        <Route path="/footwear" element={<Footwear/>}/>
                        <Route path="/accessories" element={<Accessories/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                       
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;