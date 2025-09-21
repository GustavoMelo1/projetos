"use client"

import { useState } from "react"
import { ArrowLeft, ExternalLink, Github, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProjectDetailProps {
  project: {
    title: string
    subtitle: string
    description: string
    fullDescription: string
    technologies: string[]
    features: string[]
    nextSteps: string[]
    architecture: string[]
    demoUrl: string
    githubUrl: string
    images: string[]
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header local */}
      <div className="mb-8">
        {/* Passo 2 → botão outline */}
        <Link href="/#projetos" className="btn-outline">
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Projetos
        </Link>

        <div className="space-y-4 mt-4">
          <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
          <p className="text-xl text-[var(--muted)]">{project.subtitle}</p>

          {/* Passo 3 → chips de tecnologias */}
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="badge">{tech}</li>
            ))}
          </ul>

          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-4 py-2 text-[var(--primary-foreground)] text-sm hover:bg-[#0063AD] transition"
            >
              <ExternalLink className="h-4 w-4" />
              Ver Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-4 py-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="card-surface overflow-hidden">
            <div className="relative">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-80 object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 btn-outline p-2"
                    onClick={prevImage}
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 btn-outline p-2"
                    onClick={nextImage}
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      index === currentImageIndex ? "bg-[var(--primary)]" : "bg-[var(--chip-bg)]"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Vídeo placeholder */}
          <div className="card-surface p-6">
            <div className="aspect-video bg-[var(--chip-bg)] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-12 w-12 mx-auto mb-2 text-[var(--muted)]" />
                <p className="text-[var(--muted)]">Vídeo demonstrativo em breve</p>
              </div>
            </div>
          </div>
        </div>

        {/* Informações do projeto */}
        <div className="space-y-6">
          {/* Passo 4 → painéis como card-surface */}
          <div className="card-surface">
            <div className="border-b border-[var(--card-border)] p-4">
              <h3 className="text-lg font-semibold">Introdução</h3>
            </div>
            <div className="p-4">
              <p className="text-[var(--muted)] leading-relaxed">{project.fullDescription}</p>
            </div>
          </div>

          <div className="card-surface">
            <div className="border-b border-[var(--card-border)] p-4">
              <h3 className="text-lg font-semibold">Principais Funcionalidades</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2" />
                    <span className="text-[var(--muted)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-surface">
            <div className="border-b border-[var(--card-border)] p-4">
              <h3 className="text-lg font-semibold">Tecnologias & Arquitetura</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[var(--chip-border)] rounded-full mt-2" />
                    <span className="text-[var(--muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-surface">
            <div className="border-b border-[var(--card-border)] p-4">
              <h3 className="text-lg font-semibold">Próximos Passos</h3>
            </div>
            <div className="p-4">
              <ol className="space-y-3">
                {project.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-[var(--primary)] text-[var(--primary-foreground)] w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
                      {i + 1}
                    </span>
                    <span className="text-[var(--muted)]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
