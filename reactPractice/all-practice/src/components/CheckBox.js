import React, { useState } from "react";
export default function CheckBox() {
  const data = [
    { id: 1, title: "선택 1" },
    { id: 2, title: "선택 2" },
    { id: 3, title: "선택 3" },
    { id: 4, title: "선택 4" },
  ];

  const [checkItems, setCheckItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el != id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const allChecked = [];
      data.map((el) => allChecked.push(el.id));
      setCheckItems(allChecked);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <input
              type="checkbox"
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkItems.length === data.length ? true : false}
            />
            <th>전체 선택</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <input
                type="checkbox"
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                checked={checkItems.includes(data.id) ? true : false}
              />
              <td>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>선택 내용</h3>
      <td>{checkItems}</td>
    </>
  );
}
