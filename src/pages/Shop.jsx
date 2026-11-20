import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import data from '../data';
import ProductCard from '../components/ProductCard';

const Shop = ({ initialCategory = '', initialCollection = '' }) => {
  const [params] = useSearchParams();
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const query = params.get('q')?.toLowerCase() || '';
  const collection = params.get('collection') || initialCollection;

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const products = useMemo(() => {
    let list = data.products.filter(product =>
      (!category || product.category === category) &&
      (!query || `${product.name} ${product.category}`.toLowerCase().includes(query))
    );
    if (collection === 'new') {
      list = list.filter(product => product.badge?.toLowerCase() === 'new');
    } else if (collection === 'sale') {
      list = list.filter(product => {
        const price = parseFloat(String(product.price).replace(/[^0-9.]/g, ''));
        const originalPrice = parseFloat(String(product.originalPrice || '').replace(/[^0-9.]/g, ''));
        return product.originalPrice && originalPrice > price;
      });
    } else if (collection === 'clothing') {
      list = list.filter(product => /wear|unisex|children|traditional/i.test(product.category));
    } else if (collection === 'bags') {
      list = list.filter(product => /bag/i.test(product.name) || product.category === 'Bags');
    }
    if (sort === 'price-low') list = [...list].sort((a,b) => parseFloat(a.price.replace('$','')) - parseFloat(b.price.replace('$','')));
    if (sort === 'price-high') list = [...list].sort((a,b) => parseFloat(b.price.replace('$','')) - parseFloat(a.price.replace('$','')));
    if (sort === 'popular') list = [...list].sort((a,b) => b.rating - a.rating);
    return list;
  }, [category, collection, sort, query]);

  const collectionTitles = {
    new: 'New arrivals',
    sale: 'Sale',
    clothing: 'Clothing',
    bags: 'Bags',
  };

  const categories = [...new Set(data.products.map(product => product.category))];
  const FilterPanel = () => (
    <div>
      <div className="mb-8 flex items-center justify-between lg:hidden"><span className="font-bold">Filters</span><button onClick={() => setFiltersOpen(false)}><X size={20} /></button></div>
      <div className="border-b border-[#e5e5e5] pb-6">
        <h3 className="mb-4 text-sm font-bold">Category</h3>
        <div className="space-y-3">
          <button onClick={() => setCategory('')} className={`block text-sm ${!category ? 'font-bold' : 'text-[#777]'}`}>All</button>
          {categories.map(name => <button key={name} onClick={() => setCategory(name)} className={`block text-sm ${category === name ? 'font-bold' : 'text-[#777]'}`}>{name}</button>)}
        </div>
      </div>
      {['Size','Color','Brand','Price'].map(title => (
        <div key={title} className="border-b border-[#e5e5e5] py-6">
          <button className="flex w-full items-center justify-between text-sm font-bold">{title}<ChevronDown size={16} /></button>
          {title === 'Size' && <div className="mt-4 grid grid-cols-4 gap-2">{['XS','S','M','L','XL','XXL'].map(size => <button key={size} className="h-9 border border-[#ddd] text-xs hover:border-[#111]">{size}</button>)}</div>}
          {title === 'Color' && <div className="mt-4 flex gap-3">{['#111','#fff','#777','#b98b73','#e4c9a2'].map(color => <button key={color} className="h-7 w-7 rounded-full border border-[#ddd]" style={{background: color}} />)}</div>}
        </div>
      ))}
    </div>
  );

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 lg:px-10">
      <div className="mb-8"><p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#777]">Collection</p><h1 className="text-4xl font-semibold">{query ? `Search: ${query}` : category || collectionTitles[collection] || 'Shop all'}</h1></div>
      <div className="mb-6 flex items-center justify-between border-y border-[#e5e5e5] py-3">
        <button onClick={() => setFiltersOpen(true)} className="flex items-center gap-2 text-sm font-bold lg:hidden"><SlidersHorizontal size={17} /> Filters</button>
        <span className="text-sm text-[#777]">{products.length} items</span>
        <select value={sort} onChange={event => setSort(event.target.value)} className="border-0 bg-white text-sm font-bold outline-none">
          <option value="newest">Newest</option><option value="popular">Most popular</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option>
        </select>
      </div>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block"><FilterPanel /></aside>
        {filtersOpen && <div className="fixed inset-0 z-[70] bg-black/30 lg:hidden"><div className="h-full w-[88%] max-w-sm overflow-y-auto bg-white p-5"><FilterPanel /></div></div>}
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
          {products.map(product => <ProductCard key={product.id} product={product} showRating />)}
        </div>
      </div>
    </main>
  );
};

export default Shop;
