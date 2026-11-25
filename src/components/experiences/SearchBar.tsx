interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative">
    <label htmlFor="experience-search" className="sr-only">
      Buscar experiencias por título
    </label>
    <span aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
      🔍
    </span>
    <input
      id="experience-search"
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Busca por título: vela, sushi, yoga…"
      autoComplete="off"
      className="h-12 w-full rounded-full border border-stone-300 bg-white pl-11 pr-4 text-base shadow-sm outline-none transition focus:border-stone-900 focus:ring-2 focus:ring-stone-900/10"
    />
  </div>
);

export default SearchBar;
