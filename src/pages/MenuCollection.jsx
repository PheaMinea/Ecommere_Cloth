import { Link } from 'react-router-dom';
import data from '../data';
import ProductCard from '../components/ProductCard';

const collectionContent = {
  brands: {
    eyebrow: 'Discover',
    title: 'Shop by brand',
    description: 'Our brand directory will appear here as soon as brand details are added to the product catalog.',
    action: 'Browse all products',
    to: '/shop',
  },
  beauty: {
    eyebrow: 'Beauty',
    title: 'Beauty collection',
    description: 'Beauty products are not in the current catalog yet. Explore our available accessories in the meantime.',
    action: 'Shop accessories',
    to: '/accessories',
  },
  lifestyle: {
    eyebrow: 'The everyday edit',
    title: 'Lifestyle',
    description: 'Relaxed essentials and considered pieces selected from our current collection.',
    products: data.products.filter(product =>
      ['Unisex', 'Traditional', 'Accessories'].includes(product.category)
    ),
  },
};

const MenuCollection = ({ type }) => {
  const content = collectionContent[type];

  if (!content) {
    return (
      <main className="mx-auto flex min-h-[420px] max-w-[900px] flex-col items-center justify-center px-5 py-16 text-center">
        <h1 className="text-3xl font-semibold">Collection not found</h1>
        <Link to="/shop" className="mt-6 inline-flex h-12 items-center bg-[#111] px-7 text-sm font-bold text-white">Shop all</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-[520px] max-w-[1440px] px-5 py-12 md:px-8 lg:px-10 lg:py-16">
      <header className="mb-9">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#777]">{content.eyebrow}</p>
        <h1 className="text-4xl font-semibold">{content.title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#777]">{content.description}</p>
      </header>

      {content.products ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
          {content.products.map(product => <ProductCard key={product.id} product={product} showRating />)}
        </div>
      ) : (
        <section className="border-t border-[#e5e5e5] py-12">
          <p className="text-sm text-[#777]">No matching catalog data is available yet.</p>
          <Link to={content.to} className="mt-6 inline-flex h-12 items-center bg-[#111] px-7 text-sm font-bold text-white">{content.action}</Link>
        </section>
      )}
    </main>
  );
};

export default MenuCollection;
