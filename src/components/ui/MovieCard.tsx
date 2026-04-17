'use client';

import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';

interface OMDBMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  imdbRating?: string;
}

interface MovieCardProps {
  movie: OMDBMovie;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function MovieCard({ movie, isFavorite, onToggleFavorite }: MovieCardProps) {
  const posterUrl = movie.Poster === 'N/A' 
    ? '/placeholder-poster.jpg' 
    : movie.Poster;

  const rating = movie.imdbRating ? parseFloat(movie.imdbRating) : 0;

  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
      {/* Favorite Button */}
      <button
        onClick={onToggleFavorite}
        className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500/80"
      >
        <HeartIcon className={`w-6 h-6 ${isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-white'}`} />
      </button>

      {/* Poster Image */}
      <div className="relative mb-4 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
        <Image
          src={posterUrl}
          alt={movie.Title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Movie Info */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-white line-clamp-2 leading-tight">
          {movie.Title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-300">
          <span>{movie.Year}</span>
          {movie.imdbRating && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>{movie.imdbRating}/10</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}