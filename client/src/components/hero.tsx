import { Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/contact";

const highlights = [
  { value: "15+ anos", label: "em sistemas críticos para o setor público" },
  { value: "Scrum", label: "certificações SFPC e CSD" },
  { value: "2 pós-graduações", label: "Padrões de Projeto e Cloud Computing" },
];

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 sm:pt-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
          Ely Frank Matias Oliveira
        </h1>
        <p className="text-xl sm:text-2xl text-slate-700 mb-5">
          Desenvolvedor Sênior Full Stack
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-slate-600 mb-8">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5" aria-hidden="true" />
            Natal, RN
          </span>
          <span className="flex items-center bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2" aria-hidden="true"></span>
            Aberto a oportunidades remotas — CLT ou PJ
          </span>
        </div>

        <p className="text-lg sm:text-xl text-slate-800 leading-relaxed mb-4">
          Mais de 15 anos desenvolvendo sistemas críticos para órgãos públicos federais e estaduais, como STF, ENAP, CBMDF e AGRODEFESA.
        </p>
        <p className="text-slate-700 leading-relaxed mb-8">
          Responsável técnico por projetos em PHP (Laravel, Symfony, Zend), Vue.js, Angular, React e PostgreSQL, em times ágeis. Também desenvolvo agentes de IA para automação de processos com MCP (Model Context Protocol).
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center mb-6">
          <a
            href="#contato"
            className="inline-flex items-center justify-center border-2 border-brand bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark hover:border-brand-dark transition-colors duration-200"
          >
            Entre em Contato
          </a>
          <a
            href={CV_URL}
            download
            className="inline-flex items-center justify-center border-2 border-brand text-brand px-8 py-3 rounded-lg font-semibold hover:bg-brand hover:text-white transition-colors duration-200"
          >
            <Download className="w-5 h-5 mr-2" aria-hidden="true" />
            Baixar Currículo (PDF)
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-1 font-medium text-slate-700 hover:text-brand">
            <LinkedInIcon className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-1 font-medium text-slate-700 hover:text-brand">
            <GitHubIcon className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>

        <ul className="grid sm:grid-cols-3 gap-4 text-center border-t border-slate-200 pt-8">
          {highlights.map((item) => (
            <li key={item.value}>
              <span className="block text-xl font-bold text-slate-900">{item.value}</span>
              <span className="block text-sm text-slate-600">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
