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
      description: "Natal, Rio Grande do Norte",
      value: "Av. Antonio Basilio 2977\nLagoa Nova - Natal - RN",
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
            Estou sempre aberto a novas oportunidades e desafios. Entre em contato para discutirmos seu próximo projeto.
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
            <h3 className="text-2xl font-bold mb-4 text-white">Pronto para o próximo projeto?</h3>
            <p className="text-white mb-6">
              Vamos criar algo incrível juntos. Entre em contato e vamos discutir como posso ajudar sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
