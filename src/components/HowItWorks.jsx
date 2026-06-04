const steps = [
  {
    number: "01",
    title: "Tell Me About Your Project",
    description:
      "Send a short description of your business, idea or website needs.",
  },
  {
    number: "02",
    title: "Receive a Simple Proposal",
    description:
      "I'll recommend the best solution, timeline and project scope.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Your website is designed and built with regular updates during the process.",
  },
  {
    number: "04",
    title: "Launch & Share",
    description:
      "Your website goes live and is ready to be shared with your customers.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* Heading */}

      <div className="text-center mb-16">
        <p className="section-label mb-4 text-sm font-semibold">HOW IT WORKS</p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          From idea to launch.
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
          A simple and collaborative process designed to get your website online
          quickly.
        </p>
      </div>

      {/* Steps */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="art-card rounded-3xl p-8 transition hover:-translate-y-1"
          >
            <div className="mb-6 text-3xl font-bold text-[#ff8a8a]">
              {step.number}
            </div>

            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="leading-relaxed text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
