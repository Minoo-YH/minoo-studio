const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <p className="mb-6 text-sm font-medium text-purple-600">
        Web Design • WordPress • React
      </p>

      <h2 className="max-w-4xl mx-auto text-5xl md:text-7xl font-bold leading-tight">
        Beautiful websites for small businesses and creative brands.
      </h2>

      <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
        I design and build clean, modern websites using Figma, WordPress and
        React.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-7 py-4 rounded-full bg-purple-200 font-medium">
          View Work
        </button>

        <button className="px-7 py-4 rounded-full border border-gray-300 font-medium">
          Start a Project
        </button>
      </div>
    </section>
  );
};

export default Hero;
