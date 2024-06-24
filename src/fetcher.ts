import axios from "axios";

// const API_KEY = "a542d631c7343b404268be38c0704e24";
const API_READ_ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTQyZDYzMWM3MzQzYjQwNDI2OGJlMzhjMDcwNGUyNCIsIm5iZiI6MTcxOTA5NTkzOS41NTI2MDgsInN1YiI6IjY2Nzc1MWQ5NTk5OTE0ZmFhODZmZmVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rk-l_irdRWeKRd7fGu60hnc3ox1aV5jBZKV3bOzPZTE";
const BASE_URL = "https://api.themoviedb.org/3";

// Create an axios instance with the base URL and the required headers for The MovieDB API.
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
});

/**
 * Fetches the list of movie genres from The MovieDB API.
 *
 * @returns {Promise<Object>} Returns a promise that resolves to an object containing the list of genres.
 */
export const getMovieGenres = async () => {
    const response = await instance.get("/genre/movie/list");

    if (response.status !== 200) {
        throw new Error("Failed to fetch genres");
    }

    return response.data;
};

/**
 * Fetches the list of movies based on the keyword and year provided.
 *
 * @param keyword
 * @param year
 * @param page
 *
 * @returns {Promise<Object>} Returns a promise that resolves to an object containing the list of movies.
 */
export const getDiscoverMovies = async (
    keyword: string,
    year: number,
    page = 1
) => {
    const response = await instance.get("/discover/movie", {
        params: {
            page: page,
            query: keyword,
            year: year,
        },
    });

    if (response.status !== 200) {
        throw new Error("Failed to fetch movies");
    }

    return response.data;
};

/**
 * Fetches the list of movies based on search parameters.
 *
 * @param searchQuery
 * @param releaseDate
 * @param page
 *
 * @returns {Promise<Object>} Returns a promise that resolves to an object containing the list of movies based on search parameters.
 */
export const getSearchMovies = async (
    searchQuery: string,
    releaseYear: number,
    page = 1
) => {
    const response = await instance.get("/search/movie", {
        params: {
            query: searchQuery,
            year: releaseYear,
            page: page,
        },
    });

    if (response.status !== 200) {
        throw new Error("Failed to fetch movies");
    }

    return response.data;
};
