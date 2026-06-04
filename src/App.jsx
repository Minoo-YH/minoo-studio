function App() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <section className="max-w-7xl mx-auto px-8 py-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Minoo Studio</h1>

          <ul className="hidden md:flex gap-10 text-gray-700">
            <li>Work</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>

          <button className="bg-[#DCC8FF] px-6 py-3 rounded-full font-medium">
            Let's Talk
          </button>
        </nav>

        {/* Hero */}
        <div className="flex flex-col items-center text-center mt-32">
          <div className="bg-white px-5 py-2 rounded-full shadow-sm">
            ✨ Creative Web Design & Development
          </div>

          <h2 className="text-7xl font-black mt-8 leading-none">
            Crafting Digital
          </h2>

          <h2 className="text-7xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-green-300 text-transparent bg-clip-text">
            Experiences
          </h2>

          <p className="max-w-2xl text-gray-600 text-xl mt-8">
            A modern creative studio specializing in beautiful, functional web
            design and frontend development for ambitious brands.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-[#DCC8FF] px-8 py-4 rounded-full font-semibold">
              View My Work
            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-full">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
