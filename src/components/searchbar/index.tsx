import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

const SearchBar = () => {
    return (
        <>
            <SearchBarWrapper>
                <SearchIconImg src={SearchIcon} alt="Search Icon" />
                <SearchInput type="text" placeholder="Search for movies" />
            </SearchBarWrapper>
            <SearchDateWrapper>
                <SearchIconImg src={CalendarIcon} alt="Calendar Icon" />
                {/* TODO: Improve this with a date picker component */}
                <SearchInput type="text" placeholder="Year of release" />
            </SearchDateWrapper>
        </>
    );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px 0;
    border-bottom: 2px solid ${colors.primaryColor};
    min-width: 300px;

    input {
        font-weight: 900;
    }
`;

const SearchDateWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 2px solid ${colors.primaryColor};
    min-width: 300px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    color: ${colors.primaryColor};

    &::placeholder {
        color: ${colors.primaryColor};
    }
`;

const SearchIconImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 16px;
`;
