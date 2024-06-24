import styled, { css } from "styled-components";

import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";
import { Genre } from "../../entities/Genre";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import FilterIcon from "../../images/filter-icon.png";
import * as colors from "../../colors";
import { useRef, useState } from "react";

type SearchFiltersProps = {
    genres: Genre[];
    ratings: { id: number; name: number }[];
    languages: { id: string; name: string }[];
    searchMovies: (queryString: string, releaseYear: number) => void;
};

const SearchFilters = (props: SearchFiltersProps) => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchDateRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const searchQuery = searchInputRef.current?.value || "";
        const releaseYearQuery = parseInt(searchDateRef.current?.value || "0");

        props.searchMovies(searchQuery, releaseYearQuery);
    };

    return (
        <FiltersWrapper>
            <SearchFiltersCont>
                {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
                <SearchBar
                    updateSearch={handleSearch}
                    icon={SearchIcon}
                    imgAlt="Search icon"
                    placeholder="Search for movies"
                    inputRef={searchInputRef}
                />
                <FiltersIcon
                    src={FilterIcon}
                    alt="Filters icon"
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                />
            </SearchFiltersCont>
            <SearchFiltersCont marginBottom hideOnMobile={!isFiltersOpen}>
                <SearchBar
                    updateSearch={handleSearch}
                    icon={CalendarIcon}
                    imgAlt="Calendar icon"
                    placeholder="Year of release"
                    inputRef={searchDateRef}
                />
            </SearchFiltersCont>
            <SearchFiltersCont
                hideOnMobile={!isFiltersOpen}
                className="flex-direction-column"
            >
                <CategoryTitle>Movie</CategoryTitle>
                {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
                <ExpandableFilters
                    genres={props.genres}
                    ratings={props.ratings}
                    languages={props.languages}
                />
            </SearchFiltersCont>
        </FiltersWrapper>
    );
};

export default SearchFilters;

type SearchFilterContProps = {
    marginBottom?: boolean;
    hideOnMobile?: boolean;
};

const FiltersWrapper = styled.div`
    position: relative;
`;

const FiltersIcon = styled.img`
    display: flex;
    width: 30px;
    height: 30px;
    padding-bottom: 10px;
    margin-left: 16px;
    border-bottom: 2px solid ${colors.primaryColor};

    @media (min-width: 1080px) {
        display: none;
    }
`;

const SearchFiltersCont = styled.div<SearchFilterContProps>`
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
    display: ${(props) => (props.hideOnMobile ? "none" : "flex")};
    flex-direction: row;

    + .flex-direction-column {
        flex-direction: column;
    }

    @media (min-width: 1080px) {
        display: block;
        padding: 20px;
        background-color: white;
    }

    ${(props) =>
        props.marginBottom &&
        css`
            margin-bottom: 15px;
        `}
`;

const CategoryTitle = styled.p`
    font-weight: 600;
`;
