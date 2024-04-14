import React, { useDeferredValue, useState, useTransition } from 'react';

let testArr = new Array(10000).fill(0); //성능 저하 시켜보기.

const Practice = () => {
  let [name, setName] = useState('');

  //✅ useTransition
  //2개의 배열이 필요하다. 보통 아래처럼 작성.
  //startTransition 는 함수이다. 얘로 성능 저하가 일어나는 state를 감싸주면 된다.
  //좀 나아지긴 한다!
  //-- 브라우저는 동시 작업을 못한다. 한 번에 하나의 작업만 할 수 있다. 싱글스레드!
  //입력한 글자도 보여주고, div박스 10000개도 만들어야 하고 바쁘다.
  //-- 얘를 감싸주면? 코드 시작을 뒤로 좀 늦춰주는 것이다.
  //우선 입력한 글자를 input에 보여주고, 여유 될 때 div박스를 만든다.

  let [isPending, startTransition] = useTransition();
  //isPending은 startTransition이 처리중일 때 true로 된다.

  //✅ useDeferredValue
  //(여기) 안에 넣은게, 변동 사항이 생기면 늦게 처리해준다.
  //늦게 처리 원하는 state를 넣어주면 된다!
  let state = useDeferredValue(name); //얘로 사용하려면 38번째 줄. {name}말고 {state}이렇게 하면 되겠다.

  return (
    <>
      <h4>Practice</h4>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value); //얘가 문제다. 사용자가 입력할 때 마다 state를 변경해주고 있기 때문.
          });
        }}
      />
      {isPending
        ? '로딩 중!'
        : testArr.map(() => {
            return <div>{name}</div>;
          })}
    </>
  );
};

export default Practice;
