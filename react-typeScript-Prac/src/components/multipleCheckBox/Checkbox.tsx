import React, { ChangeEvent } from "react";
import styled from "styled-components";
import CheckboxContext from "./CheckboxContext";

interface CheckboxProps {
  onChange?: () => void;
  children: React.ReactNode;
  id: string;
  value: string;
  checked?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  children,
  value,
  checked,
  onChange,
  id,
}: CheckboxProps) => {
  const context = React.useContext(CheckboxContext);
  const { isChecked, toggleValue } = context;

  return (
    <>
      <StyledCheckBox>
        <input
          type="checkbox"
          id={id}
          //name="alcoholWrap"
          value={value}
          checked={isChecked(value)}
          onChange={({ target: { checked } }) =>
            toggleValue({ checked, value })
          }
        />
        <label htmlFor={id}>{children}</label>
      </StyledCheckBox>
    </>
  );
};

export default Checkbox;

const StyledCheckBox = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    color: #7588a3;
    flex: 1;
    display: inline-block;
    margin: 2px;
    text-align: center;
    background: #f4ede6;
    border: 1px dashed #7588a3;
    border-radius: 5px;
    padding: 6px 11px;
    box-sizing: border-box;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label {
    color: #f4ede6;
    background-image: none;
    background: #7588a3;
    border: 1px solid #7588a3;
    padding: 6px 11px;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 1;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
`;
