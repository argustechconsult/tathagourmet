import React, { useState, useMemo } from 'react';
import { SERVICES, PROMOS, WHATSAPP_NUMBER } from '../constants';
import { SelectionState } from '../types';

const Calculator: React.FC = () => {
  const [selections, setSelections] = useState<SelectionState>({
    services: [],
    promos: [],
  });

  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);

    if (value.length >= 5) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    } else if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    setEventData((prev) => ({ ...prev, date: value }));
  };

  const toggleService = (id: string) => {
    setSelections((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const togglePromo = (id: string) => {
    setSelections((prev) => ({
      ...prev,
      promos: prev.promos.includes(id)
        ? prev.promos.filter((p) => p !== id)
        : [...prev.promos, id],
    }));
  };

  const total = useMemo(() => {
    let sum = 0;
    selections.services.forEach((id) => {
      const item = SERVICES.find((s) => s.id === id);
      if (item) sum += item.price;
    });
    selections.promos.forEach((id) => {
      const item = PROMOS.find((p) => p.id === id);
      if (item) sum += item.price;
    });
    return sum;
  }, [selections]);

  const handleSendWhatsApp = () => {
    const selectedServices = selections.services
      .map((id) => SERVICES.find((s) => s.id === id)?.name)
      .join(', ');
    const selectedPromos = selections.promos
      .map((id) => PROMOS.find((p) => p.id === id)?.name)
      .join(', ');

    const message = `Olá Thatá Gourmet! Gostaria de um orçamento para meu evento.
    
📝 *Dados do Evento:*
Nome: ${eventData.name || 'Não informado'}
Data: ${eventData.date || 'Não informado'}
Local: ${eventData.location || 'Não informado'}

🛒 *Itens Selecionados:*
${selectedServices ? `• Estações: ${selectedServices}` : ''}
${selectedPromos ? `• Promoções: ${selectedPromos}` : ''}

💰 *Valor Estimado Inicial:* A partir de R$ ${total.toFixed(2)}
*Duração:* 4 horas`;

    const encodedMessage = encodeURIComponent(`*Orçamento vindo via web* 🌐

${message}`);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      '_blank',
    );

    setSelections({
      services: [],
      promos: [],
    });
    setEventData({
      name: '',
      date: '',
      location: '',
    });
  };

  return (
    <section
      id="calculator"
      className="py-20 bg-gray-900 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-kids uppercase">
            Monte seu Evento
          </h2>
          <p className="text-gray-400">
            Selecione os itens desejados e veja o valor na hora!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Selections column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-kids">
                <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Estações Individuais (4h)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SERVICES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleService(item.id)}
                    className={`p-4 rounded-2xl text-left transition-all border-2 ${
                      selections.services.includes(item.id)
                        ? 'border-pink-500 bg-pink-500/10 shadow-lg shadow-pink-500/10'
                        : 'border-gray-800 bg-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <div className="font-bold text-sm">{item.name}</div>
                    <div className="text-pink-400 text-xs mt-1">
                      A partir de R$ {item.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-yellow-400 font-kids">
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm text-gray-900">
                  2
                </span>
                Combos & Promoções
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {PROMOS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => togglePromo(item.id)}
                    className={`p-5 rounded-2xl text-left transition-all border-2 ${
                      selections.promos.includes(item.id)
                        ? 'border-yellow-400 bg-yellow-400/10'
                        : 'border-gray-800 bg-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-2xl">{item.emoji}</div>
                      <div className="px-2 py-0.5 bg-yellow-400 text-gray-900 text-[10px] font-bold rounded uppercase">
                        Promoção
                      </div>
                    </div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-xs text-gray-400 mt-1 mb-3">
                      Includes: {item.items.join(', ')}
                    </div>
                    <div className="text-yellow-400 font-bold">
                      A partir de R$ {item.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Column */}
          <div className="lg:col-span-1">
            <div className="bg-white text-gray-900 rounded-3xl p-8 sticky top-24 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-kids uppercase">
                Resumo
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                    placeholder="Seu nome"
                    value={eventData.name}
                    onChange={(e) =>
                      setEventData({ ...eventData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    Data do Evento
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="dd/mm/aaaa"
                    maxLength={10}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                    value={eventData.date}
                    onChange={handleDateChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    Localização
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-pink-500 outline-none"
                    placeholder="Bairro ou Cidade"
                    value={eventData.location}
                    onChange={(e) =>
                      setEventData({ ...eventData, location: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-3">
                <div className="flex justify-between text-gray-500">
                  <span>Itens Selecionados:</span>
                  <span className="font-bold">
                    {selections.services.length + selections.promos.length}
                  </span>
                </div>
                <div className="flex justify-between items-center text-2xl font-bold pt-4 font-kids">
                  <span>Total Inicial</span>
                  <span className="text-pink-600 text-xl">
                    A partir de R$ {total.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 text-center">
                  *Valor referente a 4 horas de serviço.
                </p>
              </div>

              <button
                onClick={handleSendWhatsApp}
                disabled={total === 0}
                className="w-full mt-8 bg-pink-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-100 hover:bg-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Solicitar via WhatsApp</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.126-.54c1.029.563 2.025.873 3.162.873 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm3.29 8.087c-.147.42-.763.79-1.057.85-.29.06-.592.09-1.498-.36-.906-.45-1.491-1.35-1.536-1.41-.045-.06-.375-.5-.375-.963 0-.463.24-.69.326-.78.086-.09.186-.112.248-.112h.176c.062 0 .153-.022.234.183.081.205.281.69.306.75.025.06.041.13.001.21-.04.08-.059.12-.119.193-.06.073-.12.163-.172.218-.057.06-.117.124-.05.24.067.117.297.489.638.79.438.388.807.508.925.567.117.06.186.05.255-.03.07-.08.298-.348.378-.468.08-.12.159-.1.269-.06.11.04.697.328.817.388.12.06.2.09.23.14.03.05.03.29-.117.71zM12.004 4c-4.418 0-8 3.582-8 8 0 1.572.455 3.04 1.237 4.283L4 20l3.857-1.19c1.2.66 2.56 1.04 4.004 1.04 4.418 0 8-3.582 8-8s-3.582-8-8-8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
