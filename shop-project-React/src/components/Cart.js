import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
  //✅ 장바구니 state가 App, Detail, Cart 이렇게 여러 컴포넌트에서 필요하다면
  //state는 어디에 만들어야 할 까?
  //최상위 컴포넌트에서 쓰면 된다. 근데 그럼 props 를 계속 보내주어야 한다.
  //이 때 Redux를 사용하면 된다. 모든 컴포넌트들이 props 전달 없이 state 공유가 가능하다.

  let a = useSelector((state) => {
    return state.stock;
    //--이렇게 하면 store안에 있는 모든 state를 불러온다.
    // return state;
    //--이렇게 원하는 것만 가져다 쓸 수도 있다.
    // return state.user;
  });
  console.log(a);
  return (
    <>
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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
