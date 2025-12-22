
export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
  description?: string;
}

export interface PromoItem {
  id: string;
  name: string;
  price: number;
  items: string[];
  emoji: string;
}

export interface SelectionState {
  services: string[];
  promos: string[];
}
