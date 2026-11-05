import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Pós-graduação - Arquitetura e Projetos de Cloud Computing",
    status: "Concluído",
    description:
      "Especialização focada no planejamento e implementação de infraestruturas escaláveis e seguras em nuvem, com ênfase em alta disponibilidade, otimização de custos e migração de serviços críticos.",
  },
  {
    degree: "Pós-graduação - Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projeto",
    status: "Concluído",
    description:
      "Especialização em padrões de projeto (Design Patterns), focada na criação de softwares escaláveis, reutilizáveis e de fácil manutenção.",
  },
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    status: "Concluído",
    description: "Curso superior focado em desenvolvimento de software, análise de sistemas e tecnologias modernas.",
  },
];

const certifications = [
  { name: "DevOps Essentials Professional Certificate", code: "DEPC" },
  { name: "Scrum Foundation Professional Certificate", code: "SFPC" },
  { name: "Certified Scrum Developer", code: "CSD" },
];

export default function Education() {
  return (
    <section id="formacao" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Formação e Certificações
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h3 className="flex items-center text-xl font-semibold text-slate-900 mb-4">
              <GraduationCap className="w-6 h-6 mr-3 text-brand" aria-hidden="true" />
              Formação Acadêmica
            </h3>
            <ul className="space-y-3">
              {education.map((edu) => (
                <li key={edu.degree} className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-1">{edu.degree}</h4>
                  <p className="text-sm font-medium text-slate-600 mb-2">{edu.status}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{edu.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="flex items-center text-xl font-semibold text-slate-900 mb-4">
              <Award className="w-6 h-6 mr-3 text-brand" aria-hidden="true" />
              Certificações
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.code} className="bg-white rounded-lg p-5 shadow-sm">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{cert.name}</h4>
                  <p className="text-sm text-slate-600">{cert.code}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
