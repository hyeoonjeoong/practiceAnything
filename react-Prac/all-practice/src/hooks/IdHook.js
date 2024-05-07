import React, { useEffect, useRef } from 'react';
import { useId } from 'react';

const IdHook = () => {
  //아무 인자도 전달받지 않는다. 호출만 하면 된다. 문자열 형태의 id를 반환받는다.
  //   const id = useId();
  //   console.log(id);

  //--> ✅ input 같은 form요소에서 접근성에 관련된 속성을 제공할 때 사용 가능.
  //--> ✅ 안정성이 있다. 만약 Math.random()과 같은 걸 사용한다면 렌더링 할 때 마다 id가 새로운 값으로 변경 될 것이다.
  //컴포넌트 함수가 호출되고, 결국 내부 변수는 호출되기 때문. 이러면 form요소의 id도 계속 바뀌게 된다. 스크린리더도 불필요하게 반복적인 일을 해야 해서 좋지 않다.
  //하지만 useId는 컴포넌트 재렌더링이 발생해도 id가 그대로 유지된다. 더 안정적이다!

  //-->✅ SSR방식에서도 좋다.
  //서버에서 렌더링 된 결과물과 클라이언트 측에서의 결과물이 일치하지 않아 문제가 생길 수 도 있다.
  //form요소의 id가 일치하지 않는거나 하는 등..
  //하지만 얘를 사용하면 동일한 id를 사용할 수 있기 때문에 좋다.

  return (
    <>
      <div>
        <hr />
        <MyInput01 />
        <MyInput01 />
        <hr />
        <MyInput02 />
        <hr />
        <MyInput03 />
      </div>
    </>
  );
};

//이런식의 컴포넌트를 여러개 import해서 사용한다고 했을 때,
//그럼 한 페이지에 중복된 id가 사용되게 된다. 좋지 않다. 어떤 레이블이 어떤 인풋에 해당되는지 알 수 없다.
//아래 레이블을 클릭해보면 엉뚱한 input에 focus된다.
//--> 각각의 input에 고유한 id를 부여해주면 된다.
function MyInput01() {
  const id01 = useId();
  console.log('id 01: ', id01);
  return (
    <div>
      <label htmlFor={id01}>이름</label>
      <input id={id01} />
    </div>
  );
}

//-------------하나의 컴포넌트에 여러개의 input이 필요하다면?
function MyInput02() {
  const id02 = useId();
  console.log('id 02: ', id02);

  return (
    <div>
      <label htmlFor={`${id02}-name`}>이름</label>
      <input id={`${id02}-name`} />
      <br />
      <label htmlFor={`${id02}-age`}>나이</label>
      <input id={`${id02}-age`} />
    </div>
  );
}

//-------------직접 접근해야 할 경우 ref를 통해 접근 가능.
function MyInput03() {
  const id03 = useId();
  const ref = useRef();

  useEffect(() => {
    //-- 이러케 말고
    // const element = document.querySelector('#btn');

    //-- 이러케 접근!
    const element = ref.current;
    console.log('MyInput03 element: ', element);
  }, []);

  return (
    <div>
      <button id="btn">버튼이다.</button>
      <label htmlFor={id03}>이름</label>
      <input id={id03} ref={ref} />
    </div>
  );
}
export default IdHook;
