import { Badge } from "@/components/ui/badge"
import { Globe, Database, Zap, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    color: "text-blue-500",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Java", "Node.js", "PostgreSQL", "APIs REST"],
    color: "text-green-500",
  },
  {
    title: "Automação",
    icon: Zap,
    skills: ["Power Automate", "Power BI", "Webhooks", "Integrações"],
    color: "text-yellow-500",
  },
  {
    title: "Ferramentas",
    icon: Code,
    skills: ["Git/GitHub", "Microsoft Stack", "SharePoint", "Excel"],
    color: "text-purple-500",
  },
]

const additionalSkills = ["Inglês B2", "Metodologias Ágeis", "Resolução de Problemas"]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-red-500">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.title}
                className="skill-card p-6 rounded-lg text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`skill-icon-bubble ${category.color}`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Outras Competências</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
