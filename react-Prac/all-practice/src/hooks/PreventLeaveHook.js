import React from 'react';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener);
  };
  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener);
  };
  return { enablePrevent, disablePrevent };
};
const PreventLeaveHook = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </>
  );
};

export default PreventLeaveHook;

//beforeunload --> window가 닫히기 전에 function이 실행되는 것을 허락한다.
