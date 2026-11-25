'use client';
import { useFavorites } from '@/context/FavoritesContext';
import { useExperiences } from '@/hooks/useExperiences';
import { useFilters } from '@/hooks/useFilters';
import { getCountries } from '@/lib/experiences';
import EmptyState from './EmptyState';
import ExperienceGrid from './ExperienceGrid';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';

const COUNTRIES = getCountries();

const ExperienceExplorer = () => {
  const { filters, searchInput, setSearchInput, setFilter, clearFilters, hasActiveFilters } = useFilters();
  const experiences = useExperiences(filters);
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <div className="flex flex-col gap-6">
      <SearchBar value={searchInput} onChange={setSearchInput} />
      <FilterBar
        category={filters.category}
        destination={filters.destination}
        countries={COUNTRIES}
        onCategoryChange={(value) => setFilter('category', value)}
        onDestinationChange={(value) => setFilter('destination', value)}
      />
      <div className="flex items-center justify-between text-sm text-stone-600">
        <p aria-live="polite">
          {experiences.length} {experiences.length === 1 ? 'experiencia' : 'experiencias'}
        </p>
        {hasActiveFilters && (
          <button type="button" onClick={clearFilters} className="font-medium text-stone-900 underline underline-offset-4">
            Limpiar filtros
          </button>
        )}
      </div>
      {experiences.length > 0 ? (
        <ExperienceGrid experiences={experiences} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
      ) : (
        <EmptyState title="No se encontraron resultados" message="Prueba con otro término o quita algún filtro.">
          <button type="button" onClick={clearFilters} className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white">
            Ver todas las experiencias
          </button>
        </EmptyState>
      )}
    </div>
  );
};

export default ExperienceExplorer;
