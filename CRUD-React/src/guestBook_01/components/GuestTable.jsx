import React, { useEffect, useState } from "react";

const GuestTable = ({ content }) => {
  const [isCheckPw, setIsCheckPw] = useState(false);
  const [isAbleEdit, setIsAbleEdit] = useState(false);

  const [inputPw, setInputPw] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [newContent, setNewContent] = useState("");
  const [clickedData, setClickedData] = useState({});
  useEffect(() => {
    console.log(content);
  }, []);

  const handleEdit = (data) => {
    setIsCheckPw(true);
    // console.log(data);
    setClickedData(data);
  };

  const handlePwChange = (e) => {
    setInputPw(e.target.value);
    // console.log(e.target.value);
  };
  const handleConfirmPw = () => {
    console.log("clickedData", clickedData);
    console.log("inputPw", inputPw);
    if (clickedData.pw === inputPw) {
      console.log("비밀번호 일치");
      setIsAbleEdit(true);
      setIsCheckPw(false);
    } else {
      console.log("불일치. 수정 삭제 불가");
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  };

  const handleEditOk = () => {
    console.log("수정완료버튼 클릭");
    const updatedContent = content.map((data) => {
      if (data.id === clickedData.id) {
        return {
          ...data,
          inputText: editedContent, // 수정된 내용으로 업데이트 > 수정 필요
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
                {isAbleEdit ? (
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
      {isCheckPw && (
        <>
          <div>
            <input
              type="password"
              className="writer-input"
              placeholder="비밀번호를 입력해주세요."
              value={inputPw}
              onChange={handlePwChange}
            ></input>
            <button onClick={handleConfirmPw}>확인</button>
          </div>
        </>
      )}
    </>
  );
};

export default GuestTable;
