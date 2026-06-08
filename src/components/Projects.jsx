import helpc from "../assets/helpc.png";

const projects = [
  {
    title: "Help App",
    image: helpc,
    type: "React + Figma Project",
    description:
      "A helpful web application designed from idea to prototype and developed as a live React project.",
    tags: ["React", "Figma", "Live App"],
    liveUrl: "https://web-project-k172.onrender.com/",
    repoUrl: "https://github.com/MiksuNy/web-project",
    figmaUrl:
      "https://www.figma.com/make/qMKm053W5kn1JNJOwQ51h0/Help-App?t=hXBCaRWimu2RI1rC-1",
    color: "bg-purple-100",
  },

  {
    title: "Nordic Café QR Page",
    type: "Concept Project",
    description:
      "A QR menu page concept for a café with menu, opening hours and social links.",
    tags: ["QR Page", "Landing Page", "Small Business"],
    color: "bg-orange-100",
  },

  {
    title: "Luna Beauty Website",
    type: "Concept Project",
    description:
      "A modern beauty studio website concept with booking and service sections.",
    tags: ["Website Design", "WordPress", "Booking"],
    color: "bg-pink-100",
  },
];

const Projects = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="section-label mb-4 text-sm font-semibold">
          SELECTED WORK
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Recent work & concepts.
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
          A mix of real React projects and website concepts created for
          freelancers and small businesses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="art-card overflow-hidden rounded-[32px] p-5"
          >
            <div className="mb-6 overflow-hidden rounded-[24px]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                />
              ) : (
                <div
                  className={`flex h-56 items-center justify-center ${project.color}`}
                >
                  <span className="text-6xl">✦</span>
                </div>
              )}
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
                  className="soft-button rounded-full px-4 py-2 text-sm font-semibold"
                >
                  Live Site
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium"
                >
                  GitHub
                </a>
              )}

              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium"
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
