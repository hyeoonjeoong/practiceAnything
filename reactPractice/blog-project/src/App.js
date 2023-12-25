/* eslint-disable */

//💛 클릭했을 때 해당 postId값 찾아서 그것만 showModal 되도록

import { useRef, useState } from "react";

import "./App.css";

function App() {
  const [like, setLike] = useState(0);
  const postIdRef = useRef(3);

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
  const [inputValue, setInputValue] = useState("");
  const [inputContentValue, setInputContentValue] = useState("");

  const handleSort = () => {
    const newPostList = [...postList];
    newPostList.sort((a, b) => a.title.localeCompare(b.title));
    console.log(newPostList);
    setPostList(newPostList);
  };

  const handleLike = (postId) => {
    const newPostList = [...postList];
    const findItem = newPostList.findIndex((post) => post.postId === postId);

    const selectedPost = newPostList[findItem];
    selectedPost.like += 1;
    setPostList(newPostList);
  };

  const handleModal = (postId) => {
    setShowModal(postId);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  const handleAddPost = () => {
    const newTitle = inputValue;
    const newContent = inputContentValue;

    if (newTitle && newContent !== "") {
      const newPostList = postList.concat({
        postId: postIdRef.current + 1,
        title: newTitle,
        date: getDate(),
        content: newContent,
        like: like,
      });

      console.log(newPostList);
      setPostList(newPostList);

      setInputValue("");
      setInputContentValue("");

      //postIdRef.current = postIdRef.current +1
      postIdRef.current += 1;
    } else {
      alert("글 제목과 내용을 모두 입력해주세요.");
    }
  };

  const handleDelPost = (postId) => {
    const newPostList = postList.filter((post) => post.postId !== postId);
    setPostList(newPostList);
  };

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <div className="top-box">
          <div>
            <input
              type="text"
              placeholder="글 제목을 입력해주세요."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="글 내용을 입력해주세요."
              value={inputContentValue}
              onChange={(e) => {
                setInputContentValue(e.target.value);
              }}
            />
            <button onClick={handleAddPost}>글 발행</button>
          </div>
          <button className="sortBtn" onClick={handleSort}>
            가나다 순 정렬
          </button>
        </div>
        {postList.map((post) => (
          <>
            <div className="list" key={post.postId}>
              <h4
                className="list-title"
                onClick={() => handleModal(post.postId)}
              >
                {post.title}{" "}
                <span
                  className="likeBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(post.postId);
                  }}
                >
                  좋아요👍🏻🤍 {post.like}
                </span>{" "}
              </h4>
              <h5>{post.date}</h5>
              <button
                className="delBtn"
                onClick={() => handleDelPost(post.postId)}
              >
                글 삭제하기
              </button>
            </div>
            {showModal === post.postId && (
              <Modal
                id={post.postId}
                title={post.title}
                content={post.content}
                date={post.date}
                closeModal={closeModal}
              />
            )}
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
        <p>{props.content}</p>
        <h6>{props.date}</h6>
        <button className="offBtn" onClick={props.closeModal}>
          닫기
        </button>
      </div>
    </>
  );
}

function getDate() {
  const today = new Date();

  const month = today.getMonth() + 1;
  const date = today.getDate();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const modifiedHour = hours < 10 ? `0${hours}` : hours;
  const modifiedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${month}월 ${date}일 ${modifiedHour}:${modifiedMinutes} 발행`;
}

export default App;
