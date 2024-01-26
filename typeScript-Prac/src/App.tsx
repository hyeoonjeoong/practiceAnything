import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Address, MyShop } from "./model/shoppingMall";

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

  return (
    <div className="App">
      {/* Store에서 props를 받아줄 때의 type도 정해줘야 한다. */}
      <Store info={myShop} changeAddress={changeAddress} />
    </div>
  );
};

export default App;
