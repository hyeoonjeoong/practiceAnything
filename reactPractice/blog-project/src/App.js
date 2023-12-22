/* eslint-disable */

import { useState } from "react";

import "./App.css";

function App() {
  // let post = "샤로수길 파스타 맛집";

  const post = [
    { postId: 1, title: "남자 코트 추천", date: "1월 18일 발행" },
    { postId: 2, title: "간절기 아우터 추천", date: "1월 28일 발행" },
    { postId: 3, title: "여자 맨투맨 추천", date: "11월 18일 발행" },
  ];
  const [postList, setPostList] = useState(post);
  const [like, setLike] = useState(0);

  const handleSort = () => {
    const newPostList = [...postList];
    newPostList.sort((a, b) => a.title.localeCompare(b.title));
    console.log(newPostList);
    setPostList(newPostList);
  };

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <button onClick={handleSort}>가나다 순 정렬</button>
        {postList.map((post) => (
          <div className="list" key={post.postId}>
            <h4>
              {post.title}{" "}
              <span
                onClick={() => {
                  setLike(like + 1);
                }}
              >
                👍🏻🤍{" "}
              </span>
              {like}
            </h4>
            <p>{post.date}</p>
          </div>
        ))}
        <Modal></Modal>
      </div>
    </>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
