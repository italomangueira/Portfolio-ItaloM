import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Etrix",
    description:
      "E-commerce de produtos digitais desenvolvido com React e TailwindCSS.",
    image: "/Etrix.png",
    tags: ["Angular", "TailwindCSS"],
    demoUrl: "https://italomangueira-etrix.vercel.app/",
    githubUrl: "https://github.com/italomangueira/Etrix",
  },
  {
    id: 2,
    title: "MediFLow",
    description: "MediFlow é um Packge de comunicação baseado no Mediatr.",
    image: "/logoNuget.png",
    tags: ["C#", ".Net", "MediatR", "Packges"],
    demoUrl: "https://www.nuget.org/packages/MediFlow/",
    githubUrl: "https://github.com/italomangueira/MediFlow",
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Data Fundamentals",
    description: "",
    image: "/microsoft-certified-fundamentals-badge.svg",
    tags: [
      "Azure",
      "Data",
      "Relational Databases",
      "Non-Relational Databases",
      "Analytics",
      "Power BI",
    ],
    demoUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ITALOMANGUEIRA-3775/697F8DCDA4EF3FE9?sharingId=20CF814CF5009016",
  },
  {
    id: 4,
    title:
      "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    description: "",
    image: "/microsoft-certified-fundamentals-badge.svg",
    tags: [
      "Azure",
      "Security",
      "Compliance",
      "Identity Management",
      "Azure Active Directory",
      "Threat Protection",
    ],
    demoUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ITALOMANGUEIRA-3775/697F8DCDA4EF3FE9?sharingId=20CF814CF5009016",
  },
  {
    id: 5,
    title: "Microsoft Certified: Azure AI Fundamentals",
    description: "",
    image: "/microsoft-certified-fundamentals-badge.svg",
    tags: [
      "Azure",
      "Artificial Intelligence",
      "Machine Learning",
      "Cognitive Services",
      "NLP",
      "Computer Vision",
      "Ethics in AI",
    ],
    demoUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ITALOMANGUEIRA-3775/697F8DCDA4EF3FE9?sharingId=20CF814CF5009016",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Projects <span className="text-primary"> | Certification </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes e Certficados. Cada
          projeto foi cuidadosamente elaborado com atenção aos detalhes,
          desempenho e experiência do usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover md:object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                {project.description && (
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/italomangueira"
          >
            Veja meu GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
