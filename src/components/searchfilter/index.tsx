import styled, { css } from "styled-components";

import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";
import { Genre } from "../../entities/Genre";

type SearchFiltersProps = {
    genres: Genre[];
    ratings: { id: number; name: number }[];
    languages: { id: string; name: string }[];
    searchMovies: (queryString: string, releaseYear: number) => void;
};

const SearchFilters = (props: SearchFiltersProps) => {
    return (
        <FiltersWrapper>
            <SearchFiltersCont className="search_inputs_cont" marginBottom>
                {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
                <SearchBar updateSearch={props.searchMovies} />
            </SearchFiltersCont>
            <SearchFiltersCont>
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

const FiltersWrapper = styled.div`
    position: relative;
`;

const SearchFiltersCont = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    ${(props) =>
        props.marginBottom &&
        css`
            margin-bottom: 15px;
        `}
`;

const CategoryTitle = styled.p`
    font-weight: 600;
`;
