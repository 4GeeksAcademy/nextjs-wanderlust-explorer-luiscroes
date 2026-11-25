import { EXPERIENCES } from '@/data/experiences';
import type { Experience, ExperienceFilters } from '@/types/experience';

/** Escapa los caracteres especiales para que "(" o "+" no rompan la RegExp. */
export const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const getCountry = (destination: string): string =>
  destination.split(',').at(-1)?.trim() ?? destination;

export const getCountries = (): string[] =>
  [...new Set(EXPERIENCES.map((experience) => getCountry(experience.destination)))].sort((a, b) =>
    a.localeCompare(b),
  );

export const getExperienceById = (id: string): Experience | undefined =>
  EXPERIENCES.find((experience) => experience.id === id);

export const filterExperiences = (
  experiences: Experience[],
  { search, category, destination }: ExperienceFilters,
): Experience[] => {
  const term = search.trim();
  const titleRegex = term ? new RegExp(escapeRegExp(term), 'i') : null;
  const destinationRegex = destination ? new RegExp(escapeRegExp(destination), 'i') : null;

  return experiences.filter(
    (experience) =>
      (!titleRegex || titleRegex.test(experience.title)) &&
      (!category || experience.category.toLowerCase() === category.toLowerCase()) &&
      (!destinationRegex || destinationRegex.test(experience.destination)),
  );
};

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(
    value,
  );
