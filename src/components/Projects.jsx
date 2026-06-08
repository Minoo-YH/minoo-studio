const projects = [
  {
    title: "Help App",
    type: "React Web App",
    description:
      "A helpful web application designed from idea to prototype and developed as a live React project.",
    tags: ["React", "Figma", "Live App"],
    liveUrl: "https://web-project-k172.onrender.com/",
    repoUrl: "https://github.com/MiksuNy/web-project",
    figmaUrl:
      "https://www.figma.com/make/qMKm053W5kn1JNJOwQ51h0/Help-App?t=hXBCaRWimu2RI1rC-1",
    color: "bg-purple-50",
  },
  {
    title: "Nordic Café QR Page",
    type: "Concept Project",
    description:
      "A simple QR menu page concept for a small café with menu, location and contact links.",
    tags: ["QR Page", "Landing Page", "Small Business"],
    color: "bg-orange-50",
  },
  {
    title: "Luna Beauty Website",
    type: "Concept Project",
    description:
      "A soft and elegant website concept for a beauty studio with services and booking section.",
    tags: ["Website Design", "WordPress", "Booking"],
    color: "bg-pink-50",
  },
];

const Projects = () => {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-14 text-center">
        <p className="section-label mb-4 text-sm font-semibold">
          SELECTED WORK
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Recent work & concepts.
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
          A mix of real React projects and website concepts for small
          businesses.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="art-card rounded-[32px] p-6">
            <div
              className={`mb-6 flex h-48 items-center justify-center rounded-[24px] ${project.color}`}
            >
              <span className="text-5xl">✦</span>
            </div>

            <p className="mb-2 text-sm font-semibold text-[#ff8a8a]">
              {project.type}
            </p>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {project.title}
            </h3>

            <p className="mb-5 leading-relaxed text-gray-600">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-3 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full soft-button px-4 py-2 text-sm font-semibold"
                >
                  Live Site
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-4 py-2 text-sm font-medium"
                >
                  GitHub
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-4 py-2 text-sm font-medium"
                >
                  Figma
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
