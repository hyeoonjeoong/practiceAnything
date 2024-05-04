import React, { useEffect, useRef } from 'react';

const useBeforeLeave = function (target, argFunc) {
  useEffect(() => {
    if (typeof argFunc !== 'function') return;
    else {
      const eventFunc = function (event) {
        argFunc(event);
      };
      if (target?.current) {
        target.current.addEventListener('mouseleave', eventFunc);
        return () =>
          target.current.removeEventListener('mouseleave', eventFunc);
      } else if (target?.onmouseleave === undefined) return;
      else {
        target.addEventListener('mouseleave', eventFunc);
        return () => target.removeEventListener('mouseleave', eventFunc);
      }
    }
  }, []);
};

const BeforeLeaveHook = () => {
  const target = useRef();
  const bye = () => {
    console.log("don't go...");
  };
  useBeforeLeave(target, bye);
  return <div ref={target}>왔다가 도망가기</div>;
};

export default BeforeLeaveHook;
