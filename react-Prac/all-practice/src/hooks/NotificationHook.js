import React from 'react';

const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (Notification.permission !== 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const NotificationHook = () => {
  const triggerNotification = useNotification('Hi there?', {
    body: 'How was your day?',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38J4crq2czDaToyn4C0NkhMx81GngOTbjrA&usqp=CAU',
  });
  return (
    <>
      <button onClick={triggerNotification}>Hello!</button>
    </>
  );
};

export default NotificationHook;

//크롬 - 주소창 i 아이콘 클릭 > 개인 정보 보호 및 보안 > 알림 허용
//https://developer.mozilla.org/ko/docs/Web/API/Notification
