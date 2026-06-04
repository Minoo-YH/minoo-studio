const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Minoo Studio</h1>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        <li>Work</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="px-5 py-3 rounded-full bg-purple-200">
        Let's Talk
      </button>
    </nav>
  );
};

export default Navbar;