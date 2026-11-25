'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useFavorites } from '@/context/FavoritesContext';
import type { Experience } from '@/types/experience';
import BookingPanel from './BookingPanel';
import CategoryTag from './CategoryTag';
import FavoriteButton from './FavoriteButton';
import RatingBadge from './RatingBadge';

const ExperienceDetail = ({ experience }: { experience: Experience }) => {
  const { id, title, description, destination, category, rating, imageUrl, durationHours } = experience;
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(id);

  // Título de la pestaña con el nombre de la experiencia; se restaura al salir.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} · Wanderlust Explorer`;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <article className="flex flex-col gap-6">
      <Link href="/experiences" className="w-fit text-sm font-medium text-stone-600 hover:text-stone-900">
        ← Volver al explorador
      </Link>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-stone-200 md:aspect-[21/9]">
        <Image src={imageUrl} alt={title} fill priority sizes="(min-width: 1152px) 1088px, 100vw" className="object-cover" />
        <FavoriteButton title={title} isFavorite={isFavorite} onToggle={() => toggleFavorite(id)} className="absolute right-4 top-4" />
      </div>
      <div className="grid gap-8 md:grid-cols-[1fr_20rem]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryTag category={category} />
            <RatingBadge rating={rating} />
            <span className="text-sm text-stone-500">⏱ {durationHours.toLocaleString('es-ES')} h</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
          <p className="text-stone-500">📍 {destination}</p>
          <p className="text-lg leading-relaxed text-stone-700">{description}</p>
        </div>
        <BookingPanel experience={experience} isFavorite={isFavorite} onToggleFavorite={() => toggleFavorite(id)} />
      </div>
    </article>
  );
};

export default ExperienceDetail;
