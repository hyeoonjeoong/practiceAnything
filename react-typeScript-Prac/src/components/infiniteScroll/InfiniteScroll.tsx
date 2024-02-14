import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { getPostList, postType } from "./postList";

const InfiniteScroll = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<postType[]>(getPostList(1));

  const handleScroll = useCallback((): void => {
    // 스크롤을 하면서 실행할 내용을 이곳에 추가합니다.

    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)
    const { innerHeight } = window;
    // 브라우저 총 내용의 크기 (스크롤을 포함한다)
    const { scrollHeight } = document.body;
    // 현재 스크롤바의 위치
    const { scrollTop } = document.documentElement;

    // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미
    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      // 페이지에 따라서 불러온 배열을 posts 배열과 합쳐줍니다.
      setPosts(posts.concat(getPostList(page + 1)));
      // 페이지 state 변수의 값도 1씩 늘려줍니다.
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [page, posts]);

  useEffect(() => {
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Container>
      {posts.map((post: postType, idx: number) => (
        <PostItem key={idx}>{post.contents}</PostItem>
      ))}
    </Container>
  );
};

export default InfiniteScroll;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
`;

const PostItem = styled.div`
  width: 100%;
  height: 350px;
  border: 2px solid black;
`;
