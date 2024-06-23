import styled from "styled-components";
import { Movie } from "../../entities/Movie";
import { buildImageLink } from "../../utils/image-link-builder";
import * as colors from "../../colors";
import { Genre } from "../../entities/Genre";

type MovieItemProps = {
    movie: Movie;
    genres: Genre[];
};

const MovieItem = ({ movie, genres }: MovieItemProps) => {
    const movieGenres = movie.genre_ids.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    });

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
                    <p className="movie-rating">
                        {movie.vote_average.toFixed(1)}
                    </p>
                </div>
                <p className="movie-genres">{movieGenres.join(" | ")}</p>
                <summary className="movie-summary truncate">
                    {movie.overview}
                </summary>
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
    max-height: 270px;
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
        align-items: center;
        margin-bottom: 4px;
    }

    .movie-genres {
        font-weight: 600;
        font-size: 13px;
        color: ${colors.primaryColor};
        margin-bottom: 12px;
    }

    .movie-summary {
        max-height: 125px;
    }

    .movie-release-date {
        margin: auto 0 0;
        font-size: 13px;
        color: ${colors.primaryColor};
    }

    .movie-rating {
        line-height: normal;
        height: fit-content;
        padding: 4px 6px;
        border-radius: 5px;
        font-weight: 600;
        color: #fff;
        background-color: ${colors.primaryColor};
    }

    // Truncate the text and add ellipsis for the summary for anything more than 5 lines
    // Adapted from: https://css-tricks.com/line-clampin/
    .truncate {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        hyphens: auto;
        text-align: left;

        // Automatically use "word-break: break-all" for single-lines
        // (https://css-tricks.com/css-switch-case-conditions)
        --is-single-line: 1 - Clamp(0, Calc(5 - 1), 5);
        --delay: Calc(-1s * (var(--is-single-line, 1) - 1));
        animation: states 1s var(--delay) paused;

        @keyframes states {
            0% {
                word-break: break-all;
            }
        }
    }
`;

const MoviePosterImage = styled.img`
    max-height: 225px;
`;
