const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-20 h-48 w-48 rounded-full bg-purple-100 blur-3xl opacity-60"></div>

      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-pink-100 blur-3xl opacity-50"></div>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="mb-6 text-sm font-medium tracking-wide text-purple-600">
          WEB DESIGN • WORDPRESS • REACT
        </p>

        <h1 className="max-w-3xl mx-auto text-5xl md:text-7xl font-bold leading-tight text-gray-900">
          Beautiful websites for small businesses and creative brands.
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-lg leading-relaxed text-gray-600">
          I design and build clean, modern websites using Figma, WordPress and
          React — helping businesses stand out online.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-full bg-purple-200 px-8 py-4 font-medium transition hover:bg-purple-300">
            View Work
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-4 font-medium transition hover:bg-white">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
