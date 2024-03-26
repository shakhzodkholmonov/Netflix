const API_KEY = "86783762237ff3e97be67f3473685c59";
const BASE_PATH = "https://api.themoviedb.org/3";

async function fetchPopularMovies() {
    const url = `${BASE_PATH}/movie/popular ? api_key = ${API_KEY}& language=en - US & page=1`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMovies(data.results);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
                    <h2>${movie.title}</h2>
                    <p>Release Date: ${movie.release_date}</p>
                    <p>Popularity: ${movie.popularity}</p>
                    <p>Overview: ${movie.overview}</p>
                    <hr>
                ;
                movieList.appendChild(movieDiv);
            `});
}

fetchPopularMovies();