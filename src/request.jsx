const API_KEY = "646fa962294f1ddd7ea03d5683c1e100";

// Example API request === https://api.themoviedb.org/3/movie/550?api_key=646fa962294f1ddd7ea03d5683c1e100

const requests = {
    fetchTrending: `/trending/all/week/?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;