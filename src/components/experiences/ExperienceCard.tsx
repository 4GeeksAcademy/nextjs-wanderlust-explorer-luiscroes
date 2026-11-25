import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/experiences';
import type { Experience } from '@/types/experience';
import CategoryTag from './CategoryTag';
import FavoriteButton from './FavoriteButton';
import RatingBadge from './RatingBadge';

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  priority?: boolean;
}

const ExperienceCard = ({ experience, isFavorite, onToggleFavorite, priority = false }: ExperienceCardProps) => {
  const { id, title, destination, category, price, rating, imageUrl } = experience;

  return (
    <article className="group relative flex flex-col">
      <Link href={`/experiences/${id}`} className="flex flex-col gap-3 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm text-stone-500">{destination}</p>
            <RatingBadge rating={rating} />
          </div>
          <h3 className="line-clamp-2 font-semibold leading-snug text-stone-900">{title}</h3>
          <div className="mt-1 flex items-center justify-between gap-2">
            <CategoryTag category={category} />
            <p className="text-sm text-stone-700">
              <span className="font-semibold text-stone-900">{formatPrice(price)}</span> / persona
            </p>
          </div>
        </div>
      </Link>
      <FavoriteButton
        title={title}
        isFavorite={isFavorite}
        onToggle={() => onToggleFavorite(id)}
        className="absolute right-3 top-3"
      />
    </article>
  );
};

export default ExperienceCard;
