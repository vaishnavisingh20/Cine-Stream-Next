'use client';

import MovieCard from './MovieCard';
import { useFavorites } from '@/context/FavoritesContext';

interface OMDBMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  imdbRating?: string;
}

interface MovieGridProps {
  movies: OMDBMovie[];
  title: string;
}

export default function MovieGrid({ movies, title }: MovieGridProps) {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        {title}
        {favorites.length > 0 && (
          <div className="flex items-center gap-1 text-sm bg-white/10 px-3 py-1 rounded-full">
            ❤️ {favorites.length} Favorites
          </div>
        )}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={isFavorite(movie.imdbID)}
            onToggleFavorite={() => toggleFavorite(movie)}
          />
        ))}
      </div>
    </div>
  );
}