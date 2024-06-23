import styled from "styled-components";
import SearchFilters from "../../components/searchfilter";
import { useState } from "react";
import MovieList from "../../components/movielist";
import { getDiscoverMovies } from "../../fetcher";

const Discover = () => {
    const [optionsData, setOptionsData] = useState({
        keyword: "",
        year: 0,
        results: [],
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
    const getMovies = (keyword: string, year: number) => {
        getDiscoverMovies(keyword, year).then((data) => {
            setOptionsData({
                ...optionsData,
                keyword: data.keyword,
                year: data.year,
                results: data.results,
                totalCount: data.total_results,
            });
        });
    };

    // Write a function to get the movie details based on the movie id taken from the URL.

    const searchMovies = async (keyword: string, year: number) => {
        // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
        getMovies(keyword, year);
    };

    // Run the getMovies function when the page loads using default options.
    getMovies(optionsData.keyword, optionsData.year);

    return (
        <DiscoverWrapper>
            <MobilePageTitle>Discover</MobilePageTitle>
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
            <MovieResults>
                {optionsData.totalCount > 0 && (
                    <TotalCounter>{optionsData.totalCount} movies</TotalCounter>
                )}
                <MovieList
                    movies={optionsData.results || []}
                    genres={optionsData.genreOptions || []}
                />
                {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
            </MovieResults>
        </DiscoverWrapper>
    );
};

export default Discover;

const DiscoverWrapper = styled.div`
    padding: 60px 35px;
`;

const TotalCounter = styled.div``;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
