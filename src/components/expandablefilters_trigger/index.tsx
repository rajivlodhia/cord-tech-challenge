import PlusIcon from "../../images/plus-icon.png";
import MinusIcon from "../../images/minus-icon.png";
import styled from "styled-components";
import * as colors from "../../colors";

type ExpandableFilterTriggerProps = {
    text: string;
    isOpen: boolean;
};

const ExpandableFilterTrigger = ({
    text,
    isOpen,
}: ExpandableFilterTriggerProps) => {
    return (
        <TriggerButton>
            <img src={isOpen ? MinusIcon : PlusIcon} />
            {/* <p>{isOpen ? "+" : "―"}</p> */}
            {text}
        </TriggerButton>
    );
};

export default ExpandableFilterTrigger;

const TriggerButton = styled.button`
    background-color: transparent;
    color: ${colors.fontColor};
    display: flex;
    align-items: center;
    border: none;
    font-size: 18px;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 5px;

    img {
        margin-right: 10px;
        width: 18px;
        height: 18px;
    }

    @media (min-width: 1080px) {
        background-color: #fff;
    }
`;
