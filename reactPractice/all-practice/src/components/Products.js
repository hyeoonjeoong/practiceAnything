import React, { useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "./DataTable.js";
import DataTable02 from "./DataTable02.js";

const header = [
  {
    text: "NO.",
    value: "productID",
  },
  {
    text: "상품명",
    value: "productName",
  },
  // {
  //   text: "카테고리아이디",
  //   value: "categoryID",
  // },
  {
    text: "카테고리",
    value: "categoryName",
  },
  {
    text: "가격",
    value: "productPrice",
  },
  {
    text: "상태",
    value: "productStatus",
  },
  {
    text: "정보",
    value: "productInfo",
  },
  {
    text: "배송 상태",
    value: "deliveryStatus",
  },
];

const DUMMY = [
  {
    productID: 1,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 2,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
];

// function SelectBox() {
//   return (
//     <>
//       <select name="aaaa">
//         <option value="releaseStatus" disabled defaultValue>
//           출고 상태 변경
//         </option>
//         <option value="payWait">결제 대기</option>
//         <option value="deliveryStart">출고</option>
//         <option value="cancel">취소</option>
//       </select>
//     </>
//   );
// }
const SelectBox = () => {
  return (
    <>
      <select name="aaaa">
        <option value="releaseStatus" disabled defaultValue>
          출고 상태 변경
        </option>
        <option value="payWait">결제 대기</option>
        <option value="deliveryStart">출고</option>
        <option value="cancel">취소</option>
      </select>
    </>
  );
};

function Products() {
  const [deliverySelectBox, setDeliverySelectBox] = useState("");

  const DeliverySelectBox = (items) => {
    console.log("아이템?", items);
  };

  DeliverySelectBox();
  return (
    <>
      <SelectBox />
      <h3>ver 1</h3>
      <DataTable
        keySet="productsTb_"
        headers={header}
        items={DUMMY}
        selectBox={<SelectBox />}
      />
      <h3>ver 2(실패)</h3>
      <DataTable02 keySet="productsTb_" headers={header} items={DUMMY} />
    </>
  );
}

export default Products;
