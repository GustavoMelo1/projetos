import { Mail, MessageCircle, Github, Instagram, Linkedin, Download, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const contactMethods = [
    { icon: Mail, label: "Email", value: "gustavomelo.oliveira@hotmail.com", href: "mailto:gustavomelo.oliveira@hotmail.com?subject=Contato%20pelo%20portf%C3%B3lio", color: "text-red-500" },
    { icon: MessageCircle, label: "WhatsApp", value: "+55 51 99367-9050", href: "https://wa.me/5551993679050?text=Oi%20Gustavo%2C%20vim%20pelo%20portf%C3%B3lio!", color: "text-green-500" },
    { icon: Github, label: "GitHub", value: "@GustavoMelo1", href: "https://github.com/GustavoMelo1", color: "text-gray-700" },
    { icon: Linkedin, label: "LinkedIn", value: "Gustavo Melo", href: "https://www.linkedin.com/in/gustavo-melo-oliveira/", color: "text-blue-600" },
    { icon: Instagram, label: "Instagram", value: "@gustaaavomelo", href: "https://www.instagram.com/gustaaavomelo/", color: "text-pink-500" },
  ]

  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna esquerda (canais) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Escolha o canal que preferir:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((m) => {
                const Icon = m.icon
                return (
                  <Link
                    key={m.label}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md border border-gray-200 bg-white p-4 hover:shadow-md transition"
                  >
                    <span className={`shrink-0 ${m.color}`}>
                      <Icon size={20} />
                    </span>
                    <span className="text-left">
                      <div className="font-medium">{m.label}</div>
                      <div className="text-sm text-gray-600">{m.value}</div>
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Coluna direita (informações) */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 bg-white">
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Informações
                </div>
                <p className="mt-1 text-sm text-gray-600">Detalhes sobre disponibilidade e foco profissional</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="font-medium mb-2">Disponibilidade:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm">Estágio</span>
                    <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm">Freela</span>
                    <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm">Jovem Aprendiz</span>
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">Foco:</div>
                  <p className="text-sm text-gray-600">Back-end, automações, integrações, Full-stack</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  Resposta em até 24h
                </div>

                <Link
                  href="/curriculo-gustavo.pdf"
                  download
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50"
                >
                  <Download className="h-4 w-4" />
                  Baixar CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
