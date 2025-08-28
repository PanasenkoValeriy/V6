const KEY = 'acadf63e769127d9b617a73bf2da3fb8';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchData(endpoint) {
  return fetch(`${BASE_URL}${endpoint}&api_key=${KEY}`).then(response => {
    if (!response.ok) throw new Error('network error');
    return response.json();
  });
}
export function fetchTrending() {
  return fetchData(`/trending/movie/day?`);
}
