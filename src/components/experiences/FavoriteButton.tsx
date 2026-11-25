interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  title: string;
  className?: string;
}

const FavoriteButton = ({ isFavorite, onToggle, title, className = '' }: FavoriteButtonProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-pressed={isFavorite}
    aria-label={isFavorite ? `Quitar «${title}» de favoritos` : `Añadir «${title}» a favoritos`}
    className={`grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-transform active:scale-90 ${className}`}
  >
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.2 4.2 2.4h2c.6-1.2 2.1-2.4 4.2-2.4 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"
        className={isFavorite ? 'fill-rose-500 stroke-rose-500' : 'fill-transparent stroke-stone-700'}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default FavoriteButton;
