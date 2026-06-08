const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <p className="section-label mb-6 text-sm font-semibold">
          WEB DESIGN • WORDPRESS • QR PAGES
        </p>

        <h1 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-gray-900">
          Fast websites for modern small businesses.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600">
          I design and build clean, beautiful websites, landing pages and QR
          pages that help your business look professional online.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="soft-button rounded-full px-8 py-4 text-center font-semibold text-gray-900"
          >
            Start a Project
          </a>

          <a
            href="#work"
            className="rounded-full border border-gray-200 bg-white/70 px-8 py-4 text-center font-medium text-gray-900"
          >
            View Work
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="art-card rounded-3xl p-5">
            <p className="text-2xl font-bold text-gray-900">1–5 days</p>
            <p className="mt-2 text-sm text-gray-600">Fast delivery</p>
          </div>

          <div className="art-card rounded-3xl p-5">
            <p className="text-2xl font-bold text-gray-900">Mobile-first</p>
            <p className="mt-2 text-sm text-gray-600">Looks good everywhere</p>
          </div>

          <div className="art-card rounded-3xl p-5">
            <p className="text-2xl font-bold text-gray-900">Simple process</p>
            <p className="mt-2 text-sm text-gray-600">Clear steps & pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
