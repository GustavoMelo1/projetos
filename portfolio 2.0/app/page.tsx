export default function HomePage() {
  return (
    <div>
      {/* HEADER fixo do site: navegação principal */}
      <header className="top-bar">
        <div className="container">
          {/* marca/atalho para o topo */}
          <a className="logo" href="#">
            Gustavo
          </a>

          {/* aria-label ajuda leitores de tela a identificar a barra de navegação */}
          <nav aria-label="Navegação principal">
            {/* usar <ul> dá semântica de lista de links */}
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN: conteúdo principal da página */}
      <main>
        {/* ====== SEÇÃO: SOBRE ======
            Regra: 1 <h1> por página; subtítulos internos são <h2> */}
        <section id="sobre" className="sobre-mim">
          <div className="sobre-texto">
            <h1>Sobre Mim</h1>

            {/* "chips" como lista: acessível e fácil de manter */}
            <ul className="chips">
              <li className="chip">Estudante</li>
              <li className="chip">Automatização</li>
              <li className="chip">Desenvolvimento</li>
              <li className="chip">Integrações</li>
            </ul>

            {/* parágrafo curto com foco em impacto */}
            <p>
              Estudante de Eng. de Software focado em Back-end / Full-stack. Experiência com automação, soluções web e
              integrações.
            </p>
          </div>

          {/* figure/figcaption seriam opcionais; aqui só a imagem com alt descritivo */}
          <div className="foto">
            <img src="/Gustavo.jpeg" alt="Foto do Gustavo" />
          </div>
        </section>

        {/* ====== SEÇÃO: PROJETOS ====== */}
        <section id="projetos" className="projetos">
          <div className="container">
            <h2>
              Meus <span className="highlight">Projetos</span>
            </h2>
            <p className="section-subtitle">
              Alguns dos projetos que desenvolvi, focando em automação, integrações e soluções web.
            </p>

            <div className="projetos-grid">
              {/* 1) Automação de Fluxos */}
              <article className="project-card">
                <div className="project-image">
                  <img src="/workflow-automation-interface.png" alt="Automação de Fluxos" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Automação de Fluxos</h3>
                  <p className="project-description">Em Desenvolvimento.</p>
                  <div className="project-tags">
                    <span className="project-tag">Power Automate</span>
                    <span className="project-tag">SharePoint</span>
                    <span className="project-tag">Outlook</span>
                  </div>
                  <div className="project-actions">
                    <a href="/projeto/automacao-fluxos" className="btn-demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                    <a href="https://github.com/GustavoMelo1" target="_blank" rel="noopener noreferrer" className="btn-code">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Código
                    </a>
                  </div>
                </div>
              </article>

              {/* 2) Biografia das Empilhadeiras */}
              <article className="project-card">
                <div className="project-image">
                  <img src="/forklift-management-system-interface.jpg" alt="Sistema de Biografia das Empilhadeiras" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Biografia das Empilhadeiras</h3>
                  <p className="project-description">Em Desenvolvimento.</p>
                  <div className="project-tags">
                    <span className="project-tag">HTML</span>
                    <span className="project-tag">CSS</span>
                    <span className="project-tag">JavaScript</span>
                  </div>
                  <div className="project-actions">
                    <a href="/projeto/biografia-empilhadeiras" className="btn-demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                    <a href="https://github.com/GustavoMelo1" target="_blank" rel="noopener noreferrer" className="btn-code">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Código
                    </a>
                  </div>
                </div>
              </article>

              {/* 3) FinanFlow */}
              <article className="project-card">
                <div className="project-image">
                  <img src="/financial-automation-dashboard-dark-theme.jpg" alt="FinanFlow - Automação Financeira" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">FinanFlow</h3>
                  <p className="project-description">Em Desenvolvimento.</p>
                  <div className="project-tags">
                    <span className="project-tag">Power Automate</span>
                    <span className="project-tag">Excel Online</span>
                    <span className="project-tag">SharePoint</span>
                    <span className="project-tag">WebHooks</span>
                  </div>
                  <div className="project-actions">
                    <a href="/projeto/finanflow" className="btn-demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                    <a href="https://github.com/GustavoMelo1" target="_blank" rel="noopener noreferrer" className="btn-code">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Código
                    </a>
                  </div>
                </div>
              </article>

              {/* 4) Lista de Tarefas */}
              <article className="project-card">
                <div className="project-image">
                  <img src="/modern-todo-list-app-interface.jpg" alt="Lista de Tarefas" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Lista de Tarefas</h3>
                  <p className="project-description">Em Desenvolvimento.</p>
                  <div className="project-tags">
                    <span className="project-tag">HTML</span>
                    <span className="project-tag">CSS</span>
                    <span className="project-tag">JavaScript</span>
                  </div>
                  <div className="project-actions">
                    <a href="/projeto/lista-tarefas" className="btn-demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </a>
                    <a href="https://github.com/GustavoMelo1" target="_blank" rel="noopener noreferrer" className="btn-code">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Código
                    </a>
                  </div>
                </div>
              </article>
            </div>



            <div className="projects-footer">
              <a
                href="https://github.com/GustavoMelo1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Ver Todos no GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ====== SEÇÃO: HABILIDADES ====== */}
        <section id="habilidades" className="habilidades">
          <div className="container">
            <h2>
              Minhas <span className="highlight">Habilidades</span>
            </h2>
            <p className="section-subtitle">Tecnologias e ferramentas que utilizo para criar soluções eficientes.</p>

            <div className="skills-grid">
              {/* Frontend Card */}
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="skill-title">Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Next.js</span>
                </div>
              </div>

              {/* Backend Card */}
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                  </svg>
                </div>
                <h3 className="skill-title">Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">APIs REST</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>

              {/* Automação Card */}
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3 className="skill-title">Automação</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Power Automate</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Webhooks</span>
                  <span className="skill-tag">Integrações</span>
                </div>
              </div>

              {/* Ferramentas Card */}
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="skill-title">Ferramentas</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git/GitHub</span>
                  <span className="skill-tag">Microsoft Stack</span>
                  <span className="skill-tag">SharePoint</span>
                  <span className="skill-tag">Excel</span>
                </div>
              </div>
            </div>

            <div className="other-skills">
              <h3>Outras Competências</h3>
              <div className="other-skills-tags">
                <span className="other-skill-tag">Inglês B2</span>
                <span className="other-skill-tag">Facilidade em aprender</span>
                <span className="other-skill-tag">Resolução de Problemas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====== SEÇÃO: CONTATO ====== */}
        <section id="contato" className="contato">
          <div className="container">
            <h2>
              Entre em <span className="highlight">Contato</span>
            </h2>
            <p className="section-subtitle">
              Vamos conversar sobre oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia.
            </p>

            <div className="contact-grid">
              <div className="contact-channels">
                <h3>Escolha o canal que preferir:</h3>

                <div className="contact-cards">
                  <a
                    href="mailto:gustavomelo.oliveira@hotmail.com?subject=Contato%20pelo%20portf%C3%B3lio"
                    className="contact-card"
                  >
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="contact-info">
                      <h4>Email</h4>
                      <p>gustavomelo.oliveira@hotmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5551993679050?text=Oi%20Gustavo%2C%20vim%20pelo%20portf%C3%B3lio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div className="contact-info">
                      <h4>WhatsApp</h4>
                      <p>+55 51 99367-9050</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/GustavoMelo1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                    <div className="contact-info">
                      <h4>GitHub</h4>
                      <p>@GustavoMelo1</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gustavo-melo-oliveira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div className="contact-info">
                      <h4>LinkedIn</h4>
                      <p>Gustavo Melo</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/gustaaavomelo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div className="contact-info">
                      <h4>Instagram</h4>
                      <p>@gustaaavomelo</p>
                    </div>
                  </a>
                </div>
              </div>

              <aside className="contact-sidebar">
                <div className="contact-info-card">
                  <div className="info-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    <h4>Informações</h4>
                  </div>
                  <p className="info-subtitle">Detalhes sobre disponibilidade e foco profissional</p>

                  <div className="info-item">
                    <strong>Disponibilidade:</strong>
                    <div className="availability-tags">
                      <span className="availability-tag">Estágio</span>
                      <span className="availability-tag">Freela</span>
                      <span className="availability-tag">Jovem Aprendiz</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <strong>Foco:</strong>
                    <p>Back-end, automações, integrações, Full-stack</p>
                  </div>

                  <div className="info-item">
                    <strong>Resposta:</strong>
                    <p>em até 24h</p>
                  </div>

                  <a href="/Curriculo Gustavo.pdf" download className="download-cv">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7,10 12,15 17,10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Baixar CV
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Botão utilitário; o atributo "hidden" deixa fora da navegação até o JS mostrar */}
      <button id="toTop" className="to-top" type="button" aria-label="Voltar ao topo" hidden>
        ↑
      </button>
    </div>
  )
}
