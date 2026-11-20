import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/ShopContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlistItems } = useCart();
  return (
    <main className="mx-auto min-h-[560px] max-w-[1440px] px-5 py-12 md:px-8 lg:px-10">
      <h1 className="text-4xl font-semibold">Wishlist</h1>
      {wishlistItems.length ? (
        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
          {wishlistItems.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <Heart className="mx-auto text-[#bbb]" size={42} strokeWidth={1} />
          <h2 className="mt-5 text-xl font-bold">Your wishlist is empty</h2>
          <p className="mt-2 text-sm text-[#777]">Save your favourite pieces to find them here.</p>
          <Link to="/shop" className="mt-7 inline-flex h-12 items-center bg-[#111] px-7 text-sm font-bold text-white">Discover products</Link>
        </div>
      )}
    </main>
  );
};
export default Wishlist;
