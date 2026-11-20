import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useCart } from './ShopContext';

const regions = [
  { name: 'Cambodia', flag: '🇰🇭' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Vietnam', flag: '🇻🇳' },
  { name: 'United States', flag: '🇺🇸' },
];

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'Beauty', to: '/beauty', beauty: true },
  { label: 'Kids', to: '/kids' },
  { label: 'LIFESTYLE', to: '/lifestyle' },
];

const categoryLinks = [
  { label: 'Shop By Brand', to: '/brands', dropdown: true, options: [{ label: 'Browse brand directory', to: '/brands' }] },
  { label: 'មើលទំនិញថ្មី', to: '/new-arrivals', dropdown: true, options: [{ label: 'Shop new arrivals', to: '/new-arrivals' }] },
  {
    label: 'សម្លៀកបំពាក់',
    to: '/clothing',
    dropdown: true,
    options: [
      { label: "Men's clothing", to: '/men' },
      { label: "Women's clothing", to: '/women' },
      { label: "Kids' clothing", to: '/kids' },
      { label: 'All clothing', to: '/clothing' },
    ],
  },
  { label: 'ស្បែកជើង', to: '/shoes', dropdown: true, options: [{ label: 'Shop all shoes', to: '/shoes' }] },
  { label: 'កាបូប', to: '/bags', dropdown: true, options: [{ label: 'Shop bags', to: '/bags' }] },
  { label: 'គ្រឿងបន្លាស់', to: '/accessories', dropdown: true, options: [{ label: 'Shop accessories', to: '/accessories' }] },
  { label: 'Sale', to: '/sale', sale: true, dropdown: true, options: [{ label: 'Shop sale', to: '/sale' }] },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [query, setQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [searchOpen, setSearchOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setNotificationsOpen(false);
        setRegionOpen(false);
      }
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header ref={navbarRef} className="sticky top-0 z-50 w-full bg-white text-[#111]" style={{ fontFamily: "'Battambang', 'Inter', sans-serif" }}>
      <div className="relative h-[62px] border-b border-[#e5e5e5]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-5 xl:px-10">
          <nav className="hidden h-full items-center gap-5 lg:flex">
            {mainLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="whitespace-nowrap text-[16px] font-medium leading-none text-[#111] transition-opacity hover:opacity-60"
                style={item.beauty ? { color: '#FF4F87' } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={1.8} />
          </button>

          <Link
            to="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[25px] font-extrabold tracking-[0.16em] text-black"
            aria-label="Home"
          >
            ZANDO
          </Link>

          <div className="ml-auto hidden h-full items-center gap-4 md:flex">
            <div className="relative hidden h-full items-center lg:flex">
              <button
                type="button"
                onClick={() => setRegionOpen((value) => !value)}
                className="flex h-10 items-center"
                aria-label={`Select region, current region ${selectedRegion.name}`}
                aria-expanded={regionOpen}
              >
                <span className="text-[22px] leading-none" role="img" aria-label={selectedRegion.name}>{selectedRegion.flag}</span>
              </button>
              {regionOpen && (
                <div className="absolute right-0 top-[56px] z-10 w-[190px] border border-[#e5e5e5] bg-white py-2">
                  {regions.map((region) => (
                    <button
                      key={region.name}
                      type="button"
                      onClick={() => { setSelectedRegion(region); setRegionOpen(false); }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-[14px] hover:bg-[#f7f7f7] ${selectedRegion.name === region.name ? 'font-bold' : 'text-[#444]'}`}
                    >
                      <span role="img" aria-label={region.name}>{region.flag}</span>
                      {region.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={submitSearch} className="hidden h-[46px] w-[278px] items-center rounded-lg border border-[#e5e5e5] bg-white px-3 lg:flex">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ស្វែងរក..."
                className="h-full min-w-0 flex-1 bg-transparent text-[16px] text-[#111] outline-none placeholder:text-[#777]"
                aria-label="Search products"
              />
              <button type="submit" className="ml-2 flex h-9 w-7 items-center justify-end" aria-label="Submit search">
                <Search size={21} strokeWidth={1.7} />
              </button>
            </form>

            <button type="button" onClick={() => setSearchOpen(true)} className="hidden h-10 w-8 items-center justify-center md:flex lg:hidden" aria-label="Search">
              <Search size={21} strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="hidden h-10 w-8 items-center justify-center lg:flex"
              aria-label="Account"
            >
              <User size={22} strokeWidth={1.6} />
            </button>

            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setNotificationsOpen((value) => !value)}
                className="flex h-10 w-8 items-center justify-center"
                aria-label="Notifications"
              >
                <Bell size={22} strokeWidth={1.6} />
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 top-[48px] w-[280px] rounded-lg border border-[#e5e5e5] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <p className="text-[15px] font-bold">Notifications</p>
                  <p className="mt-2 text-[14px] text-[#777]">No new notifications</p>
                </div>
              )}
            </div>

            <Link to="/cart" className="relative flex h-10 w-8 items-center justify-center" aria-label="Shopping bag">
              <ShoppingBag size={22} strokeWidth={1.6} />
              {cartCount > 0 && (
                <span className="absolute right-[-2px] top-[-1px] flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#111] px-1 text-[10px] leading-none text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <button type="button" className="flex h-10 w-9 items-center justify-center" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={21} strokeWidth={1.7} />
            </button>
            <Link to="/cart" className="relative flex h-10 w-9 items-center justify-center" aria-label="Shopping bag">
              <ShoppingBag size={21} strokeWidth={1.7} />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#111] px-1 text-[10px] leading-none text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <nav className="hidden h-[55px] border-b border-[#e5e5e5] bg-white lg:block">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-start gap-9 px-10">
          {categoryLinks.map((item) => (
            <div key={item.label} className="relative flex h-full items-center">
              <Link
                to={item.to}
                className="flex h-full items-center whitespace-nowrap text-[16px] font-medium text-[#444] transition-opacity hover:opacity-60"
                style={item.sale ? { color: '#EF4444' } : undefined}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  aria-label={`Toggle ${item.label} submenu`}
                  aria-expanded={openDropdown === item.label}
                  className="flex h-full items-center pl-1.5 text-[#444]"
                >
                  <ChevronDown size={15} strokeWidth={1.6} />
                </button>
              )}
              {openDropdown === item.label && (
                <div className="absolute left-0 top-[55px] z-10 w-[210px] border border-[#e5e5e5] bg-white py-2">
                  {item.options.map((option) => (
                    <Link
                      key={option.label}
                      to={option.to}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2.5 text-[14px] text-[#444] hover:bg-[#f7f7f7]"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button className="absolute inset-0 bg-black/25" onClick={() => setMobileOpen(false)} aria-label="Close menu" />
          <div className="relative h-full w-[84%] max-w-[360px] overflow-y-auto bg-white">
            <div className="flex h-[62px] items-center justify-between border-b border-[#e5e5e5] px-5">
              <span className="text-xl font-extrabold tracking-[0.16em]">ZANDO</span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={22} /></button>
            </div>
            <nav className="px-5 py-3">
              {mainLinks.map((item) => (
                <Link key={item.label} to={item.to} onClick={() => setMobileOpen(false)} className="flex h-[48px] items-center border-b border-[#f0f0f0] text-[16px]" style={item.beauty ? { color: '#FF4F87' } : undefined}>
                  {item.label}
                </Link>
              ))}
              {categoryLinks.map((item) => (
                <div key={item.label} className="border-b border-[#f0f0f0]">
                  <div className="flex min-h-[48px] items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex min-h-[48px] flex-1 items-center text-[15px] text-[#444]"
                      style={item.sale ? { color: '#EF4444' } : undefined}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        type="button"
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={mobileDropdown === item.label}
                        className="flex h-12 w-10 items-center justify-center"
                      >
                        <ChevronDown size={15} />
                      </button>
                    )}
                  </div>
                  {mobileDropdown === item.label && (
                    <div className="pb-2 pl-3">
                      {item.options.map(option => (
                        <Link
                          key={option.label}
                          to={option.to}
                          onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                          className="flex min-h-10 items-center text-sm text-[#666]"
                        >
                          {option.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[80] bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Search products">
          <div className="mx-auto max-w-3xl px-5 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">Search</span>
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={22} /></button>
            </div>
            <form onSubmit={submitSearch} className="mt-12 flex h-14 border-b-2 border-[#111]">
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ស្វែងរក..."
                aria-label="Search products"
                className="h-full min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-[#777]"
              />
              <button type="submit" aria-label="Submit search"><Search size={21} /></button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
