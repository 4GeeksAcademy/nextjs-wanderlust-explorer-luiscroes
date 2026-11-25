'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import type { ExperienceFilters } from '@/types/experience';

type FilterKey = keyof ExperienceFilters;
const SEARCH_DEBOUNCE_MS = 300;

/** Sincroniza búsqueda y filtros con los query params de la URL. */
export const useFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters: ExperienceFilters = {
    search: searchParams.get('search') ?? '',
    category: searchParams.get('category') ?? '',
    destination: searchParams.get('destination') ?? '',
  };

  // El input de búsqueda tiene estado local para escribir con fluidez;
  // se prerrellena con el valor de la URL al cargar la página.
  const [searchInput, setSearchInput] = useState(filters.search);
  const [syncedSearch, setSyncedSearch] = useState(filters.search);
  if (filters.search !== syncedSearch) {
    // La URL cambió desde fuera (atrás/adelante o un enlace): actualiza el input.
    setSyncedSearch(filters.search);
    if (searchInput.trim() !== filters.search) setSearchInput(filters.search);
  }

  const setFilter = useCallback(
    (key: FilterKey, value: string) => {
      // Se parte de la URL actual del navegador para no perder un filtro aplicado justo antes.
      const params = new URLSearchParams(window.location.search);
      if (value) params.set(key, value);
      else params.delete(key);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router],
  );

  // Escribe el término en la URL 300 ms después de dejar de teclear.
  useEffect(() => {
    if (searchInput.trim() === filters.search) return;
    const timeoutId = setTimeout(() => setFilter('search', searchInput.trim()), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timeoutId);
  }, [searchInput, filters.search, setFilter]);

  const clearFilters = () => {
    setSearchInput('');
    router.replace(pathname, { scroll: false });
  };

  const hasActiveFilters = Boolean(filters.search || filters.category || filters.destination);

  return { filters, searchInput, setSearchInput, setFilter, clearFilters, hasActiveFilters };
};
