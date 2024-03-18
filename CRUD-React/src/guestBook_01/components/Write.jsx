import React, { useState } from "react";

const Write = ({ writtenData }) => {
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
    writtenData(formData);
    setFormData({
      writer: "",
      inputText: "",
    });
  };
  return (
    <>
      <form className="write-form">
        <div>
          <label htmlFor="writer" className="write-font">
            이름
          </label>
          <input
            type="text"
            id="writer"
            name="writer"
            onChange={handleChange}
            value={formData.writer}
            className="writer-input"
          ></input>
        </div>
        <div>
          <label htmlFor="inputText" className="write-font">
            {" "}
            내용
          </label>
          <input
            type="text"
            id="inputText"
            onChange={handleChange}
            name="inputText"
            placeholder="방명록을 작성해주세요."
            value={formData.inputText}
            className="text-input"
          ></input>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn-add">
          등록하기
        </button>
      </form>
    </>
  );
};

export default Write;
