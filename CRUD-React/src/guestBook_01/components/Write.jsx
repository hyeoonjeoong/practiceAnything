import React, { useState } from "react";

const Write = () => {
  const [formData, setFormData] = useState({
    writer: "",
    inputText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="writer"
          name="writer"
          onChange={handleChange}
        ></input>
        <label htmlFor="inputText"> 내용</label>
        <input
          type="text"
          id="inputText"
          onChange={handleChange}
          name="inputText"
          placeholder="방명록을 작성해주세요."
        ></input>
        <button type="submit" onClick={handleSubmit}>
          작성하기
        </button>
      </form>
    </>
  );
};

export default Write;
