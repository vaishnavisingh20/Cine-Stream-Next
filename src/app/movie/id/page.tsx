import { getMovieDetails } from '@/lib/omdb';
import Image from 'next/image';

interface MovieDetailPageProps {
  params: { id: string };
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const movie = await getMovieDetails(params.id);

  if (movie.Response === 'False') {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Image
            src={movie.Poster === 'N/A' ? '/placeholder-poster.jpg' : movie.Poster}
            alt={movie.Title}
            width={400}
            height={600}
            className="rounded-2xl shadow-2xl"
          />
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {movie.Title}
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-300 text-lg">
                <span>⭐ {movie.imdbRating}/10</span>
                <span>📅 {movie.Year}</span>
                <span>⏱️ {movie.Runtime}</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">{movie.Plot}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Director:</span>
                <p className="font-semibold text-white">{movie.Director}</p>
              </div>
              <div>
                <span className="text-gray-400">Actors:</span>
                <p className="font-semibold text-white">{movie.Actors}</p>
              </div>
              <div>
                <span className="text-gray-400">Genre:</span>
                <p className="font-semibold text-white">{movie.Genre}</p>
              </div>
              <div>
                <span className="text-gray-400">Writer:</span>
                <p className="font-semibold text-white">{movie.Writer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}