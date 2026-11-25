export type Category = 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: Category;
  /** "Ciudad, País", p. ej. "Split, Croatia" */
  destination: string;
  /** Precio por persona en euros */
  price: number;
  /** Valoración de 1 a 5 */
  rating: number;
  imageUrl: string;
  durationHours: number;
}

export interface ExperienceFilters {
  search: string;
  /** Valor de categoría en minúsculas, tal como aparece en la URL ("" = todas) */
  category: string;
  /** País o ciudad de destino ("" = todos) */
  destination: string;
}

export interface CategoryOption {
  value: Category;
  label: string;
  emoji: string;
}
