const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-4">
        Services
      </h2>

      <p className="text-center text-gray-600 mb-16">
        Everything you need to build a strong online presence.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h3 className="text-2xl font-semibold mb-3">
            Website Design
          </h3>
          <p className="text-gray-600">
            Modern websites designed to reflect your brand.
          </p>
        </div>

        <div className="rounded-3xl border p-8">
          <h3 className="text-2xl font-semibold mb-3">
            WordPress Websites
          </h3>
          <p className="text-gray-600">
            Easy-to-manage websites built for growth.
          </p>
        </div>

        <div className="rounded-3xl border p-8">
          <h3 className="text-2xl font-semibold mb-3">
            Landing Pages
          </h3>
          <p className="text-gray-600">
            High-converting pages for campaigns and products.
          </p>
        </div>

        <div className="rounded-3xl border p-8">
          <h3 className="text-2xl font-semibold mb-3">
            React Development
          </h3>
          <p className="text-gray-600">
            Fast and responsive interfaces built with React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;