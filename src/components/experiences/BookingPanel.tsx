import { formatPrice } from '@/lib/experiences';
import type { Experience } from '@/types/experience';

interface BookingPanelProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const BookingPanel = ({ experience, isFavorite, onToggleFavorite }: BookingPanelProps) => (
  <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:sticky md:top-24">
    <p className="text-sm text-stone-500">Desde</p>
    <p className="text-3xl font-semibold">
      {formatPrice(experience.price)} <span className="text-base font-normal text-stone-500">/ persona</span>
    </p>
    <ul className="mt-4 flex flex-col gap-2 text-sm text-stone-600">
      <li>✓ Cancelación gratuita hasta 24 h antes</li>
      <li>✓ Guía local incluido</li>
      <li>✓ Duración: {experience.durationHours.toLocaleString('es-ES')} horas</li>
    </ul>
    <button
      type="button"
      onClick={onToggleFavorite}
      aria-pressed={isFavorite}
      className={`mt-6 w-full rounded-full py-3 font-semibold transition-colors ${
        isFavorite ? 'border border-stone-900 bg-white text-stone-900' : 'bg-orange-600 text-white hover:bg-orange-700'
      }`}
    >
      {isFavorite ? '♥ Guardada en favoritos' : '♡ Guardar en favoritos'}
    </button>
  </aside>
);

export default BookingPanel;
