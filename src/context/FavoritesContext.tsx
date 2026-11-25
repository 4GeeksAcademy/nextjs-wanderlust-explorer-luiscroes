'use client';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface FavoritesValue {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesValue | null>(null);

/**
 * Estado de favoritos a nivel superior (useState nativo, sin librerías).
 * Vive en el layout para conservarse al navegar entre páginas; cada página
 * lo lee aquí y lo pasa hacia abajo como props a sus componentes.
 */
export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id],
    );
  }, []);

  const value = useMemo(() => ({ favoriteIds, toggleFavorite }), [favoriteIds, toggleFavorite]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = (): FavoritesValue => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites debe usarse dentro de <FavoritesProvider>');
  return context;
};
