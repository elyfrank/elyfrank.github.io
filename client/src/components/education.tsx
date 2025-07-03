export default function Education() {
  const education = {
    degree: "Análise e Desenvolvimento de Sistemas",
    status: "Em andamento",
    description: "Curso superior focado em desenvolvimento de software, análise de sistemas e tecnologias modernas."
  };

  const certifications = [
    {
      name: "DevOps Essentials Professional Certificate",
      code: "DEPC"
    },
    {
      name: "Scrum Foundation Professional Certificate",
      code: "SFPC"
    },
    {
      name: "Certified Scrum Developer",
      code: "CSD"
    }
  ];

  return (
    <section id="formacao" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Formação e Certificações
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Educação formal e certificações profissionais que validam minha expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-portfolio-primary rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3L1,9L12,15L21,12V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Formação Acadêmica</h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">{education.degree}</h4>
              <p className="text-slate-600 text-sm mb-2">{education.status}</p>
              <p className="text-slate-700 text-sm">
                {education.description}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15,3H6V17H18V6H15M6,1H16L20,5V17A2,2 0 0,1 18,19H6C4.89,19 4,18.1 4,17V3A2,2 0 0,1 6,1M9,7H15V9H9V7M9,11H15V13H9V11M9,15H13V17H9V15Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Certificações</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{cert.name}</h4>
                  <p className="text-slate-600 text-xs">{cert.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
