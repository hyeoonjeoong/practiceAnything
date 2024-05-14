import React, { memo, useCallback, useMemo, useState } from 'react';
import Child from './MemoCallbackChild';
import Child02 from './MemoCallbackChild02';

const MemoCallback = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);
  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };
  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log('🐔 부모 컴포넌트가 렌더링 되었어요.');

  useCallback();

  const tellMe = useCallback(() => {
    //같은 메모리 주소를 가지게 되는 것.
    console.log('뺙뺙아!!!!!');
  }, []);

  const name = useMemo(() => {
    return {
      lastName: '홍',
      firstName: '길동',
    };
  }, []);

  return (
    <>
      <div style={{ border: '2px solid navy', padding: '10px' }}>
        <h3>🐔 부모</h3>
        <p>age : {parentAge}</p>
        <button onClick={incrementParentAge}>부모 나이 증가</button>
        <button onClick={incrementChildAge}>자녀 나이 증가</button>
        <Child name={'삐약'} age={childAge} />
        <Child02 name={name} tellMe={tellMe} />
      </div>
    </>
  );
};

export default MemoCallback;

//--> 꼭 필요할 때만 사용해야 한다.
//같은 props로 자주 렌더링 될 때
//컴포넌트가 렌더링 될 때 마다 복잡한 로직을 처리해야 할 때
//--> 무분별하게 사용하면 오히려 안좋다. 렌더링 횟수 감수로 좋을 수 있지만,
//메모지에이징을 해야 하기 때문에. 어딘가에 저장해두어야 하기 때문에 메모리를 추가적으로 소비해야 한다.
