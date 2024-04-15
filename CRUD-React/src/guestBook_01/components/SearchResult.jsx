import React from 'react';

const SearchResult = () => {
  return (
    <>
      <div>
        <select name="search">
          <option value="writer">작성자</option>
          <option value="content">내용</option>
        </select>
        <input type="text" placeholder="검색내용을 입력해주세요."></input>
        <button type="button">검색</button>
      </div>
    </>
  );
};

export default SearchResult;
