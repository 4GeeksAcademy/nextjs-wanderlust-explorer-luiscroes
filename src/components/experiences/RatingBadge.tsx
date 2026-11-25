const RatingBadge = ({ rating }: { rating: number }) => (
  <span className="inline-flex items-center gap-1 text-sm font-medium text-stone-800">
    <span aria-hidden className="text-amber-500">★</span>
    <span className="sr-only">Valoración:</span>
    {rating.toLocaleString('es-ES', { minimumFractionDigits: 1 })}
  </span>
);

export default RatingBadge;
