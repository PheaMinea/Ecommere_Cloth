import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard } from 'lucide-react';
import { useCart } from '../components/ShopContext';

const Checkout = () => {
  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);
  const { cartItems, getCartSummary, clearCart } = useCart();
  const summary = getCartSummary();

  const submit = event => {
    event.preventDefault();
    setComplete(true);
    clearCart();
  };

  if (complete) return (
    <main className="mx-auto min-h-[520px] max-w-xl px-5 py-24 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-white"><Check size={28} /></div>
      <h1 className="mt-6 text-4xl font-semibold">Order confirmed</h1>
      <p className="mt-4 text-[#777]">Thank you. Your confirmation and tracking details will be sent to your email.</p>
      <button onClick={() => navigate('/shop')} className="mt-8 h-12 bg-[#111] px-8 text-sm font-bold text-white">Continue shopping</button>
    </main>
  );

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 lg:py-16">
      <h1 className="mb-10 text-4xl font-semibold">Checkout</h1>
      <form onSubmit={submit} className="grid gap-10 lg:grid-cols-[1fr_390px]">
        <div className="space-y-10">
          <section><h2 className="mb-5 text-lg font-bold">Contact</h2><input required type="email" placeholder="Email address" className="h-12 w-full border border-[#ddd] px-4 outline-none focus:border-[#111]" /></section>
          <section>
            <h2 className="mb-5 text-lg font-bold">Delivery address</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="First name" className="h-12 border border-[#ddd] px-4 outline-none" />
              <input required placeholder="Last name" className="h-12 border border-[#ddd] px-4 outline-none" />
              <input required placeholder="Street address" className="h-12 border border-[#ddd] px-4 outline-none sm:col-span-2" />
              <input required placeholder="City" className="h-12 border border-[#ddd] px-4 outline-none" />
              <input required placeholder="Postal code" className="h-12 border border-[#ddd] px-4 outline-none" />
              <input required placeholder="Phone number" className="h-12 border border-[#ddd] px-4 outline-none sm:col-span-2" />
            </div>
          </section>
          <section><h2 className="mb-5 text-lg font-bold">Payment</h2><label className="flex h-14 items-center gap-3 border border-[#111] px-4"><input type="radio" name="payment" defaultChecked /><CreditCard size={19} /><span className="text-sm font-bold">Credit or debit card</span></label></section>
        </div>
        <aside className="h-fit bg-[#f7f7f7] p-6">
          <h2 className="mb-5 text-lg font-bold">Order summary</h2>
          <div className="space-y-4">
            {cartItems.map(item => <div key={item.id} className="flex gap-3"><img src={item.image} alt="" className="h-20 w-16 object-cover" /><div className="flex-1 text-sm"><p className="font-medium">{item.name}</p><p className="mt-1 text-xs text-[#777]">Qty {item.quantity}</p></div><span className="text-sm font-bold">${(parseFloat(item.price.replace('$','')) * item.quantity).toFixed(2)}</span></div>)}
          </div>
          <div className="mt-6 space-y-3 border-t border-[#ddd] pt-5 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>${summary.subtotal.toFixed(2)}</span></div><div className="flex justify-between"><span>Shipping</span><span>{summary.shipping === 0 ? 'Free' : `$${summary.shipping.toFixed(2)}`}</span></div><div className="flex justify-between border-t border-[#ddd] pt-4 text-base font-bold"><span>Total</span><span>${summary.total.toFixed(2)}</span></div></div>
          <button className="mt-6 h-12 w-full bg-[#111] text-sm font-bold text-white" disabled={!cartItems.length}>Confirm order</button>
        </aside>
      </form>
    </main>
  );
};

export default Checkout;
