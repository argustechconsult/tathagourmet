//import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import { SERVICES, PROMOS, WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  const handleInternalNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
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
    <div className="min-h-screen selection:bg-pink-100 selection:text-pink-600">
      <Header />

      <main>
        <Hero />

        <Features />

        {/* Trenzinho Showcase - Inspirado na Foto 2 e 4 */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-[50px] overflow-hidden shadow-2xl border border-gray-100 grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>{' '}
                  Sucesso em Niterói e Maricá
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-kids text-gray-900 leading-tight">
                  Nosso Famoso <span className="text-blue-500">Tren</span>
                  <span className="text-yellow-500">zi</span>
                  <span className="text-red-500">nho</span> de Lanches 🚂
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Uma estrutura colorida e lúdica (Azul, Amarelo e Vermelho) que
                  encanta as crianças. Servimos nossos mini lanchinhos
                  artesanais com o máximo de capricho.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm">
                    🌭 Hot Dog Especial
                  </span>
                  <span className="px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full font-bold text-sm">
                    🍔 Mini Lanchinhos
                  </span>
                  <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold text-sm">
                    🍟 Batata Crocante
                  </span>
                </div>
                <a
                  href="#calculator"
                  onClick={(e) => handleInternalNav(e, '#calculator')}
                  className="inline-flex items-center font-bold text-pink-500 hover:gap-2 transition-all group"
                >
                  Ver disponibilidade para meu evento{' '}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
              <div className="relative h-64 lg:h-auto trenzinho-gradient flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/assets/lanche1.jpeg"
                    className="rounded-2xl shadow-xl rotate-3 border-4 border-white"
                    alt="Mini Lanchinhos"
                  />
                  <img
                    src="/assets/lanche2.jpeg"
                    className="rounded-2xl shadow-xl -rotate-3 border-4 border-white translate-y-8"
                    alt="Hot Dog Festa"
                  />
                </div>
                {/* Badge de localização real */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-xs font-bold text-gray-800">
                  📍 Sapê, Niterói
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Services Display */}
        <section
          id="services"
          className="py-24 bg-gray-50/50 relative scroll-mt-24"
        >
          <div className="absolute inset-0 polka-dot-bg -z-10"></div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="text-center md:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-kids">
                  Nossas Estações 🍿
                </h2>
                <p className="text-gray-500 max-w-lg">
                  Estações personalizadas com o tema da sua festa. Pipoca,
                  Algodão Doce e muito mais!
                </p>
              </div>
              <div className="bg-pink-500 text-white px-6 py-3 rounded-2xl font-bold text-sm uppercase shadow-lg shadow-pink-100 self-center md:self-end">
                ⏱️ 4 Horas de Serviço
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100 card-hover flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                      {service.emoji}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-kids">
                      {service.name}
                    </h3>
                    {service.description && (
                      <p className="text-xs text-gray-400 mb-4 italic leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block uppercase font-bold">
                        Investimento
                      </span>
                      <span className="text-2xl font-bold text-gray-900 font-kids">
                        R$ {service.price}
                      </span>
                    </div>
                    <a
                      href="#calculator"
                      onClick={(e) => handleInternalNav(e, '#calculator')}
                      className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                    >
                      +
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotions Showcase */}
        <section
          id="promos"
          className="py-24 bg-white relative overflow-hidden scroll-mt-24"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-pink-500 font-bold tracking-widest uppercase text-sm">
                Combos de Sucesso
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 font-kids">
                Promoções Especiais 🥳
              </h2>
              <p className="text-gray-500 mt-4">
                Pipoca de Cinema + Algodão Doce e muito mais para sua alegria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROMOS.map((promo) => (
                <div key={promo.id} className="relative group flex h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-[40px] blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white p-10 rounded-[40px] shadow-xl flex flex-col w-full border border-gray-100">
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-5xl">{promo.emoji}</div>
                      <span className="bg-yellow-100 text-yellow-700 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter">
                        Mais Pedido
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-kids">
                      {promo.name}
                    </h3>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {promo.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-gray-600 font-medium"
                        >
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-[10px] text-green-600 font-bold">
                            ✓
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-8 border-t border-gray-100">
                      <div className="mb-6">
                        <span className="text-gray-400 text-sm block">
                          A partir de
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-gray-900 font-kids">
                            R$ {promo.price}
                          </span>
                          <span className="text-gray-400 font-medium text-sm">
                            / 4h
                          </span>
                        </div>
                      </div>
                      <a
                        href="#calculator"
                        onClick={(e) => handleInternalNav(e, '#calculator')}
                        className="w-full py-5 bg-pink-500 text-white text-center rounded-2xl font-bold shadow-lg shadow-pink-100 hover:bg-pink-600 transition-all block"
                      >
                        Reservar Combo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Calculator />

        {/* Gallery Section - Baseada nas fotos reais enviadas */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-kids">
                Momentos Thatá Gourmet 📸
              </h2>
              <p className="text-gray-500 mt-2 italic">
                Fotos reais dos nossos eventos em São Gonçalo, Niterói e Maricá
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Foto 1 - Estação Colorida */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Complexo do Salgueiro"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Complexo do Salgueiro
                  </span>
                  <span className="text-pink-300 text-[10px] uppercase font-bold">
                    Estação de Pipoca & Algodão
                  </span>
                </div>
              </div>

              {/* Foto 2 - Trenzinho */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1533035350221-afc03314058e?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Sapê Niterói"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Sapê, Niterói
                  </span>
                  <span className="text-blue-300 text-[10px] uppercase font-bold">
                    Trenzinho de Lanches
                  </span>
                </div>
              </div>

              {/* Foto 4 - Espaço Casarão */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4] md:col-span-2 lg:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Espaço Casarão Maricá"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Espaço Casarão, Maricá
                  </span>
                  <span className="text-yellow-300 text-[10px] uppercase font-bold">
                    Combo Completo
                  </span>
                </div>
              </div>

              {/* Foto 9 - OAF Inflável */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Jardim Catarina"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Jardim Catarina
                  </span>
                  <span className="text-red-300 text-[10px] uppercase font-bold">
                    Inauguração OAF
                  </span>
                </div>
              </div>

              {/* Foto 6 - Casa Amarela */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1504118544055-53e89f2a99d2?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Casa Amarela"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Casa Amarela
                  </span>
                  <span className="text-purple-300 text-[10px] uppercase font-bold">
                    Salão de Festas
                  </span>
                </div>
              </div>

              {/* Foto 8 - Estação Hot Dog */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1541232399669-e347521e118f?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Cachorro Quente"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Evento Corporativo
                  </span>
                  <span className="text-orange-300 text-[10px] uppercase font-bold">
                    Estação Cachorro Quente
                  </span>
                </div>
              </div>

              {/* Foto 3 - Lanchinhos Close */}
              <div className="group relative overflow-hidden rounded-[35px] shadow-lg aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f6?q=80&w=400&h=600&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Lanchinhos"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm">
                    📍 Qualidade Thatá
                  </span>
                  <span className="text-green-300 text-[10px] uppercase font-bold">
                    Mini Lanchinhos Artesanais
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-[40px] shadow-sm border border-pink-50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  T
                </div>
                <div>
                  <h4 className="font-bold text-xl font-kids">Thatá Gourmet</h4>
                  <p className="text-gray-400 text-sm">
                    Trabalhamos com contrato e emitimos nota fiscal.
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="px-8 py-4 bg-pink-500 text-white rounded-2xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-100"
              >
                Falar com a Thatá
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp for mobile */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
