import React, { useEffect, useState } from "react";

const GuestTable = ({ content }) => {
  const [isAbleEdit, setIsAbleEdit] = useState(false);

  const [inputPw, setInputPw] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const [clickedData, setClickedData] = useState({});
  const [clickedDataId, setClickedDataId] = useState("");

  const handleEdit = (data) => {
    console.log("비밀번호: ", data.pw);
    setInputPw("");
    setClickedDataId(data.id);
    setClickedData(data);

    const userInput = window.prompt("비밀번호를 입력해주세요.");
    setInputPw(userInput);
    handlePwConfirm();
  };

  const handlePwConfirm = () => {
    if (clickedData.pw === inputPw) {
      console.log("비밀번호 일치");
      setIsAbleEdit(true);
    } else {
      console.log("불일치. 수정 삭제 불가");
      alert("비밀번호가 일치하지 않습니다.");
      setIsAbleEdit(false);
      return;
    }
  };

  const handleEditOk = () => {
    console.log("수정완료버튼 클릭");
    console.log("수정할 글 Id: ", clickedDataId);
    const updatedContent = content.map((data) => {
      if (data.id === clickedDataId) {
        return {
          ...data,
          inputText: editedContent,
        };
      }
      return data;
    });
    setNewContent(updatedContent);
    setIsAbleEdit(false);
  };
  const handleEditCancel = () => {
    console.log("수정취소버튼 클릭");
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
        {content.map((data) => (
          <>
            <tr key={data.id}>
              <td className="table-writer">{data.writer}</td>
              <td className="table-contentBox">
                {isAbleEdit && clickedDataId === data.id ? (
                  <>
                    <input
                      type="text"
                      placeholder="수정 할 내용 입력"
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
