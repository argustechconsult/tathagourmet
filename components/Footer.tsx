import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 group text-left"
              >
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <span className="font-bold text-xl text-gray-900 uppercase">
                  Thatá <span className="text-pink-500">Gourmet</span>
                </span>
              </button>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Sua melhor opção em entretenimento gastronômico para festas e
              eventos em São Gonçalo, Niterói e Maricá.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/thatagourmet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center hover:text-pink-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-gray-400">
              Atendimento
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li>Segunda a Sexta: 09h às 18h</li>
              <li>Sábado: 10h às 14h</li>
              <li>
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="hover:text-pink-500 transition-colors"
                >
                  (21) 97167-0109
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-gray-400">
              Localização
            </h4>
            <p className="text-gray-600 leading-relaxed">
              São Gonçalo - RJ
              <br />
              Atendemos Niterói, Maricá e Região Metropolitana.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Thatá Gourmet. Todos os direitos
            reservados.
          </p>
          <a
            href="https://argustech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Produzido por
            <span className="font-bold text-gray-800">Argus</span>
            <span className="font-bold" style={{ color: '#0000FF' }}>
              Tech
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
