import React, { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  //---> DOM을 통해 제목을 직접 업데이트하는 것은 좋지 않다.
  //   const updateTitle = () => {
  //     const htmlTitle = document.querySelector('title');
  //     htmlTitle.innerText = title;
  //   };

  //---> 아래처럼 하는게 적절!
  //title태그는 리액트 컴포넌트에서 직접 조작할 수 없어서  document.title 사용.
  const updateTitle = () => {
    document.title = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};
const TitleHook = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);
  return <div>TitleHook</div>;
};

export default TitleHook;
