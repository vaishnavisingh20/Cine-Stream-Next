import MovieGrid from '@/components/ui/MovieGrid';
import { searchMovies } from '@/lib/omdb';

interface Props {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || '';

  if (!query) {
    return (
      <div className="text-white text-center mt-20">
        <h1>No search query provided 😅</h1>
      </div>
    );
  }

  const data = await searchMovies(query);
  const movies = data?.Search || [];

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl mb-8">
        Results for: <span className="text-purple-400">{query}</span>
      </h1>

      {movies.length === 0 ? (
        <p className="text-gray-400 text-center">No movies found 😢</p>
      ) : (
        <MovieGrid movies={movies} title="Search Results" />
      )}
    </div>
  );
}