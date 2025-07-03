export default function Experience() {
  const experiences = [
    {
      period: "2024 - Atual",
      position: "Desenvolvedor Sênior",
      company: "Linuxell Informática",
      description: "Atuação na sustentação, evolução e desenvolvimento de novos sistemas para o Ministério do Trabalho e Emprego, utilizando tecnologias como AngularJS, PHP, Laravel e PostgreSQL. Aplicação de metodologias ágeis para aprimorar os processos de desenvolvimento.",
      technologies: ["PHP", "Laravel", "AngularJS", "PostgreSQL"],
      icon: "briefcase",
      color: "portfolio-primary"
    },
    {
      period: "2014 - 2024",
      position: "Desenvolvedor Full Stack",
      company: "Websis Tecnologia e Sistemas",
      description: "Desenvolvedor Full Stack com experiência em diversos projetos para o Governo Federal e Estadual. Principais clientes: ENAP, STF, SEST, PRODABEL (Prefeitura de Belo Horizonte) e CBMDF. Responsável técnico pelos projetos, atuando tanto no backend quanto no frontend.",
      clients: [
        "Escola Nacional de Administração Pública (ENAP)",
        "Supremo Tribunal Federal (STF)",
        "Serviço Social do Transporte (SEST)",
        "PRODABEL - Prefeitura de Belo Horizonte",
        "Corpo de Bombeiros Militar do DF (CBMDF)"
      ],
      icon: "code",
      color: "portfolio-accent"
    },
    {
      period: "2009 - 2012",
      position: "Analista GED/ECM",
      company: "Montreal Informática",
      description: "Primeira experiência em empresa de tecnologia. Evolução de auxiliar administrativo para analista e desenvolvedor em ferramentas de gerenciamento de conteúdo (Documentum e Captiva). Principais projetos para AVON e ANVISA, com foco em digitalização de informações.",
      technologies: ["Documentum", "Captiva", "GED/ECM"],
      icon: "file-text",
      color: "portfolio-secondary"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "briefcase":
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm2 4V4h-4v2h4z"/>
          </svg>
        );
      case "code":
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        );
      case "file-text":
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="experiencia" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mais de 15 anos desenvolvendo soluções tecnológicas para governo e empresas privadas
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-300"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12 last:mb-0">
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                exp.color === 'portfolio-primary' ? 'bg-blue-600' :
                exp.color === 'portfolio-accent' ? 'bg-blue-500' :
                'bg-slate-600'
              }`}>
                {getIcon(exp.icon)}
              </div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    <span className="text-sm text-slate-500 mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-semibold text-slate-900">{exp.position}</h3>
                    <p className={`font-medium ${
                      exp.color === 'portfolio-primary' ? 'text-blue-600' :
                      exp.color === 'portfolio-accent' ? 'text-blue-500' :
                      'text-slate-600'
                    }`}>{exp.company}</p>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.clients && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Principais Clientes:</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        {exp.clients.map((client, clientIndex) => (
                          <li key={clientIndex}>• {client}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            exp.color === 'portfolio-primary' ? 'bg-blue-100 text-blue-600' :
                            exp.color === 'portfolio-accent' ? 'bg-blue-50 text-blue-500' :
                            'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
