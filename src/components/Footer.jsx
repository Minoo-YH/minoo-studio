const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-16">
      <div className="border-t border-black/5 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">minoo ✦ studio</h2>

            <p className="mt-2 max-w-sm text-gray-500">
              Fast websites, landing pages and QR pages for modern businesses.
            </p>
          </div>

          <a href="#pricing" className="hover:text-gray-900">
            Pricing
          </a>

          <a href="#work" className="hover:text-gray-900">
            Projects
          </a>

          <a href="#contact" className="hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>© 2025 Minoo Studio</p>

        <p>Designed & built in Finland 🇫🇮</p>
      </div>
    </footer>
  );
};

export default Footer;
