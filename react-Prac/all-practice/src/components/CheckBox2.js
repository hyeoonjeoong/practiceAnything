import React, { useState } from "react";

const CheckBox2 = () => {
  const DUMMY = [
    { id: 1, text: "select1" },
    { id: 2, text: "select2" },
    { id: 3, text: "select3" },
  ];

  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleChangeChecked = (id) => {
    setCheckedBoxes((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleButtonClick = () => {
    setCheckedBoxes((prevData) => prevData.filter((item) => !item.checked));
  };

  return (
    <>
      <div>
        {/* <input type="checkbox" checked= {} onChange="" /> 전체 삭제하기 */}
      </div>
      <br />
      {DUMMY.map((item) => (
        <div key={item.id}>
          <div>
            <input
              type="checkbox"
              checked={checkedBoxes.includes(item.id) ? true : false}
              onChange={() => handleChangeChecked(item.id)}
            />
            <span>{item.text}</span>
          </div>
          <br />
        </div>
      ))}
      <button onClick={handleButtonClick}>삭제하기</button>
    </>
  );
};

export default CheckBox2;
