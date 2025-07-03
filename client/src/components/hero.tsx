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
            <div className="w-32 h-32 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
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
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Natal, RN
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                36 anos
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Solteiro
              </span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Desenvolvedor Full Stack com mais de 15 anos de experiência em desenvolvimento de sistemas para o setor público e privado. 
              Especializado em PHP, Laravel, AngularJS, e tecnologias modernas de desenvolvimento web. 
              Atualmente atuando como Desenvolvedor Sênior na Linuxell Informática, trabalhando em projetos para o Ministério do Trabalho e Emprego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
