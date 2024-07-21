'use client';

import React, { useEffect, useState } from 'react';
import PopupComponent from './_components/PopupComponent';
import { Button } from 'antd';

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalBlockedUntil, setModalBlockedUntil] = useState<number | null>(
    null
  );

  useEffect(() => {
    //로컬스토리지에 저장한 만료일 가져와서 지금이랑 비교
    const homeVisited = localStorage.getItem('homeVisited');
    const now = new Date().getTime();

    //아직 만료일이면서 지금날짜가 만료일보다 이전이면 걍 그대로 만료일 넣어두고
    if (homeVisited && now <= Number(homeVisited)) {
      setModalBlockedUntil(Number(homeVisited));
    } else {
      //아니면 지워. 그리고 블럭 풀어쥼. 그럼 다시 열리게 된다.
      setModalBlockedUntil(null);
      localStorage.removeItem('homeVisited');
    }
  }, []);

  const showModal = () => {
    //만료일 확인하고 오케이면 보여주기
    const now = new Date().getTime();
    if (!modalBlockedUntil || now > modalBlockedUntil) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    console.log('click ok');
  };

  //닫기 클릭 시 만료시간 설정
  const handleClose = () => {
    const expires = new Date().getTime() + 30 * 1000; // 30초 후
    localStorage.setItem('homeVisited', expires.toString());
    setModalBlockedUntil(expires);
    closeModal();
  };

  return (
    <>
      <div>page</div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {isModalOpen && (
        <PopupComponent
          clickClose={handleClose}
          clickOk={handleOk}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default Page;
