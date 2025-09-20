import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const skills = ["Estudante", "Automatização", "Desenvolvimento", "Integrações"]

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Sobre <span className="gradient-text">Mim</span>
              </h1>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                Estudante de Engenharia de Software focado em Back-end / Full-stack. Experiência com automação, soluções
                web e integrações.
              </p>

              <p className="text-muted-foreground">
                <strong>EBAC</strong> - Escola Britânica de Artes Criativas e Tecnologia
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projetos">
                  Ver Projetos
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/GustavoMelo1" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/gustavo-melo-oliveira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:gustavomelo.oliveira@hotmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-float"></div>
              <img
                src="/professional-developer-portrait.png"
                alt="Foto do Gustavo"
                className="absolute inset-4 w-72 h-72 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
