import styled from "styled-components";
import { Movie } from "../../entities/Movie";
import { buildImageLink } from "../../utils/image-link-builder";

type MovieItemProps = {
    movie: Movie;
};

const MovieItem = ({ movie }: MovieItemProps) => {
    return (
        // The MovieItemWrapper must be linked to the movie details popup
        <MovieItemWrapper>
            <LeftCont>
                <MoviePosterImage
                    src={buildImageLink(movie.poster_path, "w500")}
                    alt={"Poster of: " + movie.title}
                />
            </LeftCont>
            <RightCont>
                <div className="movie-header">
                    <h2>{movie.title}</h2>
                    <p>{movie.vote_average.toFixed(1)}</p>
                </div>
                <p>Action | Drama | Comedy</p>
                <summary>{movie.overview}</summary>
                <p className="movie-release-date">{movie.release_date}</p>
            </RightCont>
        </MovieItemWrapper>
    );
};

export default MovieItem;

const MovieItemWrapper = styled.article`
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: relative;
    padding: 20px;
    margin-bottom: 15px;
    background-color: white;
    border-radius: 3px;
`;

const LeftCont = styled.div`
    display: inline-block;
`;

const RightCont = styled.div`
    display: flex;
    flex-direction: column;

    .movie-header {
        display: flex;
        justify-content: space-between;
    }

    .movie-release-date {
        margin: auto 0 0;
    }
`;

const MoviePosterImage = styled.img`
    max-width: 150px;
`;
