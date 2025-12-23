import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Contrato Seguro',
      desc: 'Trabalhamos com contrato formalizado para sua total segurança.',
      icon: '📜',
    },
    {
      title: 'Nota Fiscal',
      desc: 'Emitimos nota fiscal para todos os nossos serviços.',
      icon: '🧾',
    },
    {
      title: 'Frete Grátis',
      desc: 'Entrega gratuita para diversas regiões de São Gonçalo.',
      icon: '🎈',
    },
    {
      title: 'Equipe Profissional',
      desc: 'Atendentes treinados e uniformizados para o seu evento.',
      icon: '✨',
    },
  ];

  const delicias = [
    '/assets/delicia1.jpeg',
    '/assets/delicia2.jpeg',
    '/assets/delicia3.jpeg',
    '/assets/delicia4.jpeg',
    '/assets/delicia5.jpeg',
    '/assets/delicia6.jpeg',
    '/assets/delicia7.jpeg',
    '/assets/delicia8.jpeg',
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 card-hover"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delicias" className="py-20 bg-pink-50 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-kids">
            Nossas <span className="text-pink-500">Delícias</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Conheça um pouco do que preparamos com muito amor
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {[...delicias, ...delicias].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] md:w-[400px]">
                <img
                  src={src}
                  alt={`Delícia ${i + 1}`}
                  className="h-[400px] w-full object-cover rounded-[40px] shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
