import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="art-card rounded-full px-5 py-4 flex items-center justify-between">
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
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden sm:block soft-button rounded-full px-6 py-3 font-semibold"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full border border-black/10 px-4 py-2 text-sm"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {isOpen && (
          <div className="art-card mt-3 rounded-[28px] p-5 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="soft-button rounded-full px-6 py-3 text-center font-semibold"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
