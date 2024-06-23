import styled from "styled-components";

type MovieListProps = {
    movies: string[];
    genres: string[];
};

const MovieList = ({ movies, genres }: MovieListProps) => {
    return (
        <MoviesWrapper>
            {/* Finish the MovieItem component and use it here to display the movie results */}
        </MoviesWrapper>
    );
};

export default MovieList;

const MoviesWrapper = styled.div`
    position: relative;
`;
