import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import MenuCollection from './pages/MenuCollection';
import NotFound from './pages/NotFound';
import { CartProvider } from './components/ShopContext';


function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/login" element={<Auth mode="login" />} />
                        <Route path="/register" element={<Auth mode="register" />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/menswear" element={<Shop initialCategory="Men's Wear" />} />
                        <Route path="/womenswear" element={<Shop initialCategory="Women's Wear" />} />
                        <Route path="/children" element={<Shop initialCategory="Children" />} />
                        <Route path="/footwear" element={<Shop initialCategory="Footwear" />} />
                        <Route path="/accessories" element={<Shop initialCategory="Accessories" />} />
                        <Route path="/search" element={<Shop />} />
                        <Route path="/men" element={<Shop initialCategory="Men's Wear" />} />
                        <Route path="/women" element={<Shop initialCategory="Women's Wear" />} />
                        <Route path="/kids" element={<Shop initialCategory="Children" />} />
                        <Route path="/new-arrivals" element={<Shop initialCollection="new" />} />
                        <Route path="/clothing" element={<Shop initialCollection="clothing" />} />
                        <Route path="/shoes" element={<Shop initialCategory="Footwear" />} />
                        <Route path="/bags" element={<Shop initialCollection="bags" />} />
                        <Route path="/sale" element={<Shop initialCollection="sale" />} />
                        <Route path="/brands" element={<MenuCollection type="brands" />} />
                        <Route path="/beauty" element={<MenuCollection type="beauty" />} />
                        <Route path="/lifestyle" element={<MenuCollection type="lifestyle" />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;