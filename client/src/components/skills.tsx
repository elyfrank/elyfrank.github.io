const skillCategories = [
  { title: "Backend", skills: ["PHP", "Laravel", "Node.js", "Zend Framework", "Symfony", "NestJS"] },
  { title: "Frontend", skills: ["Angular / AngularJS", "Vue.js / Vue 3", "React", "JavaScript", "TypeScript", "Vuetify"] },
  { title: "Banco de Dados", skills: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "Doctrine ORM"] },
  { title: "DevOps & Tools", skills: ["Docker", "Docker Compose", "Git / SVN", "Linux", "SIMEC"] },
  { title: "IA & Agentes", skills: ["Agentes de IA", "MCP (Model Context Protocol)", "Automação de processos com IA", "Integração com LLMs", "Engenharia de prompts"] },
  { title: "Metodologias Ágeis", skills: ["Scrum", "Sprints e planejamento", "Daily, review e retrospectiva", "Gestão de backlog"] },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tecnologias, ferramentas e práticas com que trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="px-3 py-1 rounded-full text-sm bg-white border border-slate-200 text-slate-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
