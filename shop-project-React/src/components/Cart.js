import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store.js';

const Cart = () => {
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

  //✅ redux state 변경하기 3.
  //store.js로 요청을 보내주는 함수.
  //dispatch를 가져다가 state변경을 해야한다.
  //dispatch(state변경함수()) 이러케 감싸서 사용.
  let dispatch = useDispatch();

  return (
    <>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th> 🛒 </th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  버튼!
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
