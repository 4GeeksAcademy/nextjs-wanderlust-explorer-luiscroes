import { useMemo } from 'react';
import { EXPERIENCES } from '@/data/experiences';
import { filterExperiences } from '@/lib/experiences';
import type { ExperienceFilters } from '@/types/experience';

/** Devuelve las experiencias que cumplen búsqueda (regex), categoría y destino a la vez. */
export const useExperiences = ({ search, category, destination }: ExperienceFilters) =>
  useMemo(
    () => filterExperiences(EXPERIENCES, { search, category, destination }),
    [search, category, destination],
  );
