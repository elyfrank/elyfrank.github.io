import { Mail, Phone } from "lucide-react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_HREF } from "@/lib/contact";

const footerLinkClass = "p-2 text-slate-200 hover:text-white transition-colors duration-200";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-brand focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Navigation />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="bg-brand-dark text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-bold mb-1">Ely Frank Matias Oliveira</p>
          <p className="text-slate-200 mb-4">Desenvolvedor Sênior Full Stack</p>
          <div className="flex justify-center gap-4 mb-6">
            <a href={`mailto:${EMAIL}`} className={footerLinkClass} aria-label="Email">
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href={PHONE_HREF} className={footerLinkClass} aria-label="Telefone">
              <Phone className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass} aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass} aria-label="GitHub">
              <GitHubIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="border-t border-white/20 pt-6 text-slate-200 text-sm">
            © {new Date().getFullYear()} Ely Frank Matias Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
