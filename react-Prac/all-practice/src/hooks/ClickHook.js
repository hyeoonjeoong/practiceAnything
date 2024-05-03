import React, { useEffect, useRef, useState } from 'react';

const useClick = () => {
  const [text, setText] = useState("Click me, I'm out 🥹 ");
  const isMounted = useRef(true);

  const handleClick = () => {
    setText("I'm Coming!!!!!!🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️");
    setTimeout(() => {
      setText('Bye...👀');
    }, 3000);
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return [text, handleClick];
};

const ClickHook = () => {
  const [text, handleClick] = useClick();

  return (
    <>
      <div onClick={handleClick}>{text}</div>
    </>
  );
};

export default ClickHook;
