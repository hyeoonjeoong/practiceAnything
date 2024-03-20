import React, { useState } from "react";

//기존 꺼 컴포넌트 분리, 테일윈드 적용해보기, 리액트 초반에 작성한 코드 리팩토링 해보기
const Board01 = () => {
  const [list, setList] = useState([]);
  const [listId, SetListId] = useState(0);
  const [newWriter, setNewWriter] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);
  const [msg, setMsg] = useState("");

  const addList = () => {
    if (newWriter.length === 0 || newTitle.length === 0) {
      alert("작성자와 제목을 입력해주세요");
      return;
    }
    const newContent = {
      id: listId,
      writer: newWriter,
      title: newTitle,
    };
    const NewList = list.concat(newContent);
    SetListId(listId + 1);
    setList(NewList);
    setNewWriter("");
    setNewTitle("");
    // console.log(newContent);
  };

  const searchList = () => {
    if (searchText.length === 0) {
      alert("검색 내용을 입력해주세요");
      return;
    }

    const searchLists = list.filter((value) => {
      const inputSearchText = searchText;
      const selectSearchType =
        searchType === "writer" ? value.writer : value.title;

      return selectSearchType.includes(inputSearchText);
    });
    console.log("searchLists", searchLists);
    console.log("searchText", searchText);

    setSearchResultList(searchLists);

    if (searchLists.length === 0) {
      const msg = "검색 결과가 없습니다.";
      console.log(msg);
      setMsg(msg);
      return msg;
    }

    setSearchText("");
  };

  const allList = () => {
    setSearchResultList(list);
  };

  return (
    <>
      <form>
        <fieldset>
          작성자:{" "}
          <input
            type="text"
            placeholder="작성자"
            value={newWriter}
            onChange={(e) => {
              setNewWriter(e.target.value);
            }}
          />
          제목:{" "}
          <input
            type="text"
            placeholder="제목"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <button type="button" onClick={addList}>
            작성
          </button>
        </fieldset>
      </form>
      <br />
      <select
        name="search"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="writer">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={searchList}>검색</button>
      <button onClick={allList}>전체 내용 보기</button>
      <br />
      <br />
      <table
        style={{
          borderCollapse: "collapse",
          border: "1px solid black",
          width: "500px",
        }}
      >
        <thead>
          <tr>
            <td style={{ border: "1px solid black" }}>번호</td>
            <td style={{ border: "1px solid black" }}>제목</td>
            <td style={{ border: "1px solid black" }}>작성자</td>
          </tr>
        </thead>
        {list.map((value) => {
          return (
            <tbody key={value.id}>
              <tr>
                <td style={{ border: "1px solid black" }}>{value.id}</td>
                <td style={{ border: "1px solid black" }}>{value.title}</td>
                <td style={{ border: "1px solid black" }}>{value.writer}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <br />
      <hr />
      <h3>검색 결과</h3>

      <table
        style={{
          borderCollapse: "collapse",
          border: "1px solid black",
          width: "500px",
        }}
      >
        <thead>
          <tr>
            <td style={{ border: "1px solid black" }}>번호</td>
            <td style={{ border: "1px solid black" }}>제목</td>
            <td style={{ border: "1px solid black" }}>작성자</td>
          </tr>
        </thead>
        {searchResultList.map((value) => {
          return (
            <tbody key={value.id}>
              <tr>
                <td style={{ border: "1px solid black" }}>{value.id}</td>
                <td style={{ border: "1px solid black" }}>{value.title}</td>
                <td style={{ border: "1px solid black" }}>{value.writer}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {searchResultList.length === 0 && <h3>{msg}</h3>}
    </>
  );
};

export default Board01;
