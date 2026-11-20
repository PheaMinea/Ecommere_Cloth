const About = () => (
  <main>
    <section className="relative h-[520px] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2200&q=85" alt="AVENUE store" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute bottom-10 left-5 text-white md:left-[7%]"><p className="text-xs font-bold uppercase tracking-[0.2em]">Our story</p><h1 className="mt-3 text-5xl font-semibold md:text-7xl">Fashion, considered.</h1></div>
    </section>
    <section className="mx-auto max-w-[900px] px-5 py-16 text-center md:py-24">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#777]">About AVENUE</p>
      <h2 className="mt-5 text-3xl font-semibold leading-snug md:text-5xl">Everyday pieces with purpose, made for real life.</h2>
      <p className="mt-7 text-base leading-8 text-[#777]">AVENUE brings together modern tailoring, relaxed essentials and expressive seasonal pieces. We believe getting dressed should feel effortless, personal and enjoyable.</p>
    </section>
  </main>
);
export default About;
