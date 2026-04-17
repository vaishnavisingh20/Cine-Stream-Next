'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext<any>(null);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie: any) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.imdbID === movie.imdbID);
      if (exists) {
        return prev.filter((m) => m.imdbID !== movie.imdbID);
      } else {
        return [...prev, movie];
      }
    });
  };

  // ⭐ ADD THIS FUNCTION
  const isFavorite = (id: string) => {
    return favorites.some((movie) => movie.imdbID === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);