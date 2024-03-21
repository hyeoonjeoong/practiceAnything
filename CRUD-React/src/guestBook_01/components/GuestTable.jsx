import React, { useEffect, useState } from "react";

const GuestTable = ({ content }) => {
  const [checkPw, setCheckPw] = useState(false);
  useEffect(() => {
    console.log(content);
  }, []);

  const handleEdit = (data) => {
    setCheckPw(true);
    console.log(data.id);
  };

  const handleInputPw = (e, data) => {
    console.log("hi");
    console.log(e);
    console.log(data);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="table-writer">작성자</th>
            <th className="table-content">내용</th>
          </tr>
        </thead>
        {content.map((data) => (
          <>
            <tr key={data.id}>
              <td className="table-writer">{data.writer}</td>
              <td>
                {data.inputText}
                <span className="table-btnBox">
                  <button className="btn-edit" onClick={() => handleEdit(data)}>
                    수정
                  </button>
                  <button className="btn-del">삭제</button>
                </span>
              </td>
            </tr>
          </>
        ))}
      </table>
      {checkPw && (
        <>
          <div>
            <input
              type="password"
              className="writer-input"
              placeholder="비밀번호를 입력해주세요."
            ></input>
            <button onClick={handleInputPw}>확인</button>
          </div>
        </>
      )}
    </>
  );
};

export default GuestTable;
