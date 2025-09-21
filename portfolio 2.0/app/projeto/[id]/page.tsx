import { notFound } from "next/navigation"
import Header from "../../../components/header"
import { ProjectDetail } from "../../../components/project-detail"

// 1) Define o tipo exato que o ProjectDetail espera
interface Project {
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

// 2) Tipamos o objeto de projetos como Record<string, Project>
//    (assim o 'project' já sai do tipo certo)
const projects: Record<string, Project> = {
  "biografia-empilhadeiras": {
    title: "Biografia das Empilhadeiras",
    subtitle: "Sistema de Gestão de Manutenção",
    description: "Cadastro e histórico de manutenção com foco no uso real da oficina.",
    fullDescription:
      'O sistema registra dados das empilhadeiras (modelo, ano, nº de série) e cria "biografias" com histórico de serviços (troca de roda, torre, etc.). O objetivo é facilitar decisões de manutenção e custos.',
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
      "UI: componentes de formulário – cards para organização visual",
      "Lógica: JavaScript puro para manipulação de dados",
      "Armazenamento: LocalStorage para persistência local",
    ],
    demoUrl: "/projeto/biografia-empilhadeiras",
    githubUrl: "https://github.com/GustavoMelo1",
    images: [
      "/forklift-management-system-interface.jpg",
      "/forklift-management-system-interface.jpg",
      "/forklift-management-system-interface.jpg",
    ],
  },
  finanflow: {
    title: "FinanFlow",
    subtitle: "Automação de Fluxos Financeiros",
    description: "Automação de fluxos financeiros com Power Automate e integração com Excel.",
    fullDescription:
      "Sistema de automação que conecta diferentes ferramentas Microsoft para criar fluxos financeiros automatizados, reduzindo trabalho manual e aumentando a precisão dos dados.",
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
    demoUrl: "/projeto/finanflow",
    githubUrl: "https://github.com/GustavoMelo1",
    images: [
      "/financial-automation-dashboard-dark-theme.jpg",
      "/financial-automation-dashboard-dark-theme.jpg",
      "/financial-automation-dashboard-dark-theme.jpg",
    ],
  },
"automacao-fluxos": {
  title: "Automação de Guias & Pagamentos",
  subtitle: "Power Automate + Excel Online (SharePoint)",
  description: "Fluxo automatizado para registro e acompanhamento de guias em planilha Excel/SharePoint.",
  fullDescription:
    "Projeto de automação criado para simplificar a gestão de guias de pagamento do escritório. O fluxo do Power Automate registra os dados em uma planilha Excel Online (hospedada no SharePoint), atualiza status de pendente/pago, e envia notificações aos responsáveis. Esse processo reduziu tarefas manuais e centralizou o acompanhamento em um único lugar.",
  technologies: [
    "Power Automate",
    "Excel Online",
    "SharePoint"
  ],
  features: [
    "Registro automático de guias na planilha Excel",
    "Controle de status (Pendente/Pago)",
    "Notificação automática por e-mail aos responsáveis",
    "Histórico centralizado para conciliação"
  ],
  nextSteps: [
    "Criar dashboard no Power BI para análise de pagamentos",
    "Adicionar alertas de vencimento",
    "Integrar com o sistema interno do escritório"
  ],
  architecture: [
    "Trigger: Inclusão de nova guia",
    "Power Automate: fluxo de registro e atualização de status",
    "Excel Online: armazenamento central",
    "SharePoint: compartilhamento e versionamento"
  ],
    demoUrl: "/projeto/automacao-fluxos",
    githubUrl: "https://github.com/GustavoMelo1",
    images: [
      "/workflow-automation-interface.png",
      "/workflow-automation-interface.png",
      "/workflow-automation-interface.png",
    ],
  },
  "lista-tarefas": {
    title: "Lista de Tarefas",
    subtitle: "Aplicação de Produtividade",
    description: "Aplicação web para gerenciamento de tarefas com interface moderna.",
    fullDescription:
      "Aplicação web moderna para gerenciamento de tarefas pessoais e profissionais, com foco na usabilidade e experiência do usuário.",
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
    demoUrl: "/projeto/lista-tarefas",
    githubUrl: "https://github.com/GustavoMelo1",
    images: [
      "/modern-todo-list-app-interface.jpg",
      "/modern-todo-list-app-interface.jpg",
      "/modern-todo-list-app-interface.jpg",
    ],
  },
}

// Gera as rotas estáticas
export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }))
}

// Props da página dinâmica
interface ProjectPageProps {
  params: { id: string }
}

// Página de detalhe
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.id]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
          <main className="pt-20 project-detail">
            <ProjectDetail project={project} />
          </main>
    </div>
  )
}
