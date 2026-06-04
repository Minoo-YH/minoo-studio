const steps = [
  {
    number: "01",
    title: "Send Your Idea",
    description: "Tell me about your business, project or website idea.",
  },
  {
    number: "02",
    title: "Get a Simple Plan",
    description:
      "I'll suggest the best solution and timeline for your project.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "I create your website and keep you updated during the process.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Your website goes live and is ready to share with customers.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="section-label mb-3 text-sm font-semibold">HOW IT WORKS</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Simple process. No stress.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="art-card rounded-3xl p-6">
            <p className="mb-4 text-2xl font-bold text-purple-500">
              {step.number}
            </p>

            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
