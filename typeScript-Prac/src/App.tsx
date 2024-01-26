import React, { useState } from "react";
import "./App.css";
import Store from "./pages/Store";
import { Address, MyShop } from "./types/shoppingMall";
import BestItem from "./pages/BestItem";
import Map from "./pages/Map";

declare global {
  interface Window {
    naver: any;
  }
}

//let 변수명:타입명
let data: MyShop = {
  name: "타입옷가게",
  category: "clothes",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipCode: 232343,
  },
  item: [
    { name: "hoodie", price: 18000, category: "top" },
    { name: "jean", price: 38000, category: "pants" },
  ],
};
const App: React.FC = () => {
  //useState에서의 type 지정
  // < > 안에 타입 넣어준다. -> generic문법
  // useState를 부르는 순간 <type>을 지정해주는 것. 리액트에서는 뭐가 뭔 타입인지 알 수 없다. useState는 리액트에서 제공하기 때문.

  const [myShop, setMyShop] = useState<MyShop>(data);

  const changeAddress = (address: Address) => {
    setMyShop({ ...myShop, address: address });
  };

  const showBestItem = (name: string) => {
    return name;
  };
  return (
    <div className="App">
      {/* Store에서 props를 받아줄 때의 type도 정해줘야 한다. */}
      <Store info={myShop} changeAddress={changeAddress} />
      <BestItem
        name="ring"
        category="acc"
        price={11000}
        showBestItem={showBestItem}
      />
      <Map />
    </div>
  );
};

export default App;
