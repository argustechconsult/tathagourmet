import React, { useState, useEffect } from 'react';

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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 overflow-hidden bg-white scroll-mt-24"
    >
      {/* Background de bolinhas inspirado na primeira foto */}
      <div className="absolute inset-0 polka-dot-bg -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-bold shadow-sm border border-pink-100">
            <span className="animate-pulse">💖</span> Qualidade e Carinho em
            cada detalhe
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 font-kids">
            O famoso <span className="text-pink-500">Trenzinho de Lanches</span>{' '}
            na sua festa!
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Levamos nossas estações completas de Pipoca, Algodão Doce, Açaí e o
            exclusivo Trenzinho Gourmet para transformar seu evento em um
            momento inesquecível.
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
          <div className="relative h-[400px] w-full rounded-[40px] shadow-2xl border-4 border-white overflow-hidden group">
            {[
              '/assets/trem1.png',
              '/assets/trem2.png',
              '/assets/trem3.png',
              '/assets/trem4.png',
            ].map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Trenzinho ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Indicadores (Dots) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'bg-pink-500 w-6'
                      : 'bg-white/70 hover:bg-white'
                  }`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                />
              ))}
            </div>

            {/* Setas de Navegação (opcional, mas bom para UX) */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1))
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
