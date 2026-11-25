'use client';
import Link from 'next/link';
import EmptyState from '@/components/experiences/EmptyState';
import ExperienceGrid from '@/components/experiences/ExperienceGrid';
import { useFavorites } from '@/context/FavoritesContext';
import { EXPERIENCES } from '@/data/experiences';

const FavoritesPage = () => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favorites = EXPERIENCES.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <section className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Tus favoritos</h1>
        <p className="mt-2 text-stone-600">
          {favorites.length} {favorites.length === 1 ? 'experiencia guardada' : 'experiencias guardadas'}
        </p>
      </header>
      {favorites.length > 0 ? (
        <ExperienceGrid experiences={favorites} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
      ) : (
        <EmptyState title="Aún no tienes favoritos" message="Pulsa el corazón de cualquier experiencia para guardarla aquí.">
          <Link href="/experiences" className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white">
            Explorar experiencias
          </Link>
        </EmptyState>
      )}
    </section>
  );
};

export default FavoritesPage;
