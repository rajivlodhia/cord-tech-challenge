import styled from "styled-components";
import { Movie } from "../../entities/Movie";
import MovieItem from "../movieitem";

type MovieListProps = {
    movies: Movie[];
    genres: string[];
};

const MovieList = ({ movies, genres }: MovieListProps) => {
    return (
        <MoviesWrapper>
            {/* Finish the MovieItem component and use it here to display the movie results */}
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </MoviesWrapper>
    );
};

export default MovieList;

const MoviesWrapper = styled.div`
    position: relative;
`;
