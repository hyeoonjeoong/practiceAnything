import React from "react";
import { Item } from "../types/shoppingMall";

//---Omit 사용
//Item 타입에서 price를 제외하고 가져오고 싶다면?
// interface OwnProps extends Omit<Item, "price"> {
//---------------------------------------------------

//-----interface
interface OwnProps extends Item {
  //상속한 내용에 함수를 추가 ~ 함수 타입 작성
  showBestItem(name: string): string;
}

//-----type
// type OwnProps = Item & {
//   showBestItem(name: string): string;
// }

//그럼 여기서도 다 가져올 수 있다.
const BestItem: React.FC<OwnProps> = ({
  name,
  price,
  category,
  showBestItem,
}) => {
  return (
    <>
      <h3>---BestItem---</h3>
      <div>name: {name}</div>
      <div>price: {price}</div>
      <div>category: {category}</div>
    </>
  );
};

export default BestItem;
