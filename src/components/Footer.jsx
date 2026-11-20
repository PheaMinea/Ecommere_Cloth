import { ArrowRight, Facebook, Instagram, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#111] text-white">
    <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-bold tracking-[0.28em]">AVENUE</h2>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">Contemporary fashion for every moment, designed with intention and made to move with you.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Music2].map((Icon, index) => <a key={index} href="#" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"><Icon size={16} /></a>)}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold">Shop</h3>
          <div className="space-y-3 text-sm text-white/60">
            <Link className="block hover:text-white" to="/men">Men</Link>
            <Link className="block hover:text-white" to="/women">Women</Link>
            <Link className="block hover:text-white" to="/kids">Kids</Link>
            <Link className="block hover:text-white" to="/shoes">Shoes</Link>
            <Link className="block hover:text-white" to="/sale">Sale</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold">Help</h3>
          <div className="space-y-3 text-sm text-white/60">
            <Link className="block hover:text-white" to="/contact">Contact Us</Link>
            <a className="block hover:text-white" href="#">Shipping & Delivery</a>
            <a className="block hover:text-white" href="#">Returns</a>
            <a className="block hover:text-white" href="#">Size Guide</a>
            <a className="block hover:text-white" href="#">Order Tracking</a>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold">The AVENUE Edit</h3>
          <p className="mb-4 text-sm text-white/60">New arrivals, exclusive offers and stories worth reading.</p>
          <form className="flex border-b border-white/50">
            <input type="email" required placeholder="Email address" className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
            <button aria-label="Subscribe"><ArrowRight size={18} /></button>
          </form>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© 2026 AVENUE. All rights reserved.</span>
        <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;
