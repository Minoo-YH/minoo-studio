const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Share Your Idea",
    description:
      "Tell me about your business, project or website needs. The more details, the better!",
    color: "from-[#ffd6e8] to-[#ffcab3]",
  },
  {
    number: "02",
    icon: "📝",
    title: "Get a Simple Plan",
    description:
      "I'll review your idea and send you a clear plan, timeline and fair price.",
    color: "from-[#e6d8ff] to-[#f5eaff]",
  },
  {
    number: "03",
    icon: "🎨",
    title: "Design & Build",
    description:
      "I design and build your website with care, keeping you updated at every step.",
    color: "from-[#ffcab3] to-[#ffd6e8]",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Launch & Support",
    description:
      "Your website goes live! I'll make sure everything works perfectly.",
    color: "from-[#d8c4ff] to-[#f5eaff]",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="section-label mb-4 text-sm font-semibold">HOW IT WORKS</p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          From idea to launch.
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
          A simple, friendly process to help you get online without stress.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="art-card rounded-[2rem] p-7">
            <div
              className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-2xl`}
            >
              {step.icon}
            </div>

            <p className="mb-3 text-3xl font-bold text-[#ff8a8a]">
              {step.number}
            </p>

            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="leading-relaxed text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center text-lg text-gray-600">
        ❤️ I treat every project like it’s my own.
      </p>
    </section>
  );
};

export default HowItWorks;
