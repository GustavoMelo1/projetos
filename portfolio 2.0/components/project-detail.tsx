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
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Projetos
        </Link>

        <div className="space-y-4 mt-4">
          <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 transition"
            >
              <ExternalLink className="h-4 w-4" />
              Ver Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 transition"
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
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="relative">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-80 object-cover"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/90 p-2 hover:bg-white transition"
                    onClick={prevImage}
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/90 p-2 hover:bg-white transition"
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
                      index === currentImageIndex ? "bg-white" : "bg-white/60"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Vídeo placeholder */}
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-12 w-12 mx-auto mb-2 text-gray-500" />
                <p className="text-gray-500">Vídeo demonstrativo em breve</p>
              </div>
            </div>
          </div>
        </div>

        {/* Informações do projeto */}
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-lg font-semibold">Introdução</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-lg font-semibold">Principais Funcionalidades</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-lg font-semibold">Tecnologias & Arquitetura</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-lg font-semibold">Próximos Passos</h3>
            </div>
            <div className="p-4">
              <ol className="space-y-3">
                {project.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
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
