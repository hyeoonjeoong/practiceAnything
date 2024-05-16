'use client';
import React, { useEffect, useState } from 'react';

const fetchData = async () => {
  const res = await fetch('https://dummyjson.com/carts/1');
  const data = await res.json();
  return data.products;
};

export default function Bottom() {
  const [bottomData, setBottomData] = useState(null);

  useEffect(() => {
    const fetchBottom = async () => {
      const products = await fetchData();
      console.log(products);
      setBottomData(products);
    };
    fetchBottom();
  }, []);

  return (
    <>
      <div>아랫도리!</div>
      <div>
        {bottomData &&
          bottomData.map((item) => (
            <>
              <div>
                <img src={item.thumbnail} alt={item.title} width="150px" />
              </div>
              <div>상품명: {item.title}</div>
              <div>총 구매 수: {item.total}</div>
              <div>가격: {item.price}</div>
              <div>재고: {item.quantity}</div>
            </>
          ))}
      </div>
    </>
  );
}
