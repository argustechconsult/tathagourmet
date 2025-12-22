
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Contrato Seguro',
      desc: 'Trabalhamos com contrato formalizado para sua total segurança.',
      icon: '📜'
    },
    {
      title: 'Nota Fiscal',
      desc: 'Emitimos nota fiscal para todos os nossos serviços.',
      icon: '🧾'
    },
    {
      title: 'Frete Grátis',
      desc: 'Entrega gratuita para diversas regiões de São Gonçalo.',
      icon: '🎈'
    },
    {
      title: 'Equipe Profissional',
      desc: 'Atendentes treinados e uniformizados para o seu evento.',
      icon: '✨'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 card-hover">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
