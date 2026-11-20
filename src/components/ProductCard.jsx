import { Heart, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './ShopContext';

const ProductCard = ({ product, showRating = false }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const price = parseFloat(String(product.price).replace(/[^0-9.]/g, ''));
  const original = product.originalPrice ? parseFloat(String(product.originalPrice).replace(/[^0-9.]/g, '')) : null;

  return (
    <article className="product-card group min-w-0">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f3f3]">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
          {product.badge && (
            <span className="absolute left-3 top-3 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">
              {product.badge}
            </span>
          )}
          <button
            type="button"
            aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={(event) => { event.preventDefault(); toggleWishlist(product); }}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white opacity-100 shadow-sm md:translate-y-[-8px] md:opacity-0 md:transition md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <Heart size={17} fill={isInWishlist(product.id) ? '#111111' : 'none'} />
          </button>
          <button
            type="button"
            onClick={(event) => { event.preventDefault(); addToCart(product); }}
            className="absolute bottom-3 left-3 right-3 flex h-11 items-center justify-center gap-2 bg-white text-sm font-bold opacity-100 md:translate-y-3 md:opacity-0 md:transition md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <Plus size={16} /> Quick add
          </button>
        </div>
      </Link>
      <div className="pt-3">
        <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-[#777]">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block text-[15px] font-medium leading-snug hover:underline">
          {product.name}
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className={`text-sm font-bold ${original ? 'text-[#e53935]' : ''}`}>${price.toFixed(2)}</span>
          {original && <span className="text-sm text-[#999] line-through">${original.toFixed(2)}</span>}
          {showRating && (
            <span className="ml-auto flex items-center gap-1 text-xs text-[#777]">
              <Star size={12} fill="#111" /> {product.rating}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
