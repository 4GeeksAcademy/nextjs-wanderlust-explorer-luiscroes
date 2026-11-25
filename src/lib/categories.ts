import type { Category, CategoryOption } from '@/types/experience';

export const CATEGORIES: CategoryOption[] = [
  { value: 'Adventure', label: 'Aventura', emoji: '🧗' },
  { value: 'Culture', label: 'Cultura', emoji: '🏛️' },
  { value: 'Food', label: 'Gastronomía', emoji: '🍜' },
  { value: 'Wellness', label: 'Bienestar', emoji: '🧘' },
  { value: 'Nature', label: 'Naturaleza', emoji: '🌿' },
];

export const getCategoryOption = (category: Category): CategoryOption =>
  CATEGORIES.find((option) => option.value === category) ?? CATEGORIES[0];
