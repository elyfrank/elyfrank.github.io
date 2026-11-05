import { ExternalLink } from "lucide-react";
import { GITHUB_URL } from "@/lib/contact";

const projects = [
  {
    name: "Agente de Finanças Pessoais",
    url: `${GITHUB_URL}/agente_financas_pessoais`,
    description:
      "Lê extratos bancários em CSV ou OFX, categoriza os gastos e responde perguntas em português. Os números são sempre calculados por código, nunca pelo modelo, e dados sensíveis são mascarados antes de qualquer envio a ele.",
    technologies: ["Python", "Agentes de IA", "Tool use"],
  },
  {
    name: "Agente de Pesquisa com IA",
    url: `${GITHUB_URL}/agente_resumo_pesquisa`,
    description:
      "Recebe uma pergunta, decide sozinho o que pesquisar, lê as páginas mais relevantes e entrega uma resposta resumida em português, com citações e fontes. Construído do zero, sem frameworks de agentes.",
    technologies: ["Python", "Agentes de IA", "Tool use"],
  },
  {
    name: "BookRats",
    url: `${GITHUB_URL}/bookrats`,
    description:
      "App Android de leitura em grupo, com ranking entre amigos. Os pontos são calculados no banco de dados, nunca no app: assim ninguém altera a própria pontuação, e uma mudança nas regras recalcula todo o histórico.",
    technologies: ["TypeScript", "React Native", "Expo", "Supabase"],
  },
  {
    name: "Jukebox",
    url: `${GITHUB_URL}/jukebox`,
    description:
      "App Android de fila de músicas em grupo: numa festa, num bar ou num carro cheio, as pessoas entram na mesma sala e sugerem músicas, e a fila atualiza em tempo real para todos.",
    technologies: ["TypeScript", "React Native", "Expo", "Supabase"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Projetos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Projetos pessoais com código público no GitHub
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li key={project.name} className="flex flex-col bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.name}</h3>
              <p className="text-slate-700 leading-relaxed mb-4 flex-1">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-5" aria-label="Tecnologias">
                {project.technologies.map((tech) => (
                  <li key={tech} className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código no GitHub: ${project.name}`}
                className="inline-flex items-center py-1 font-medium text-brand hover:text-brand-dark hover:underline"
              >
                Ver código no GitHub
                <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
