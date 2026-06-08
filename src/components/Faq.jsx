const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Small pages usually take a few days. Bigger websites depend on the project size and content.",
  },
  {
    question: "Do you build WordPress websites?",
    answer:
      "Yes. I can design and build WordPress websites that are easy to update after launch.",
  },
  {
    question: "Can you create a QR code page?",
    answer:
      "Yes. I can create a simple mobile-friendly page that you can connect to a QR code.",
  },
  {
    question: "How does payment work?",
    answer:
      "For most projects, payment is split into 50% before starting and 50% before final delivery.",
  },
];

const Faq = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="section-label mb-4 text-sm font-semibold">FAQ</p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Common questions.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.question} className="art-card rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {item.question}
            </h3>

            <p className="mt-3 leading-relaxed text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;