import { CATEGORIES } from '@/lib/categories';

interface FilterBarProps {
  category: string;
  destination: string;
  countries: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

const chipClass = (isActive: boolean) =>
  `shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500'
  }`;

const FilterBar = ({ category, destination, countries, onCategoryChange, onDestinationChange }: FilterBarProps) => (
  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
    <div role="group" aria-label="Filtrar por categoría" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
      <button type="button" aria-pressed={!category} onClick={() => onCategoryChange('')} className={chipClass(!category)}>
        Todas
      </button>
      {CATEGORIES.map(({ value, label, emoji }) => {
        const isActive = category.toLowerCase() === value.toLowerCase();
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onCategoryChange(isActive ? '' : value.toLowerCase())}
            className={chipClass(isActive)}
          >
            <span aria-hidden>{emoji}</span> {label}
          </button>
        );
      })}
    </div>
    <label className="flex items-center gap-2 text-sm text-stone-600">
      <span className="shrink-0">Destino</span>
      <select
        value={destination}
        onChange={(event) => onDestinationChange(event.target.value)}
        className="h-10 w-full rounded-full border border-stone-300 bg-white px-4 text-stone-900 md:w-56"
      >
        <option value="">Todos los destinos</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default FilterBar;
