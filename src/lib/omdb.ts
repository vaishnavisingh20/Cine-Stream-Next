const OMDB_API_KEY = process.env.OMDB_API_KEY;

export async function getPopularMovies() {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=avengers&type=movie`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  if (data.Response === "False") {
    console.error("OMDB Error:", data.Error);
    return { Search: [] }; // prevent crash
  }

  return data;
}


export async function searchMovies(query: string) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  if (data.Response === "False") {
    console.error("Search Error:", data.Error);
    return { Search: [] };
  }

  return data;
}

export async function getMovieDetails(imdbID: string) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`,
    { cache: 'force-cache' }
  );
  return res.json();
}