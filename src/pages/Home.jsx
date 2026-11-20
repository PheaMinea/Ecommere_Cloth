import { ArrowRight, RotateCcw, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../data';
import ProductCard from '../components/ProductCard';

const categories = [
  ['Women', '/womenswear', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85'],
  ['Men', '/menswear', 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85'],
  ['Kids', '/children', 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85'],
  ['Shoes', '/footwear', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85'],
];

const Home = () => {
  const products = data.products;
  return (
    <main>
      <section className="w-full overflow-hidden bg-white">
        <Link to="/shop" className="block" aria-label="Shop the new collection">
          <img
            src="/images/zando-home-banner.png"
            alt="Fashion campaign featuring the new collection and shopping benefits"
            className="block h-auto w-full"
          />
        </Link>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-10 lg:py-24">
        <div className="mb-8 flex items-end justify-between">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#777]">Discover</p><h2 className="text-3xl font-semibold md:text-4xl">Shop by category</h2></div>
          <Link to="/shop" className="hidden items-center gap-2 border-b border-[#111] pb-1 text-sm font-bold md:flex">View all <ArrowRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {categories.map(([name, path, image]) => (
            <Link key={name} to={path} className="category-card group relative aspect-[3/4] overflow-hidden bg-[#eee]">
              <img src={image} alt={name} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 text-white">
                <span className="text-lg font-bold">{name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-10 lg:py-20">
          <div className="mb-8 flex items-end justify-between"><h2 className="text-3xl font-semibold md:text-4xl">New arrivals</h2><Link to="/new-arrivals" className="border-b border-[#111] pb-1 text-sm font-bold">Shop new</Link></div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
            {products.slice(0, 8).map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-10 lg:py-24">
        <div className="grid overflow-hidden bg-[#111] md:grid-cols-2">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Seasonal fashion campaign" className="h-[420px] w-full object-cover md:h-[560px]" />
          <div className="flex items-center px-8 py-14 text-white md:px-16">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Limited time</p><h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">The mid-season edit</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/65">Fresh silhouettes and everyday staples, now up to 40% off.</p><Link to="/sale" className="mt-8 inline-flex h-12 items-center gap-8 bg-white px-6 text-sm font-bold text-[#111]">Shop sale <ArrowRight size={17} /></Link></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-8 lg:px-10 lg:pb-24">
        <div className="mb-8 flex items-end justify-between"><h2 className="text-3xl font-semibold md:text-4xl">Trending now</h2><Link to="/shop" className="border-b border-[#111] pb-1 text-sm font-bold">Explore</Link></div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
          {products.slice(8, 16).map(product => <ProductCard key={product.id} product={product} showRating />)}
        </div>
      </section>

      <section className="border-y border-[#e5e5e5]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#e5e5e5] px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8 lg:px-10">
          {[['Free shipping', 'On orders over $150', Truck], ['Easy returns', '30-day return window', RotateCcw], ['Secure shopping', 'Protected checkout', ShieldCheck]].map(([title, text, Icon]) => (
            <div key={title} className="flex items-center gap-4 py-7 md:justify-center"><Icon size={22} strokeWidth={1.5} /><div><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-[#777]">{text}</p></div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:px-10 lg:py-20">
        <div className="mb-8 text-center"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#777]">@avenue.style</p><h2 className="text-3xl font-semibold">Follow the everyday edit</h2></div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {['photo-1523381210434-271e8be1f52b','photo-1539109136881-3be0616acf4b','photo-1551028719-00167b16eac5','photo-1551488831-00ddcb6c6bd3','photo-1490481651871-ab68de25d43d','photo-1525507119028-ed4c629a60a3'].map(id => (
            <div key={id} className="aspect-square overflow-hidden bg-[#eee]"><img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`} alt="Avenue community style" className="h-full w-full object-cover" /></div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
