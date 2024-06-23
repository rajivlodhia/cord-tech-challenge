import styled from "styled-components";

const MovieItem = () => {
    return (
        // The MovieItemWrapper must be linked to the movie details popup
        <MovieItemWrapper>
            <LeftCont></LeftCont>
            <RightCont></RightCont>
        </MovieItemWrapper>
    );
};

export default MovieItem;

const MovieItemWrapper = styled.div`
    position: relative;
    background-color: white;
    border-radius: 3px;
`;

const LeftCont = styled.div`
    display: inline-block;
`;

const RightCont = styled.div`
    display: inline-block;
`;
