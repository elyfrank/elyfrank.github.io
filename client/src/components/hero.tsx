export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-white text-4xl font-bold font-mono">
                &lt;/&gt;
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Ely Frank Matias Oliveira
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Desenvolvedor Sênior Full Stack
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-8">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Natal, RN
              </span>
              <span className="flex items-center bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Aberto a oportunidades remotas — CLT ou PJ
              </span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Desenvolvedor Sênior Full Stack com mais de 15 anos em sistemas críticos para órgãos públicos federais e estaduais, como STF, ENAP, CBMDF e AGRODEFESA. Responsável técnico por projetos em PHP (Laravel, Symfony, Zend), Vue.js, Angular, React e PostgreSQL, em times ágeis com Scrum (certificações SFPC e CSD). Experiência no desenvolvimento de agentes de IA para automação de processos com MCP (Model Context Protocol). Pós-graduado em Padrões de Projeto e em Cloud Computing.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-portfolio-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="border-2 border-portfolio-primary text-portfolio-primary px-8 py-3 rounded-lg font-semibold hover:bg-portfolio-primary hover:text-white transition-colors duration-200"
              >
                Ver Experiência
              </button>
              <a
                href="/Curriculo_Ely_Frank_Matias_Oliveira.pdf"
                download
                className="inline-flex items-center justify-center border-2 border-portfolio-primary text-portfolio-primary px-8 py-3 rounded-lg font-semibold hover:bg-portfolio-primary hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                </svg>
                Baixar Currículo (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
