import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Github, Instagram, Linkedin, Download, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gustavomelo.oliveira@hotmail.com",
      href: "mailto:gustavomelo.oliveira@hotmail.com?subject=Contato%20pelo%20portfólio",
      color: "text-red-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 51 99367-9050",
      href: "https://wa.me/5551993679050?text=Oi%20Gustavo%2C%20vim%20pelo%20portfólio!",
      color: "text-green-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@GustavoMelo1",
      href: "https://github.com/GustavoMelo1",
      color: "text-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Gustavo Melo",
      href: "https://www.linkedin.com/in/gustavo-melo-oliveira/",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@gustaaavomelo",
      href: "https://www.instagram.com/gustaaavomelo/",
      color: "text-pink-500",
    },
  ]

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Escolha o canal que preferir:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon
                  return (
                    <Button
                      key={method.label}
                      asChild
                      variant="outline"
                      className="h-auto p-4 justify-start hover:shadow-md transition-all duration-300 bg-transparent"
                    >
                      <Link href={method.href} target="_blank" rel="noopener noreferrer">
                        <div className={`mr-3 ${method.color}`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{method.label}</div>
                          <div className="text-sm text-muted-foreground">{method.value}</div>
                        </div>
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Informações
                </CardTitle>
                <CardDescription>Detalhes sobre disponibilidade e foco profissional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium mb-2">Disponibilidade:</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Estágio</Badge>
                    <Badge variant="secondary">Freela</Badge>
                    <Badge variant="secondary">Jovem Aprendiz</Badge>
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2">Foco:</div>
                  <p className="text-sm text-muted-foreground">Back-end, automações, integrações, Full-stack</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Resposta em até 24h
                </div>

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/curriculo-gustavo.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Baixar CV
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
