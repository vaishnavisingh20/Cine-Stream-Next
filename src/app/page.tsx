import MovieGrid from '@/components/ui/MovieGrid';
import { getPopularMovies } from '@/lib/omdb';

export default async function Home() {
  const data = await getPopularMovies();
  const movies = data.Search || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6">
          Welcome to Cine-Stream
        </h1>

        {/* ❌ Removed duplicate SearchBar */}

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-8">
          Discover amazing movies powered by OMDB API
        </p>
      </div>
      
      <MovieGrid movies={movies} title="Popular Movies" />
    </div>
  );
}