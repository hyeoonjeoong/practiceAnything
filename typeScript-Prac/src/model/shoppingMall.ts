// let data = {
//     name: "타입옷가게",
//     category: "clothes",
//     address: {
//       city: "seoul",
//       detail: "somewhere",
//       zipCode: "232343",
//     },
//     item: [
//       { name: "hoodie", price: "18000", category: "top" },
//       { name: "jean", price: "38000", category: "pants" },
//     ],
//   };

//--type 만드는 방법은 2가지 (큰 차이는 없다. 사용할 수 있는 메소드가 다른 느낌)
//--type
//--interface

//다른곳에서 쓸 수 있도록 export
export type MyShop = {
  name: string;
  category: string;
  address: Address;
  item: Item[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Item = {
  name: string;
  price: number;
  category: string;
};
