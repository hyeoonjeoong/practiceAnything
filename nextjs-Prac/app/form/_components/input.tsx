"use client";

import React, { useState } from "react";

interface FormData {
  input1: string;
  input2: string;
}

interface TProps {
  handleChange: (data: FormData) => void;
}

const InputComponent: React.FC<TProps> = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const clickSubmit = (e) => {
    e.preventDefault();

    const formData = {
      input1: inputValue,
      input2: inputValue2,
    };
    handleChange(formData);
    console.log("Submitted value:", formData);
  };
  return (
    <>
      <div>
        <form onSubmit={clickSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input
            type="text"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};

export default InputComponent;
