import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => (
  <main className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
    <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#777]">Customer care</p>
        <h1 className="mt-3 text-4xl font-semibold">How can we help?</h1>
        <div className="mt-8 space-y-5 text-sm"><p className="flex items-center gap-3"><Phone size={18} /> +855 23 888 100</p><p className="flex items-center gap-3"><Mail size={18} /> care@avenue.style</p><p className="flex items-center gap-3"><MapPin size={18} /> Phnom Penh, Cambodia</p></div>
      </div>
      <form className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="First name" className="h-12 border border-[#ddd] px-4" />
        <input required placeholder="Last name" className="h-12 border border-[#ddd] px-4" />
        <input required type="email" placeholder="Email address" className="h-12 border border-[#ddd] px-4 sm:col-span-2" />
        <input placeholder="Order number" className="h-12 border border-[#ddd] px-4 sm:col-span-2" />
        <textarea required placeholder="How can we help?" rows="6" className="border border-[#ddd] px-4 py-3 sm:col-span-2" />
        <button className="h-12 bg-[#111] text-sm font-bold text-white sm:w-44">Send message</button>
      </form>
    </div>
  </main>
);
export default Contact;
