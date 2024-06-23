import styled from "styled-components";
import * as colors from "../../colors";

type CheckboxProps = {
    label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
    // Create a custom checkbox component

    return (
        <CheckboxCont>
            <CheckboxInput name={label} type="checkbox" />
            <label htmlFor={label}>{label}</label>
        </CheckboxCont>
    );
};

export default Checkbox;

const CheckboxCont = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${colors.fontColor};
`;

const CheckboxInput = styled.input`
    margin: 0;
    accent-color: ${colors.fontColor};
    width: 18px;
    height: 18px;
`;
