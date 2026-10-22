export default function Contact() {
  const contactInfo = [
    {
      type: "Email",
      description: "Respondo em até 24 horas",
      value: "elyfrankmo@gmail.com",
      href: "mailto:elyfrankmo@gmail.com",
      icon: "mail",
      color: "blue"
    },
    {
      type: "Telefone",
      description: "Disponível para chamadas",
      value: "(61) 98180-2455",
      href: "tel:+5561981802455",
      icon: "phone",
      color: "green"
    },
    {
      type: "Localização",
      description: "Natal, Rio Grande do Norte — trabalho remoto",
      value: "Natal - RN",
      href: "#",
      icon: "location",
      color: "red"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "mail":
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        );
      case "phone":
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        );
      case "location":
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contato" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Estou aberto a oportunidades remotas — CLT ou PJ — como Desenvolvedor Sênior Full Stack. Se você tem uma vaga ou quer conhecer melhor minha experiência, fale comigo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className={`w-16 h-16 bg-${contact.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <div className={`text-${contact.color}-600`}>
                  {getIcon(contact.icon)}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{contact.type}</h3>
              <p className="text-slate-700 mb-4">{contact.description}</p>
              {contact.type === "Localização" ? (
                <p className="text-slate-700 text-sm whitespace-pre-line">
                  {contact.value}
                </p>
              ) : (
                <a
                  href={contact.href}
                  className="text-portfolio-primary hover:text-blue-700 font-medium"
                >
                  {contact.value}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-white">Procurando um Desenvolvedor Sênior Full Stack?</h3>
            <p className="text-white mb-6">
              São mais de 15 anos desenvolvendo sistemas críticos para o setor público, com PHP, JavaScript moderno, Scrum e agentes de IA. Estou disponível para oportunidades remotas, CLT ou PJ.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
              <a
                href="mailto:elyfrankmo@gmail.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Enviar Email
              </a>
              <a
                href="tel:+5561981802455"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Ligar Agora
              </a>
              <a
                href="/Curriculo_Ely_Frank_Matias_Oliveira.pdf"
                download
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Baixar Currículo (PDF)
              </a>
            </div>
            <div className="flex justify-center items-center gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/ely-frank-12872431/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-100 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <span className="text-blue-200">·</span>
              <a
                href="https://github.com/elyfrank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-100 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
