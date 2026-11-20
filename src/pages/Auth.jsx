import { Link } from 'react-router-dom';

const Auth = ({ mode }) => {
  const register = mode === 'register';
  return (
    <main className="grid min-h-[680px] lg:grid-cols-2">
      <div className="hidden lg:block"><img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85" alt="Fashion portrait" className="h-full w-full object-cover" /></div>
      <div className="flex items-center justify-center px-5 py-16">
        <form className="w-full max-w-md">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#777]">{register ? 'Create account' : 'Welcome back'}</p>
          <h1 className="mt-3 text-4xl font-semibold">{register ? 'Join AVENUE' : 'Sign in'}</h1>
          {register && <input required placeholder="Full name" className="mt-8 h-12 w-full border-b border-[#ddd] outline-none focus:border-[#111]" />}
          <input required type="email" placeholder="Email address" className={`${register ? 'mt-4' : 'mt-8'} h-12 w-full border-b border-[#ddd] outline-none focus:border-[#111]`} />
          <input required type="password" placeholder="Password" className="mt-4 h-12 w-full border-b border-[#ddd] outline-none focus:border-[#111]" />
          <button className="mt-8 h-12 w-full bg-[#111] text-sm font-bold text-white">{register ? 'Create account' : 'Sign in'}</button>
          <p className="mt-6 text-center text-sm text-[#777]">{register ? 'Already have an account?' : 'New to AVENUE?'} <Link to={register ? '/login' : '/register'} className="font-bold text-[#111]">{register ? 'Sign in' : 'Create account'}</Link></p>
        </form>
      </div>
    </main>
  );
};
export default Auth;
