import React, { memo } from 'react';

const Child = ({ name, age }) => {
  console.log('🐤 자녀도 렌더링 되었어요.');
  return (
    <>
      <div style={{ border: '2px solid powderblue', padding: '10px' }}>
        <h3>🐤 자녀</h3>
        <p>name : {name}</p>
        <p>age : {age}</p>
      </div>
    </>
  );
};

// export default Child;

//✅ React.Memo
//--> 이렇게 감싸주면 된다.
//넣어준 Child 컴포넌트를 인자로 받아서 최적화된 컴포넌트로 반환해준다.
export default memo(Child);
//렌더링이 될 상황에 놓이면 prop check를 한다. 변화가 없다면 이전에 렌더링 된 것을 재사용한다.
//--> ✅ props 받은 name, age에 변화가 있냐 없냐를 판단하는 것!
//부모 나이 증가만 클릭한다면 prop이 변하지 않기 때문에 재렌더링 되지 않게 된다!
