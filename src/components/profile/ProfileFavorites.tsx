'use client';
import { useFavorites } from '@/context/FavoritesContext';
import { EXPERIENCES } from '@/data/experiences';
import FavoritesSummary from './FavoritesSummary';

/** Lee el estado compartido de favoritos y lo pasa como props al resumen. */
const ProfileFavorites = () => {
  const { favoriteIds } = useFavorites();
  const favorites = EXPERIENCES.filter((experience) => favoriteIds.includes(experience.id));
  return <FavoritesSummary favorites={favorites} />;
};

export default ProfileFavorites;
