import styled from "styled-components";

import * as colors from "../../colors";

type SearchBarProps = {
    icon: string;
    imgAlt: string;
    placeholder: string;
    inputRef: React.RefObject<HTMLInputElement>;
    updateSearch: () => void;
};

const SearchBar = (props: SearchBarProps) => {
    return (
        <SearchBarWrapper>
            <SearchIconImg src={props.icon} alt={props.imgAlt} />
            <SearchInput
                type="text"
                placeholder={props.placeholder}
                onChange={props.updateSearch}
                ref={props.inputRef}
            />
        </SearchBarWrapper>
    );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px 0;
    border-bottom: 2px solid ${colors.primaryColor};
    width: 100%;
    min-width: 300px;

    input {
        @media (min-width: 1080px) {
            font-weight: 600;
        }
    }
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
