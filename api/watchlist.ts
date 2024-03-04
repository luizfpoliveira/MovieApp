export const addMovieToWatchlist = async (movieId: number) => {

const url = 'https://api.themoviedb.org/3/account/20314932/watchlist';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2Y1MDc1ODQ3YTUwYTJhNzBjMzJiYjI4N2UyZTM1YSIsInN1YiI6IjY0ZGUzN2U0Yjc3ZDRiMTE0MWY4Y2E5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xv11DxIN7AVYSVqXcwmX9ZAUDPuz9vDLNneqxLK_-6E'
  }
};

body: JSON.stringify({
  media_type: "movie",
  media_id: movieId,
  watchList: true,
})

const res = await fetch(url, options);

if(!res.ok) {
  throw new Error("Failed to fetch movies.");
}

const json = await res.json();
return json;
};