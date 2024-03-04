
const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2Y1MDc1ODQ3YTUwYTJhNzBjMzJiYjI4N2UyZTM1YSIsInN1YiI6IjY0ZGUzN2U0Yjc3ZDRiMTE0MWY4Y2E5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xv11DxIN7AVYSVqXcwmX9ZAUDPuz9vDLNneqxLK_-6E',
};

export const fetchTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers,
  };

  const res = await fetch(url, options);

  if(!res.ok) {
    throw new Error("Failed to fetch movies.");
  }

  const json = await res.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {
  const fetch = require('node-fetch');

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers,
  };

  const res = await fetch(url, options);

  if(!res.ok) {
    throw new Error("Failed to fetch movies.");
  }

  const json = await res.json();
  return json;
};


