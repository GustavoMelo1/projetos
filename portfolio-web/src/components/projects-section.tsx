import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "automacao-fluxos",
    title: "Automação de Fluxos",
    description: "Sistema de automação com APIs e webhooks para otimizar processos.",
    image: "/workflow-automation-interface.png",
    technologies: ["Power Automate", "Webhooks"],
    demoUrl: "/projeto/automacao-fluxos",
    githubUrl: "https://github.com/GustavoMelo1",
    featured: true,
  },
  {
    id: "finanflow",
    title: "FinanFlow",
    description:
      "Automação de fluxos financeiros com Power Automate e integração com Excel.",
    image: "/financial-automation-dashboard-dark-theme.jpg",
    technologies: ["Power Automate", "Excel Online", "SharePoint", "Outlook"],
    demoUrl: "/projeto/finanflow",
    githubUrl: "https://github.com/GustavoMelo1",
    featured: true,
  },
  {
    id: "biografia-empilhadeiras",
    title: "Biografia das Empilhadeiras",
    description:
      "Cadastro e histórico de manutenção com foco no uso real da oficina.",
    image: "/forklift-management-system-interface.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "/projeto/biografia-empilhadeiras",
    githubUrl: "https://github.com/GustavoMelo1",
    featured: false,
  },
  {
    id: "lista-tarefas",
    title: "Lista de Tarefas",
    description:
      "Aplicação web para gerenciamento de tarefas com interface moderna.",
    image: "/modern-todo-list-app-interface.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "/projeto/lista-tarefas",
    githubUrl: "https://github.com/GustavoMelo1",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Meus <span className="text-blue-600">Projetos</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, focando em automação, integrações e soluções web.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-xl shadow-sm bg-[#eaf3ff]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center">
                <div className="relative w-40 h-[120px] overflow-hidden rounded-l-xl bg-white">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
                    }}
                  />
                </div>

                <div className="flex-1 p-4 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600 text-white rounded-full px-3 py-1 text-[11px] font-semibold shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50 transition whitespace-nowrap overflow-visible shrink-0"
                    >
                      <ExternalLink className="h-4 w-4 shrink-0" />
                      <span className="shrink-0">Demo</span>
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50 transition whitespace-nowrap overflow-visible shrink-0"
                    >
                      <Github className="h-4 w-4 shrink-0" />
                      <span className="shrink-0">Código</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/GustavoMelo1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-3 text-white text-sm hover:opacity-90 transition whitespace-nowrap"
          >
            <Github className="h-4 w-4" />
            Ver Todos no GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
