const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-20 right-20 h-48 w-48 rounded-full bg-purple-100 blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-pink-100 blur-3xl opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="section-label mb-6 text-sm font-semibold">
          FAST WEBSITES • QR PAGES • WORDPRESS
        </p>

        <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-bold leading-tight text-gray-900">
          Fast websites for small businesses and freelancers.
        </h1>

        <p className="max-w-2xl mx-auto mt-8 text-lg leading-relaxed text-gray-600">
          I design and build simple, modern websites, landing pages and QR code
          pages for people who need to get online quickly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:minoo.yaghoubi@gmail.com"
            className="soft-button rounded-full px-8 py-4 font-semibold text-gray-900"
          >
            Start a Project
          </a>

          <a
            href="#services"
            className="rounded-full border border-gray-300 bg-white/70 px-8 py-4 font-medium"
          >
            See Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
