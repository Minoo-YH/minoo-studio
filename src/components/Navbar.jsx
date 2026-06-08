const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="art-card rounded-full px-6 py-4 flex items-center justify-between">
          <a href="#" className="leading-none">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                minoo
              </span>

              <span className="text-[#ff8a8a] text-sm">✦</span>
            </div>

            <div className="text-[10px] uppercase tracking-[0.45em] text-gray-400 mt-1">
              studio
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-gray-700">
            <a href="#services" className="hover:text-black transition">
              Services
            </a>

            <a href="#pricing" className="hover:text-black transition">
              Pricing
            </a>

            <a href="#work" className="hover:text-black transition">
              Work
            </a>

            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="soft-button rounded-full px-6 py-3 font-semibold text-gray-900"
          >
            Let’s Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
