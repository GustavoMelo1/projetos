import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  { id: "biografia-empilhadeiras", title: "Biografia das Empilhadeiras", description: "Cadastro e histórico de manutenção com foco no uso real da oficina.", image: "/forklift-management-system-interface.jpg", technologies: ["HTML","CSS","JavaScript"], demoUrl: "#", githubUrl: "#", featured: true },
  { id: "finanflow", title: "FinanFlow", description: "Automação de fluxos financeiros com Power Automate e integração com Excel.", image: "/financial-automation-dashboard-dark-theme.jpg", technologies: ["Power Automate","Excel Online","SharePoint","Outlook"], demoUrl: "#", githubUrl: "#", featured: true },
  { id: "automacao-fluxos", title: "Automação de Fluxos", description: "Sistema de automação com APIs e webhooks para otimizar processos.", image: "/workflow-automation-light.jpg", technologies: ["Power Automate","APIs","Webhooks"], demoUrl: "#", githubUrl: "#", featured: false },
  { id: "lista-tarefas", title: "Lista de Tarefas", description: "Aplicação web para gerenciamento de tarefas com interface moderna.", image: "/modern-todo-list-app-interface.jpg", technologies: ["HTML","CSS","JavaScript"], demoUrl: "#", githubUrl: "#", featured: false },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meus <span className="text-red-500">Projetos</span></h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, focando em automação, integrações e soluções web.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card rounded-xl shadow-sm bg-[#eaf3ff]" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center">
                <div className="relative w-40 h-[120px] overflow-hidden rounded-l-xl">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="text-base md:text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (<span key={tech} className="skill-badge text-[11px]">{tech}</span>))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm"><Link href={project.demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Demo</Link></Button>
                    <Button asChild variant="outline" size="sm"><Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />Código</Link></Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg"><Link href="https://github.com/GustavoMelo1" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />Ver Todos no GitHub</Link></Button>
        </div>
      </div>
    </section>
  )
}
