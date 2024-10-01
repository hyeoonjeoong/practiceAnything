"use client";

import React, { useState } from "react";
import InputComponent from "./_components/input";

interface FormData {
  input1: string;
  input2: string;
}

const FormPage = () => {
  const [text, setText] = useState<string>("");
  const [formData, setFormData] = useState<FormData | null>(null);

  const onChangeText = (data: FormData) => {
    setFormData(data);
  };

  return (
    <>
      <div>
        <div>text:</div>
        <div>{text}</div>
        <div>Submitted Data:</div>
        <div>Input 1: {formData?.input1}</div>
        <div>Input 2: {formData?.input2}</div>
        <InputComponent handleChange={(el) => onChangeText(el)} />
      </div>
    </>
  );
};

export default FormPage;
