import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function getNumbers() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

const LayoutEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect 실행!', count);
  }, [count]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 실행!', count);
  }, [count]);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const [numbers, setNumbers] = useState([]);
  const ref = useRef();

  //숫자 가져와서 박스에 보여주기
  useEffect(() => {
    const nums = getNumbers();
    setNumbers(nums);
  }, []);

  //숫자 다 불러오면 스크롤 맨 밑으로 내려주기 (무거워지면 이 부분에서 delay될 수 있다.)
  //✅ useEffect()
  //   useEffect(() => {
  //     if (numbers.length === 0) {
  //       return;
  //     }
  //     for (let i = 0; i < 30000000; i++) {}
  //     ref.current.scrollTop = ref.current.scrollHeight;
  //   }, [numbers]);

  //✅ useLayoutEffect()
  //-- 딜레이 없이 스크롤이 맨 아래로!
  //업데이트 된 컴포넌트가 화면에 그려지기 전에 실행된다.
  //동기적으로 실행되기 때문에 화면이 업데이트 되는 것을 블로킹힌다.
  //화면이 업데이트 되기 전에 실행 될 것을 보장받을 수 있다. ui가 계산된 뒤에 보여지는 것이기 때문!
  useLayoutEffect(() => {
    if (numbers.length === 0) {
      return;
    }
    for (let i = 0; i < 30000000; i++) {}
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [numbers]);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleCountUpdate}>Update!</button>
      </div>
      <br />
      <button onClick={() => setNumbers([])}>Reset</button>
      <div
        ref={ref}
        style={{
          height: '300px',
          border: '1px solid blue',
          overflow: 'scroll',
        }}
      >
        {numbers.map((number, idx) => (
          <p key={idx}>{number}</p>
        ))}
      </div>
    </>
  );
};

export default LayoutEffectHook;

//✅ 차이는? --> effect가 실행되는 시점.

//✅ useEffect()
//--> 화면이 업데이트(렌더링)된 후에 effect가 실행
//비동기적으로 실행된다. 다른 작업을 블로킹하지 않고 알아서 적절할 때에 실행 된다.

//✅ useLayoutEffect()
//--> effect가 실행 된 후에 화면이 업데이트(렌더링)
//--> 사용자에게 보여지는 ui를 더 정교하게 다룰 수 있다.
//화면에 그려지기 이전에 effect가 실행된다.
//동기적으로 실행된다. 해당 작업이 실행 되는 동안 다른 게 업데이트 되지 않는다. (화면에 업데이트 되지 않는다.)
//--> 느리더라도 화면의 정확하게 동작하기를 원할 때 사용하는 것이 좋다.
//--> 무분별하게 쓰면 좋지 않다. 딜레이 걸린다!
//effect가 모두 완료될 때 까지 화면 업데이트가 완료되지 못하도록 블로킹 하기 때문에, 막 사용하면 프로그램 성능에 무리가 갈 수 있다.

//--> 그럼 언제 사용?
//컴포넌트를 화면에 배치하기 전에, ui적인 계산을 해야 할 때,
//깜빡이거나 딜레이 없이 정확한 시점에 보여주고 싶을 때.
