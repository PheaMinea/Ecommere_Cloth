import { Box, Heart, LogOut, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => (
  <main className="mx-auto max-w-[1200px] px-5 py-12 md:px-8">
    <h1 className="text-4xl font-semibold">My account</h1>
    <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr]">
      <aside className="h-fit border border-[#e5e5e5] p-3">
        {[['Profile', User], ['Orders', Box], ['Wishlist', Heart], ['Addresses', MapPin], ['Sign out', LogOut]].map(([label, Icon]) =>
          <button key={label} className="flex w-full items-center gap-3 px-3 py-3 text-left text-sm hover:bg-[#f7f7f7]"><Icon size={17} />{label}</button>
        )}
      </aside>
      <section className="border border-[#e5e5e5] p-6 md:p-8">
        <h2 className="text-xl font-bold">Personal details</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input defaultValue="Avery Stone" placeholder="Full name" className="h-12 border border-[#ddd] px-4" />
          <input defaultValue="avery@example.com" placeholder="Email" className="h-12 border border-[#ddd] px-4" />
          <input placeholder="Phone number" className="h-12 border border-[#ddd] px-4" />
          <input type="date" className="h-12 border border-[#ddd] px-4" />
        </div>
        <button className="mt-6 h-12 bg-[#111] px-7 text-sm font-bold text-white">Save changes</button>
        <h2 className="mt-12 text-xl font-bold">Recent orders</h2>
        <div className="mt-4 border border-[#e5e5e5] p-5">
          <div className="flex items-center justify-between text-sm"><span className="font-bold">#AV1048</span><span className="text-[#777]">Processing</span></div>
          <p className="mt-3 text-sm text-[#777]">2 items · $218.00</p>
          <Link to="/shop" className="mt-4 inline-block border-b border-[#111] pb-1 text-sm font-bold">View order</Link>
        </div>
      </section>
    </div>
  </main>
);
export default Profile;
