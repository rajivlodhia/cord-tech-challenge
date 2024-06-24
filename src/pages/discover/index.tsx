import styled from "styled-components";
import SearchFilters from "../../components/searchfilter";
import { useEffect, useState } from "react";
import {
    getDiscoverMovies,
    getMovieGenres,
    getSearchMovies,
} from "../../fetcher";
import { Movie } from "../../entities/Movie";
import MovieItem from "../../components/movieitem";

const Discover = () => {
    const [optionsData, setOptionsData] = useState({
        keyword: "",
        year: 0,
        results: [] as Movie[],
        movieDetails: null,
        totalCount: 0,
        genreOptions: [],
        ratingOptions: [
            { id: 7.5, name: 7.5 },
            { id: 8, name: 8 },
            { id: 8.5, name: 8.5 },
            { id: 9, name: 9 },
            { id: 9.5, name: 9.5 },
            { id: 10, name: 10 },
        ],
        languageOptions: [
            { id: "GR", name: "Greek" },
            { id: "EN", name: "English" },
            { id: "RU", name: "Russian" },
            { id: "PO", name: "Polish" },
        ],
    });

    // Write a function to preload the popular movies when page loads & get the movie genres
    const getMoviesAndGenres = async (keyword: string, year: number) => {
        const genreData = await getMovieGenres();
        const movieData = await getDiscoverMovies(keyword, year);

        setOptionsData({
            ...optionsData,
            genreOptions: genreData.genres,
            keyword: movieData.keyword,
            year: movieData.year,
            results: movieData.results,
            totalCount: movieData.total_results,
        });
    };

    // Write a function to get the movie details based on the movie id taken from the URL.

    const searchMovies = async (queryString: string, releaseYear: number) => {
        // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
        // TODO: Add debounce to prevent too many API requests
        const searchData = await getSearchMovies(queryString, releaseYear);

        setOptionsData({
            ...optionsData,
            results: searchData.results,
            keyword: queryString,
            year: releaseYear,
            totalCount: searchData.total_results,
        });
    };

    // Run the getMovies() and getGenres to populate movie data on page load.
    useEffect(() => {
        getMoviesAndGenres(optionsData.keyword, optionsData.year);
    }, []);

    return (
        <DiscoverWrapper>
            {optionsData.totalCount > 0 && (
                <TotalCounter>{optionsData.totalCount} movies</TotalCounter>
            )}
            <MovieWrapper>
                <MovieResults>
                    {optionsData.results.length > 0 ? (
                        <>
                            {optionsData.results.map((movie) => (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                    genres={optionsData.genreOptions}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <h1>No movies found... :(</h1>
                            <p>Try searching for something else.</p>
                        </>
                    )}
                    {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
                </MovieResults>
                <MovieFilters>
                    <SearchFilters
                        genres={optionsData.genreOptions}
                        ratings={optionsData.ratingOptions}
                        languages={optionsData.languageOptions}
                        searchMovies={(keyword, year) =>
                            searchMovies(keyword, year)
                        }
                    />
                </MovieFilters>
            </MovieWrapper>
        </DiscoverWrapper>
    );
};

export default Discover;

const DiscoverWrapper = styled.div`
    padding: 60px 35px;
`;

const MovieWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

const TotalCounter = styled.div`
    font-size: 14px;
    margin-bottom: 12px;
`;

const MovieResults = styled.div`
    width: 100%;
`;

const MovieFilters = styled.div``;
