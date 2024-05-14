import React, { memo } from 'react';

const Child02 = ({ name, tellMe }) => {
  console.log('🐤🐤 둘째 등장.');
  return (
    <>
      <div style={{ border: '2px solid green', padding: '10px' }}>
        <h3>🐤🐤 둘째</h3>
        <p>성 : {name.lastName}</p>
        <p>이름 : {name.firstName}</p>
        <button onClick={tellMe}>뺙뺙???</button>
      </div>
    </>
  );
};

export default memo(Child02);
