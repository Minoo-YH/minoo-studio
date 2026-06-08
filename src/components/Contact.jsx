const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="section-label mb-4 text-sm font-semibold">CONTACT</p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Let’s build your website.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Tell me what you need, and I’ll get back to you with a simple plan,
            timeline and price.
          </p>

          <div className="mt-8 space-y-3 text-gray-700">
            <p>📧 minoo.yaghoubi@gmail.com</p>
            <p>📍 Based in Finland</p>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mqeoqbeg"
          method="POST"
          className="art-card rounded-[32px] p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-2xl border border-gray-200 bg-white/80 p-4 outline-none focus:border-[#ff8a8a]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-2xl border border-gray-200 bg-white/80 p-4 outline-none focus:border-[#ff8a8a]"
          />

          <select
            name="service"
            required
            className="w-full rounded-2xl border border-gray-200 bg-white/80 p-4 outline-none focus:border-[#ff8a8a]"
          >
            <option value="">What do you need?</option>
            <option value="QR Page">QR Page</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Business Website">Business Website</option>
            <option value="WordPress Website">WordPress Website</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="6"
            required
            className="w-full rounded-2xl border border-gray-200 bg-white/80 p-4 outline-none focus:border-[#ff8a8a]"
          ></textarea>

          <button
            type="submit"
            className="soft-button w-full rounded-full px-8 py-4 font-semibold text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;