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
//1) type : 간단한 타입 정할 떄 적합!
//- 기존 타입 또는 새 타입을 생성하는데 사용
//- 다른 타입 또는 인터페이스를 상속하거나 구현 불가
//- 리터럴 타입, 유티온 타입, 인터섹션 타입 사용 가능

//2) interface : 객체 구조가 잘 정의되어있는 경우 적합!
//- 객체 타입의 구조를 정의하는데 사용
//- 다른 인터페이스를 상속하거나 구현 가능
//- extends 키워드로 인터페이스 확장 가능

//다른곳에서 쓸 수 있도록 export해주어야 한다.
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

//---type에서 사용할 수 있는 메소드

//Omit : 기존꺼에서 제외하고 사용하고 싶을 때
export type AddressWithoutZip = Omit<Address, "zipCode">;

//Pick: MyShop에서 category만 가져오고 싶을 때
export type MyShopOnlyCategory = Pick<MyShop, "category">;

//---api 호출 시 이런식으로 하면 편리하다.

export type ApiResponse<T> = {
  data: T[]; //데이터가 뭐가 들어올 지 모르니 T
  totalPage: number;
  page: number;
};

export type MyShopResponse = ApiResponse<MyShop>;
export type ItemResponse = ApiResponse<Item>;
