import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="mx-auto flex min-h-[480px] max-w-[900px] flex-col items-center justify-center px-5 py-16 text-center">
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#777]">404</p>
    <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
    <p className="mt-3 text-sm text-[#777]">The page you requested does not exist.</p>
    <Link to="/" className="mt-7 inline-flex h-12 items-center bg-[#111] px-7 text-sm font-bold text-white">Back to home</Link>
  </main>
);

export default NotFound;
