'use client';

import { useFavorites } from '@/context/FavoritesContext';
import MovieGrid from '@/components/ui/MovieGrid';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Your Favorites ❤️
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No favorites yet 😢 <br />
          Start adding some movies!
        </p>
      ) : (
        <MovieGrid movies={favorites} title="Your Favorite Movies" />
      )}
    </div>
  );
}