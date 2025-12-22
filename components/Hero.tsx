
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 overflow-hidden bg-white scroll-mt-24">
      {/* Background de bolinhas inspirado na primeira foto */}
      <div className="absolute inset-0 polka-dot-bg -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-bold shadow-sm border border-pink-100">
            <span className="animate-pulse">💖</span> Qualidade e Carinho em cada detalhe
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 font-kids">
            O famoso <span className="text-pink-500">Trenzinho de Lanches</span> na sua festa!
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Levamos nossas estações completas de Pipoca, Algodão Doce, Açaí e o exclusivo Trenzinho Gourmet para transformar seu evento em um momento inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#calculator" 
              onClick={(e) => handleScroll(e, 'calculator')}
              className="px-10 py-5 bg-pink-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 hover:bg-pink-600 transition-all active:scale-95"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="px-10 py-5 bg-white text-gray-900 border-2 border-pink-100 rounded-2xl font-bold text-lg hover:border-pink-500 transition-all"
            >
              Ver Estações
            </a>
          </div>
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-1">✨ São Gonçalo</span>
            <span className="flex items-center gap-1">✨ Niterói</span>
            <span className="flex items-center gap-1">✨ Maricá</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
             <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1566417713940-05a74127c753?q=80&w=600&h=800&auto=format&fit=crop" alt="Pipoca Festa" className="rounded-[40px] shadow-2xl border-4 border-white" />
                <div className="bg-white p-4 rounded-3xl shadow-lg border border-pink-50">
                  <p className="font-bold text-pink-500 text-center text-sm uppercase">Atendimento Premium</p>
                </div>
             </div>
             <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1533035350221-afc03314058e?q=80&w=600&h=800&auto=format&fit=crop" alt="Algodão Doce" className="rounded-[40px] shadow-2xl border-4 border-white" />
                <div className="bg-yellow-400 p-4 rounded-3xl shadow-lg">
                  <p className="font-bold text-white text-center text-sm uppercase">Nota Fiscal e Contrato</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
