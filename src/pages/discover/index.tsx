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

    const [isDataLoading, setIsDataLoading] = useState(false);

    // Write a function to preload the popular movies when page loads & get the movie genres
    const getMoviesAndGenres = async (year: number) => {
        const genreData = await getMovieGenres();
        const movieData = await getDiscoverMovies(year);

        setOptionsData({
            ...optionsData,
            genreOptions: genreData.genres,
            keyword: movieData.keyword,
            year: movieData.year,
            results: movieData.results,
            totalCount: movieData.total_results,
        });

        setIsDataLoading(false);
    };

    // Write a function to get the movie details based on the movie id taken from the URL.

    const searchMovies = async (queryString: string, releaseYear: number) => {
        // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
        // TODO: Add debounce to prevent too many API requests
        let searchData = null;
        if (queryString) {
            // If a search query is provided, fetch movies from Search endpoint.
            // The searchQuery parameter is required, so we can't pass an empty string.
            searchData = await getSearchMovies(queryString, releaseYear);
        } else {
            // If no search query is provided, fetch movies from Discover endpoint
            searchData = await getDiscoverMovies(releaseYear);
        }

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
        setIsDataLoading(true);
        getMoviesAndGenres(optionsData.year);
    }, []);

    return (
        <DiscoverWrapper>
            <DiscoverHeading>Discover</DiscoverHeading>
            {optionsData.totalCount > 0 && (
                <TotalCounter hiddenOnMobile>
                    {optionsData.totalCount} movies
                </TotalCounter>
            )}
            <MovieWrapper>
                <MovieResults>
                    {isDataLoading ? (
                        // Temporary loading state
                        <p>Loading...</p>
                    ) : (
                        <>
                            {optionsData.totalCount > 0 && (
                                <TotalCounter>
                                    {optionsData.totalCount} movies
                                </TotalCounter>
                            )}
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
                                    <h2>No movies found... :(</h2>
                                    <p>Try searching for something else.</p>
                                </>
                            )}
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

type TotalCounterProps = {
    hiddenOnMobile?: boolean;
};

const DiscoverWrapper = styled.div`
    padding: 60px 45px;
`;

const DiscoverHeading = styled.h1`
    font-size: 24px;
    margin-bottom: 12px;

    @media (min-width: 760px) {
        display: none;
    }
`;

const MovieWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;

    @media (min-width: 1080px) {
        flex-direction: row;
    }
`;

const TotalCounter = styled.div<TotalCounterProps>`
    font-size: 14px;
    margin-bottom: 12px;
    display: ${(props) => (props.hiddenOnMobile ? "none" : "block")};

    @media (min-width: 1080px) {
        display: ${(props) => (props.hiddenOnMobile ? "block" : "none")};
    }
`;

const MovieResults = styled.div`
    width: 100%;
`;

const MovieFilters = styled.div``;
