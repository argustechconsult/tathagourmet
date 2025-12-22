
import { ServiceItem, PromoItem } from './types';

export const SERVICES: ServiceItem[] = [
  { id: 'pipoca', name: 'Pipoca', price: 180, emoji: '🍿' },
  { id: 'algodao', name: 'Algodão Doce', price: 180, emoji: '🍥' },
  { id: 'sorvete', name: 'Sorvete', price: 499, emoji: '🍨' },
  { id: 'acai', name: 'Açaí', price: 499, emoji: '🍧' },
  { id: 'crepe', name: 'Crepe', price: 799, emoji: '🍢' },
  { id: 'chocolate', name: 'Cascata de Chocolate', price: 750, emoji: '🍫' },
  { id: 'pastel', name: 'Pastel', price: 599, emoji: '☺️' },
  { id: 'salada', name: 'Salada de Frutas', price: 599, emoji: '🍍' },
  { id: 'brigadeiria', name: 'Brigadeiria Fixa', price: 499, emoji: '💞' },
  { id: 'cachorro', name: 'Cachorro Quente', price: 599, emoji: '🌭' },
  { id: 'batata', name: 'Batata Turbinada', price: 699, emoji: '🍟', description: 'Com cascata de cheddar' },
];

export const PROMOS: PromoItem[] = [
  {
    id: 'promo-1',
    name: 'Combo Kids',
    emoji: '🍿🍥',
    price: 299,
    items: ['Pipoca', 'Algodão Doce']
  },
  {
    id: 'promo-2',
    name: 'Combo Gelado',
    emoji: '🍨🍧',
    price: 599,
    items: ['Sorvete', 'Açaí']
  },
  {
    id: 'promo-3',
    name: 'Mega Combo Festa',
    emoji: '🍿🍥🍨🍧',
    price: 699,
    items: ['Pipoca Doce', 'Pipoca Salgada', 'Algodão Doce', 'Sorvete', 'Açaí']
  }
];

export const WHATSAPP_NUMBER = '5521971070109'; // Phone from one of the images
