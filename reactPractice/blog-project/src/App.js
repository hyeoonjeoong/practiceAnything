/* eslint-disable */

//💛 클릭했을 때 해당 postId값 찾아서 그것만 showModal 되도록

import { useState } from "react";

import "./App.css";

function App() {
  const [like, setLike] = useState(0);

  const post = [
    {
      postId: 1,
      title: "남자 코트 추천",
      date: "1월 18일 발행",
      content: "내용내용",
      like: like,
    },
    {
      postId: 2,
      title: "간절기 아우터 추천",
      date: "1월 28일 발행",
      content: "내용내용",
      like: like,
    },
    {
      postId: 3,
      title: "여자 맨투맨 추천",
      date: "11월 18일 발행",
      content: "내용내용",
      like: like,
    },
  ];
  const [postList, setPostList] = useState(post);
  const [showModal, setShowModal] = useState(false);

  const handleSort = () => {
    const newPostList = [...postList];
    newPostList.sort((a, b) => a.title.localeCompare(b.title));
    console.log(newPostList);
    setPostList(newPostList);
  };

  // const handleLike = (postId) => {
  //   const newPostList = [...postList];
  //   const findItem = newPostList.findIndex((post) => post.postId === postId);
  //   const selectedList = newPostList[findItem].like;

  //   setLike(selectedList.like + 1);

  //   console.log(newPostList.includes(findItem));
  //   console.log(findItem);
  //   console.log(selectedList.like);
  // };
  const handleLike = (postId) => {
    const newPostList = [...postList];
    const findItem = newPostList.findIndex((post) => post.postId === postId);
    const selectedPost = newPostList[findItem];
    selectedPost.like += 1;
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
          <>
            <div className="list" key={post.postId}>
              <h4 onClick={() => setShowModal(!showModal)}>
                {post.title}{" "}
                <span onClick={(e) => handleLike(post.postId)}>
                  좋아요👍🏻🤍{" "}
                </span>
                {post.like}
              </h4>
              <h5>{post.date}</h5>
            </div>
            {showModal == true ? (
              <Modal
                id={post.postId}
                title={post.title}
                content={post.content}
                date={post.date}
              />
            ) : null}
          </>
        ))}
      </div>
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title}</h4>
        <h6>{props.date}</h6>
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default App;
