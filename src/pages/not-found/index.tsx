import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <h1>404 - Page Not Found</h1>
            <p>
                Go to the discover page <Link to="/discover">here</Link>
            </p>
        </NotFoundWrapper>
    );
};

export default NotFound;

const NotFoundWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    a {
        text-decoration: underline;
    }
`;
