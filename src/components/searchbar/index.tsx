import styled from "styled-components";

import * as colors from "../../colors";

type SearchBarProps = {
    icon: string;
    imgAlt: string;
    placeholder: string;
    inputRef: React.RefObject<HTMLInputElement>;
    updateSearch: () => void;
    fontBold?: boolean;
};

const SearchBar = (props: SearchBarProps) => {
    return (
        <SearchBarWrapper fontBold={props.fontBold}>
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

type SearchBarWrapperProps = {
    fontBold?: boolean;
};

const SearchBarWrapper = styled.div<SearchBarWrapperProps>`
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 2px solid ${colors.primaryColor};
    width: 100%;
    min-width: 300px;

    @media (min-width: 1080px) {
        margin-bottom: 0;
    }

    input {
        @media (min-width: 1080px) {
            font-weight: ${(props) => (props.fontBold ? "600" : "normal")};
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
