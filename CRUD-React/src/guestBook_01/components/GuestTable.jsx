import React, { useEffect, useState } from "react";

const GuestTable = ({ content, updateContent }) => {
  const [isAbleEdit, setIsAbleEdit] = useState(false);

  const [inputPw, setInputPw] = useState("");
  const [editedContent, setEditedContent] = useState(content.inputText);
  const [newContent, setNewContent] = useState("");
  const [clickedData, setClickedData] = useState({});
  const [clickedDataId, setClickedDataId] = useState("");

  const handleEdit = (data) => {
    console.log("비밀번호: ", data.pw);
    const userInput = window.prompt("비밀번호를 입력해주세요.");

    if (data.pw === userInput) {
      setIsAbleEdit(true);
      setClickedDataId(data.id);
      setClickedData(data);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      setIsAbleEdit(false);
    }
  };

  const handleEditOk = () => {
    console.log("수정할 글 Id: ", clickedDataId);
    console.log("editedContent: ", editedContent);
    const updatedContent = content.map((data) => {
      if (data.id === clickedDataId) {
        console.log("data.id", data.id);
        console.log("data", data);
        return {
          ...data,
          inputText: editedContent,
        };
      }
      setEditedContent("");
      return data; // 조건에 맞지 않는 경우 원래 데이터를 반환!!
    });
    updateContent(updatedContent);
    console.log("updated clickedData: ", clickedData);
    setIsAbleEdit(false);
  };

  const handleEditCancel = () => {
    setIsAbleEdit(false);
  };

  const handleChangeContent = (e) => {
    setEditedContent(e.target.value);
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
        {content &&
          content.map((data) => (
            <>
              <tr key={data.id}>
                <td className="table-writer">{data.writer}</td>
                <td className="table-contentBox">
                  {isAbleEdit && clickedDataId === data.id ? (
                    <>
                      <input
                        type="text"
                        placeholder="수정 할 내용을 입력해주세요."
                        value={editedContent}
                        onChange={handleChangeContent}
                      ></input>
                    </>
                  ) : (
                    <>{data.inputText}</>
                  )}
                  <div className="table-btnBox">
                    {isAbleEdit ? (
                      <>
                        <button className="btn-edit-ok" onClick={handleEditOk}>
                          수정완료
                        </button>
                        <button
                          className="btn-edit-no"
                          onClick={handleEditCancel}
                        >
                          취소
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn-edit"
                          onClick={() => handleEdit(data)}
                        >
                          수정
                        </button>
                        <button className="btn-del">삭제</button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            </>
          ))}
      </table>
    </>
  );
};

export default GuestTable;
