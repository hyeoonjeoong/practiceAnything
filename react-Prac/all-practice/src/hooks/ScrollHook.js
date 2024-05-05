import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.screenY, x: window.screenX });
    console.log('y: ', window.screenY, 'x: ', window.screenX);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

const ScrollHook = () => {
  const { y } = useScroll();
  return (
    <>
      <div style={{ height: '10vh' }}>
        <h2 style={{ position: 'relative', color: y > 100 ? 'red' : 'blue' }}>
          height을 줄였다 늘렸따
        </h2>
      </div>
    </>
  );
};

export default ScrollHook;
