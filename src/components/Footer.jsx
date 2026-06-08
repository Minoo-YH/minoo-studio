const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10">
      <div className="art-card rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Minoo Studio
          </h2>
          <p className="mt-2 text-gray-600">
            Fast websites, landing pages and QR pages.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="mailto:minoo.yaghoubi@gmail.com">
            Email
          </a>
        </div>
      </div>

      <p className="py-6 text-center text-sm text-gray-500">
        © 2025 Minoo Studio. Built with love in Finland.
      </p>
    </footer>
  );
};

export default Footer;