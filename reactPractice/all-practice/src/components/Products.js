import React, { useState } from "react";
import { Link } from "react-router-dom";

import DataTable from "./DataTable.js";
import PageNation from "./PageNation.js";
// import DataTable02 from "./DataTable02.js";

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
  },
  {
    productID: 2,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
  },
  {
    productID: 3,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
  },
  {
    productID: 4,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
  },
  {
    productID: 5,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
  },
  {
    productID: 6,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
  },
  {
    productID: 7,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
  },
  {
    productID: 8,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
  },
  {
    productID: 9,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
  },
  {
    productID: 10,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
  },
  {
    productID: 11,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
  },
  {
    productID: 12,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
  },
];
function Products() {
  //---PageNation
  const [currentPage, setCurrentPage] = useState(1);
  const oneOfPage = 10;

  const indexOfLastItem = currentPage * oneOfPage;
  const indexOfFirstItem = indexOfLastItem - oneOfPage;

  const currentItems = DUMMY.slice(indexOfFirstItem, indexOfLastItem);

  function handlePageClick(selectPage) {
    setCurrentPage(selectPage);
  }
  const handleDelete = (updatedItems) => {
    setItems(updatedItems);
  };

  //---deleteProducts (진행중)
  const [items, setItems] = useState(DUMMY);
  console.log("바뀐 items 넘어오는거 확인", items);

  return (
    <>
      <h3>상품 관리</h3>
      <DataTable
        keySet="productsTb_"
        headers={header}
        items={currentItems}
        setItems={setItems}
        setDelete="true"
      />
      {/* <button>선택 상품 삭제하기</button> */}
      <PageNation
        total={DUMMY.length}
        limit={oneOfPage}
        page={currentPage}
        setPage={handlePageClick}
      />
    </>
  );
}

export default Products;
