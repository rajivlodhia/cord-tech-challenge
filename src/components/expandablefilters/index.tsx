import Collapsible from "react-collapsible";
import { Genre } from "../../entities/Genre";
import ExpandableFilterTrigger from "../expandablefilters_trigger";
import Checkbox from "../checkbox";
import styled from "styled-components";

type ExpandableFiltersProps = {
    genres: Genre[];
    ratings: { id: number; name: number }[];
    languages: { id: string; name: string }[];
};

const ExpandableFilters = (props: ExpandableFiltersProps) => {
    return (
        <>
            {/* Genre Filter */}
            <Collapsible
                trigger={
                    <ExpandableFilterTrigger
                        text="Select genre(s)"
                        isOpen={false}
                    />
                }
                triggerWhenOpen={
                    <ExpandableFilterTrigger
                        text="Select genre(s)"
                        isOpen={true}
                    />
                }
            >
                <CheckboxList>
                    {props.genres.map((genre) => (
                        <Checkbox label={genre.name} key={genre.id} />
                    ))}
                </CheckboxList>
            </Collapsible>

            {/* Minimum vote/rating filter */}
            <Collapsible
                trigger={
                    <ExpandableFilterTrigger
                        text="Select min. vote"
                        isOpen={false}
                    />
                }
                triggerWhenOpen={
                    <ExpandableFilterTrigger
                        text="Select min. vote"
                        isOpen={true}
                    />
                }
            >
                <CheckboxList>
                    {props.ratings.map((rating) => (
                        <Checkbox
                            label={rating.name.toString()}
                            key={rating.id}
                        />
                    ))}
                </CheckboxList>
            </Collapsible>

            {/* Language filter */}
            <Collapsible
                trigger={
                    <ExpandableFilterTrigger
                        text="Select language"
                        isOpen={false}
                    />
                }
                triggerWhenOpen={
                    <ExpandableFilterTrigger
                        text="Select language"
                        isOpen={true}
                    />
                }
            >
                <CheckboxList>
                    {props.languages.map((language) => (
                        <Checkbox label={language.name} key={language.id} />
                    ))}
                </CheckboxList>
            </Collapsible>
        </>
    );

    // You need to create your own checkbox component with a custom checkmark
};

export default ExpandableFilters;

const CheckboxList = styled.ul`
    padding: 0 10px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
