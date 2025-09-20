import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { ProjectDetail } from "@/components/project-detail"

const projects = {
  "biografia-empilhadeiras": {
    title: "Biografia das Empilhadeiras",
    subtitle: "Sistema de Gestão de Manutenção",
    description: "Cadastro e histórico de manutenção com foco no uso real da oficina.",
    fullDescription: `O sistema registra dados das empilhadeiras (modelo, ano nº de série) e cria "biografias" com histórico de serviços (troco de roda, torre, etc.). O objetivo é facilitar decisões de manutenção e custos.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Cadastro rápido de empilhadeiras com formulário intuitivo",
      "Histórico completo de serviços e manutenções",
      "Busca e filtragem avançada por modelo, ano e tipo de serviço",
      "Exportação de relatórios em CSV/PDF",
    ],
    nextSteps: [
      "Autenticação + profiles de usuário",
      "API Java + banco PostgreSQL para maior robustez",
      "Relatórios avançados com gráficos e métricas",
    ],
    architecture: [
      "UI: componentes do formulário – cards para organização visual",
      "Lógica: JavaScript puro para manipulação de dados",
      "Armazenamento: LocalStorage para persistência local",
    ],
    demoUrl: "#",
    githubUrl: "#",
    images: ["/forklift-registration-form.jpg", "/maintenance-history-dashboard.jpg", "/search-and-filter-interface.jpg"],
  },
  finanflow: {
    title: "FinanFlow",
    subtitle: "Automação de Fluxos Financeiros",
    description: "Automação de fluxos financeiros com Power Automate e integração com Excel.",
    fullDescription: `Sistema de automação que conecta diferentes ferramentas Microsoft para criar fluxos financeiros automatizados, reduzindo trabalho manual e aumentando a precisão dos dados.`,
    technologies: ["Power Automate", "Excel Online", "SharePoint", "Outlook"],
    features: [
      "Automação de aprovações financeiras via email",
      "Integração com Excel para cálculos automáticos",
      "Notificações inteligentes para stakeholders",
      "Dashboard em tempo real no SharePoint",
    ],
    nextSteps: [
      "Integração com Power BI para analytics avançados",
      "Conexão com sistemas ERP externos",
      "Machine Learning para previsões financeiras",
    ],
    architecture: [
      "Triggers: Emails e formulários SharePoint",
      "Processamento: Power Automate workflows",
      "Armazenamento: SharePoint Lists e Excel Online",
    ],
    demoUrl: "#",
    githubUrl: "#",
    images: ["/power-automate-workflow-diagram.jpg", "/excel-financial-dashboard.jpg", "/sharepoint-approval-interface.jpg"],
  },
  "automacao-fluxos": {
    title: "Automação de Fluxos",
    subtitle: "Sistema de Automação Empresarial",
    description: "Sistema de automação com APIs e webhooks para otimizar processos.",
    fullDescription: `Plataforma robusta para automação de processos empresariais, conectando diferentes sistemas através de APIs e webhooks para criar fluxos de trabalho eficientes.`,
    technologies: ["Power Automate", "APIs", "Webhooks"],
    features: [
      "Conectores personalizados para APIs externas",
      "Webhooks para eventos em tempo real",
      "Monitoramento e logs detalhados",
      "Interface de configuração intuitiva",
    ],
    nextSteps: [
      "Suporte a mais protocolos de integração",
      "Dashboard de analytics em tempo real",
      "Sistema de alertas inteligentes",
    ],
    architecture: [
      "API Gateway: Gerenciamento de conexões externas",
      "Event Processing: Webhooks e triggers",
      "Workflow Engine: Power Automate como orquestrador",
    ],
    demoUrl: "#",
    githubUrl: "#",
    images: ["/api-integration-dashboard.jpg", "/webhook-configuration-interface.jpg", "/workflow-monitoring-system.jpg"],
  },
  "lista-tarefas": {
    title: "Lista de Tarefas",
    subtitle: "Aplicação de Produtividade",
    description: "Aplicação web para gerenciamento de tarefas com interface moderna.",
    fullDescription: `Aplicação web moderna para gerenciamento de tarefas pessoais e profissionais, com foco na usabilidade e experiência do usuário.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interface limpa e intuitiva",
      "Categorização de tarefas por projetos",
      "Sistema de prioridades e prazos",
      "Sincronização local com LocalStorage",
    ],
    nextSteps: ["Sincronização em nuvem", "Colaboração em equipe", "Aplicativo mobile"],
    architecture: [
      "Frontend: HTML5 semântico + CSS Grid/Flexbox",
      "Interatividade: JavaScript ES6+ com módulos",
      "Persistência: LocalStorage com fallback",
    ],
    demoUrl: "#",
    githubUrl: "#",
    images: ["/modern-todo-list-interface.jpg", "/task-categories-and-priorities.jpg", "/mobile-responsive-design.png"],
  },
}

interface ProjectPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProjectDetail project={project} />
      </main>
    </div>
  )
}
