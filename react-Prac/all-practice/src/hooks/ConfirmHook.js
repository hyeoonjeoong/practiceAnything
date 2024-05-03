import React from 'react';

const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const ConfirmHook = () => {
  const yes = () => {
    console.log('Yessssssss!!!!!!!');
  };
  const no = () => {
    console.log('Noooooo!!!!!!!');
  };
  const confirmDelete = useConfirm('Are you sure?', yes, no);
  return (
    <>
      <button onClick={confirmDelete}>Are you hungry???🍔🍟🍕</button>
    </>
  );
};

export default ConfirmHook;
