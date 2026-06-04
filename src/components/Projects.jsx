const Projects = () => {
  const projects = [
    {
      title: "Beauty Salon Website",
      type: "WordPress Website",
      description: "A clean and elegant website for a beauty business.",
      tags: ["WordPress", "UI Design", "Responsive"],
      color: "bg-pink-50",
    },
    {
      title: "Café Brand Website",
      type: "Website Design",
      description: "A warm and modern website concept for a local café.",
      tags: ["Branding", "Landing Page", "Web Design"],
      color: "bg-orange-50",
    },
    {
      title: "Personal Brand Landing Page",
      type: "Landing Page",
      description: "A simple page designed to build trust and get inquiries.",
      tags: ["Figma", "React", "CTA"],
      color: "bg-green-50",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium tracking-wide text-purple-600">
          SELECTED WORK
        </p>

        <h2 className="max-w-3xl text-4xl md:text-5xl font-bold text-gray-900">
          Recent projects and website concepts.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`mb-6 flex h-52 items-center justify-center rounded-2xl ${project.color}`}
            >
              <span className="text-5xl">✦</span>
            </div>

            <p className="mb-2 text-sm font-medium text-purple-600">
              {project.type}
            </p>

            <h3 className="mb-3 text-2xl font-semibold text-gray-900">
              {project.title}
            </h3>

            <p className="mb-5 text-gray-600">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
