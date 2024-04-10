import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount, deleteItem } from '../store.js';
import { changeName, increase } from '../store/userSlice.js';

//✅ 경우에 따라서 다른 html 태그들을 보여주고 싶은 경우
//state를 만들어놓고 if문으로 state를 다르게 하는 방법도 있지만, object/array 자료형을 응용해서 할 수도 있다.
//자바스크립트 object 자료형에 내가 보여주고 싶은 HTML을 다 담아준다.
//현재 key값에 맞는 value를 보여주는 것!
const moreInfo = {
  info: <p>상품정보</p>,
  shipping: <p>배송관련</p>,
  refund: <p>환불약관</p>,
};

const Cart = () => {
  //moreInfo에 지정해 줄 현재 상태.
  const nowTab = 'info';

  //✅ 장바구니 state가 App, Detail, Cart 이렇게 여러 컴포넌트에서 필요하다면
  //state는 어디에 만들어야 할 까?
  //최상위 컴포넌트에서 쓰면 된다. 근데 그럼 props 를 계속 보내주어야 한다.
  //이 때 Redux를 사용하면 된다. 모든 컴포넌트들이 props 전달 없이 state 공유가 가능하다.

  //✅ 리덕스 store에 저장한 값 가져오기--------------------
  // let a = useSelector((state) => {
  //   return state.stock;
  //--이렇게 하면 store안에 있는 모든 state를 불러온다.
  // return state;
  //--이렇게 원하는 것만 가져다 쓸 수도 있다.
  // return state.user;
  // });
  // console.log(a);
  ////----------------------------------------

  let state = useSelector((state) => state);
  //console.log(state);

  //✅ redux state 변경하기 3.
  //store.js로 요청을 보내주는 함수.
  //dispatch를 가져다가 state변경을 해야한다.
  //dispatch(state변경함수()) 이러케 감싸서 사용.
  let dispatch = useDispatch();

  return (
    <>
      {state.user.name}의 장바구니. 나이는 {state.user.age}
      <button onClick={() => dispatch(increase(10))}>나이더하기</button>
      <button onClick={() => dispatch(changeName())}>이름바꾸기</button>
      <Table>
        <thead>
          <tr>
            <th> 🛒 </th>
            <th>상품명</th>
            <th>수량</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>
                {' '}
                <button
                  onClick={() => {
                    dispatch(minusCount(state.cart[i].id));
                  }}
                >
                  -
                </button>
                {state.cart[i].count}{' '}
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteItem(state.cart[i].id));
                  }}
                >
                  ✖️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>{moreInfo[nowTab]}</div>
    </>
  );
};

export default Cart;
