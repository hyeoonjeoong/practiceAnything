import React, { useRef } from 'react';
// import fscreen from 'fscreen';

const useFullScreen = (onFulls) => {
  const element = useRef();

  const fullCb = (isFull) => {
    if (onFulls && typeof onFulls === 'function') {
      onFulls(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // Firefox
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // IE/Edge
        element.current.msRequestFullscreen();
      }
    }
    fullCb(true);
  };

  return { element, triggerFull };
};

const FullScreenHook = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull } = useFullScreen(onFulls);
  return (
    <>
      <div ref={element}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38J4crq2czDaToyn4C0NkhMx81GngOTbjrA&usqp=CAU" />
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </>
  );
};

export default FullScreenHook;
