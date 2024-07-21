'use client';

import React from 'react';
import { Modal } from 'antd';

interface PopupComponentProps {
  clickClose: () => void;
  clickOk: () => void;
  isModalOpen: boolean;
}

const PopupComponent: React.FC<PopupComponentProps> = ({
  clickClose,
  clickOk,
  isModalOpen,
}) => {
  const handleOk = () => {
    clickOk();
  };

  const handleClose = () => {
    clickClose();
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleClose}
      >
        <p>30초 동안 안보기...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default PopupComponent;
