const packages = [
  {
    title: "QR Page",
    icon: "📱",
    price: "from €80",
    color: "from-[#ffd6e8] to-[#ffcab3]",
    description:
      "Perfect for restaurant menus, profiles, events and quick information pages.",
    features: [
      "1 Page",
      "Mobile Friendly",
      "Instagram & WhatsApp Links",
      "Fast Delivery",
    ],
  },

  {
    title: "Landing Page",
    icon: "🚀",
    price: "from €150",
    color: "from-[#e6d8ff] to-[#d8c4ff]",
    description:
      "A focused page designed to promote your service, product or personal brand.",
    features: [
      "Custom Design",
      "Responsive Layout",
      "Basic SEO",
      "Call To Action",
    ],
  },

  {
    title: "Business Website",
    icon: "💼",
    price: "from €350",
    color: "from-[#ffcab3] to-[#ffd6e8]",
    description:
      "Professional websites for small businesses that need a strong online presence.",
    features: ["3-5 Pages", "Responsive Design", "Contact Form", "SEO Ready"],
  },

  {
    title: "WordPress Website",
    icon: "⚙️",
    price: "from €450",
    color: "from-[#d8c4ff] to-[#f0e8ff]",
    description:
      "Easy-to-manage websites that you can update yourself after launch.",
    features: [
      "WordPress Setup",
      "Editable Content",
      "Training Included",
      "Launch Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="section-label mb-4 text-sm font-semibold">PRICING</p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Popular Services & Pricing
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
          Simple packages to help you get online quickly. Every project is
          unique, so feel free to contact me for a custom quote.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => (
          <div key={item.title} className="art-card rounded-[32px] p-8">
            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-3xl`}
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

            <p className="mb-4 text-3xl font-bold text-[#ff8a8a]">
              {item.price}
            </p>

            <p className="mb-6 text-gray-600">{item.description}</p>

            <ul className="space-y-3 mb-8">
              {item.features.map((feature) => (
                <li key={feature} className="text-gray-700">
                  ✦ {feature}
                </li>
              ))}
            </ul>

            <a
              href="mailto:minoo.yaghoubi@gmail.com"
              className="block text-center rounded-full soft-button py-3 font-semibold"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-gray-600">Not sure which option is right for you?</p>

        <a
          href="mailto:minoo.yaghoubi@gmail.com"
          className="inline-block mt-4 rounded-full border px-6 py-3 font-medium"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
};

export default Pricing;
