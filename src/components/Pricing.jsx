const packages = [
  {
    title: "QR Page",
    icon: "📱",
    price: "€49",
    description: "A simple mobile-friendly page connected to your QR code.",
    features: [
      "1 Custom Page",
      "Mobile Friendly",
      "Social Links",
      "Fast Delivery",
    ],
  },
  {
    title: "Landing Page",
    icon: "🚀",
    price: "€99",
    description:
      "Perfect for freelancers, personal brands and small campaigns.",
    features: [
      "Custom Design",
      "Responsive Layout",
      "Contact Section",
      "Basic SEO",
    ],
  },
  {
    title: "Business Website",
    icon: "💼",
    price: "€249",
    description:
      "Professional website for small businesses that need an online presence.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "SEO Ready",
    ],
  },
  {
    title: "WordPress Website",
    icon: "⚙️",
    price: "€349",
    description: "Easy-to-manage website that you can update yourself.",
    features: [
      "WordPress Setup",
      "Editable Content",
      "Launch Support",
      "Training Included",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <p className="section-label mb-4 text-sm font-semibold">PRICING</p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Simple pricing.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Affordable packages for freelancers, small businesses and personal
          brands.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => (
          <article
            key={item.title}
            className="art-card flex flex-col rounded-[32px] p-8"
          >
            <div className="mb-5 text-4xl">{item.icon}</div>

            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="mb-5 text-4xl font-bold text-[#ff8a8a]">
              {item.price}
            </p>

            <p className="mb-6 text-gray-600">{item.description}</p>

            <ul className="mb-8 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className="text-gray-700">
                  ✦ {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-auto rounded-full soft-button py-3 text-center font-semibold"
            >
              Get Started
            </a>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Need something custom? Let's discuss your project.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
