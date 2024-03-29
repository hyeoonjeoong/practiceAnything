import React from "react";
import { Address, MyShop } from "../types/shoppingMall";

interface OwnProps {
  info: MyShop;
  //상위에서 보내줄 때 함수라면 () 붙여준다.
  //매개변수가 있다면 타입 동일하게 작성
  //리턴타입도 작성해준다. 없다면 void로 작성. true라면 boolean. 이런식으로.
  changeAddress(address: Address): void;
}

//리액트 function component에 들어가는 props는 <OwnProps> 타입이다.
//generic으로 작성

//props타입을 지정해준다. 그 타입은 <OwnProps> 의 myShop.
//그러니 props에서는 info를 불러올 수 있다.
//const Store: React.FC<OwnProps> = (props) => {

//가져올 때 객체형식으로
const Store: React.FC<OwnProps> = ({ info }) => {
  return (
    <>
      <h3>---Store---</h3>
      <div>{info.name}</div>
      {/* MyShop*/}
      <div>category: {info.category}</div>
      <div>address.city: {info.address.city}</div>
      <div>address.detail: {info.address.detail}</div>
      <div>address.zipCode: {info.address.zipCode}</div>
      {/* 아이템 표시 */}
      <h4>아이템:</h4>
      <ul>
        {info.item.map((item, index) => (
          <li key={index}>
            {item.name}, {item.price}, {item.category}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Store;
