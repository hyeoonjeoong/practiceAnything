import React from "react";
import CheckboxContext from "./CheckboxContext";

interface CheckboxGroupProps {
  label: string;
  children: React.ReactNode;
  values: string[];
  onChange: (values: string[]) => void;
}
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  children,
  values,
  onChange,
}: CheckboxGroupProps) => {
  const isChecked = (value: string) => values.includes(value);

  const toggleValue = ({
    checked,
    value,
  }: {
    checked: boolean;
    value: string;
  }) => {
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };
  return (
    <>
      <fieldset>
        <legend>{label}</legend>
        <CheckboxContext.Provider value={{ isChecked, toggleValue }}>
          {children}
        </CheckboxContext.Provider>
        {/* <div>
          선택 한거:{" "}
          {values.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div> */}
      </fieldset>
    </>
  );
};

export default CheckboxGroup;
