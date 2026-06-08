import helpc from "../assets/helpc.png";
import luxuryweb from "../assets/luxuryweb.png";
import travel from "../assets/travel.png";

const projects = [
  {
    title: "LuxeScents",
    image: luxuryweb,
    type: "Luxury Perfume Website",
    description:
      "A modern perfume brand website focused on elegant design, storytelling and premium user experience.",
    tags: ["React", "Branding", "UI Design"],
    color: "bg-rose-100",
  },

  {
    title: "Travel Site",
    image: travel,
    type: "Travel Website",
    description:
      "A modern travel website focused on destination discovery, responsive design and user experience.",
    tags: ["React", "Responsive", "Travel"],
    repoUrl: "https://github.com/oliviaskye/travel-site",
    color: "bg-sky-100",
  },

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
    title: "QR Business Page",
    type: "QR Landing Page",
    description:
      "A mobile-first landing page connected to a QR code for menus, events, services and business information.",
    tags: ["QR Code", "Mobile First", "Business"],
    color: "bg-orange-100",
  },
];

const Projects = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <p className="section-label mb-4 text-sm font-semibold">
          SELECTED PROJECTS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Websites, apps & QR pages.
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
          Real websites, digital products and QR page concepts created for
          modern businesses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="art-card flex flex-col overflow-hidden rounded-[32px] p-5"
          >
            <div className="mb-6 overflow-hidden rounded-[24px]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                />
              ) : (
                <div
                  className={`flex h-64 items-center justify-center ${project.color}`}
                >
                  <div className="text-center">
                    <div className="mb-3 text-6xl">📱</div>
                    <p className="font-semibold text-gray-900">
                      QR Landing Page
                    </p>
                  </div>
                </div>
              )}
            </div>

            <p className="mb-2 text-sm font-semibold text-[#ff8a8a]">
              {project.type}
            </p>

            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {project.title}
            </h3>

            <p className="mb-5 min-h-[140px] leading-relaxed text-gray-600">
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

            <div className="mt-auto flex flex-wrap gap-3">
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
