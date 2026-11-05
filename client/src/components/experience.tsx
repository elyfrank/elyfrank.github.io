const experiences = [
  {
    period: "2024 - Atual",
    position: "Desenvolvedor Sênior",
    company: "Linuxell Informática",
    description:
      "Atualmente na Agência Goiana de Defesa Agropecuária (AGRODEFESA), atuo no desenvolvimento e sustentação de sistemas críticos, como o SIDAGO, em time ágil com Scrum.",
    highlights: [
      "Digitalização da emissão de Guia de Trânsito Animal (GTA), Permissões de Trânsito de Vegetais (PTV) e passaporte equestre",
      "Modernização da defesa sanitária e dos serviços de fiscalização do estado",
    ],
    clients: ["Agência Goiana de Defesa Agropecuária (AGRODEFESA)", "Ministério do Trabalho e Emprego (MTE)"],
    technologies: ["PHP", "Laravel", "AngularJS", "PostgreSQL"],
  },
  {
    period: "2014 - 2024",
    position: "Desenvolvedor Full Stack",
    company: "Websis Tecnologia e Sistemas",
    description:
      "Desenvolvimento de diversos projetos para o Governo Federal e Estadual. Responsável técnico pelos projetos, atuando tanto no backend quanto no frontend.",
    highlights: [],
    clients: [
      "Escola Nacional de Administração Pública (ENAP)",
      "Supremo Tribunal Federal (STF)",
      "Serviço Social do Transporte (SEST)",
      "PRODABEL - Prefeitura de Belo Horizonte",
      "Corpo de Bombeiros Militar do DF (CBMDF)",
    ],
    technologies: ["PHP", "Laravel", "Symfony", "Zend", "Vue.js", "Angular", "React", "TypeScript", "PostgreSQL", "MySQL", "Oracle", "Docker"],
  },
  {
    period: "2009 - 2012",
    position: "Analista GED/ECM",
    company: "Montreal Informática",
    description:
      "Primeira experiência em empresa de tecnologia, com evolução de auxiliar administrativo para analista e desenvolvedor em ferramentas de gerenciamento de conteúdo (Documentum e Captiva), com foco em digitalização de informações.",
    highlights: [],
    clients: ["AVON", "Agência Nacional de Vigilância Sanitária (ANVISA)"],
    technologies: ["Documentum", "Captiva", "GED/ECM"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mais de 15 anos desenvolvendo soluções tecnológicas para governo e empresas privadas
          </p>
        </div>

        <ol className="border-l-2 border-slate-200 ml-1.5 space-y-10">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative pl-6 sm:pl-8">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand border-[3px] border-white" aria-hidden="true"></span>

              <div className="sm:flex sm:justify-between sm:items-baseline sm:gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.position}</h3>
                  <p className="font-medium text-brand">{exp.company}</p>
                </div>
                <p className="text-sm font-medium text-slate-600 whitespace-nowrap mt-1 sm:mt-0">{exp.period}</p>
              </div>

              <p className="text-slate-700 leading-relaxed">{exp.description}</p>

              {exp.highlights.length > 0 && (
                <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              <h4 className="font-semibold text-slate-900 mt-4 mb-1">Principais clientes</h4>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                {exp.clients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tecnologias">
                {exp.technologies.map((tech) => (
                  <li key={tech} className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
