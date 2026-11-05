import { Download, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

const contacts = [
  { type: "Email", description: "Respondo em até 24 horas", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
  { type: "Telefone", description: "Disponível para chamadas", value: PHONE_DISPLAY, href: PHONE_HREF, Icon: Phone },
  { type: "LinkedIn", description: "Trajetória profissional", value: "ely-frank", href: LINKEDIN_URL, Icon: LinkedInIcon, external: true },
  { type: "GitHub", description: "Código dos meus projetos", value: "elyfrank", href: GITHUB_URL, Icon: GitHubIcon, external: true },
];

export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Estou em Natal, RN, aberto a oportunidades remotas — CLT ou PJ — como Desenvolvedor Sênior Full Stack. Se você tem uma vaga ou quer conhecer melhor minha experiência, fale comigo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center border-2 border-brand bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark hover:border-brand-dark transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
            Enviar Email
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

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map(({ type, description, value, href, Icon, external }) => (
            <li key={type}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block h-full bg-slate-50 rounded-lg p-5 border border-slate-200 hover:border-brand transition-colors duration-200"
              >
                <span className="flex items-center font-semibold text-slate-900 mb-1">
                  <Icon className="w-5 h-5 mr-2 text-brand" aria-hidden="true" />
                  {type}
                </span>
                <span className="block text-sm text-slate-600 mb-2">{description}</span>
                <span className="block font-medium text-brand break-words">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
