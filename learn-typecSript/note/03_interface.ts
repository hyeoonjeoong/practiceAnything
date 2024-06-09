//-----------------------------interface
//여러 object의 타입을 정의할 수 있다.
//객체 타입의 구조를 정의 할 때 사용
//다른 인터페이스를 상속하거나 구현 가능
//extends 로 확장 가능

//--✅ 변수에 인터페이스 활용
interface User {
  age: number;
  name: string;
}

let Dana: User = {
  age: 30,
  name: "다나",
};
//변수에 인터페이스 활용
interface DrinkInfo {
  productName: string;
  price: number;
}

const coke: DrinkInfo = { productName: "coke", price: 3000 };

//--✅ 함수에 인터페이스 활용
//파라미터에 정의 된 타입(인터페이스)를 잘 따르는가
//-> 이 함수는 특정 인터페이스로 정의 된 인터페이스만 받겠다. 라고 선언하는 것.
function getUser(user: User) {
  console.log(user);
}

const newUser = {
  name: "cookie",
  age: 20,
};

getUser(newUser);
//출력 값
//   {
//     name: 'cookie',
//     age: 20
//   }

//--✅ 함수의 구조에 인터페이스를 활용
//함수의 전체적인 모습까지 정의 할 수 있다.
interface SumFunction {
  (a: number, b: number): number;
}

let sum02: SumFunction;
sum02 = function (a: number, b: number) {
  return a + b;
};

//--✅ 인덱싱 방식을 정의하는 인터페이스
//속성 이름이 정해져 있지 않고, 속성을 사용할 때 마다 지정할 수 있는
//객체에 어떤 key가 들어올 지 모를 때 인덱싱을 정의할 수 있다.
interface StringArray {
  [index: number]: string; //배열의 인덱스는 number, 배열의 각 요소는 string이여야 한다.
}
let arr03: StringArray = ["a", "b", "c"]; //StringArray 인터페이스를 따르기 때문에, 각 인덱스에 해당하는 값은 string이다.

//이렇게 하면 오류
//arr03[0] = 10
//이렇게 해야 한다.
arr03[0] = "e";

//--✅ 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  //왼쪽엔 속성, 오른쪽엔 정규표현식 와야 한다.
  //이 인터페이스를 따르는 객체의 모든 속성은 정규 표현식(RegExp)이어야 한다.
  [key: string]: RegExp;
}
let obj01: StringRegexDictionary = {
  //sth:/abc/
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj01).forEach(function (value) {
  //-->인터페이스를 사용하여 객체의 속성 타입을 제한하고, 객체의 속성을 순회하면서 필요한 작업을 수행.
  // value는 obj01의 속성 이름을 나타낸다.
  //예를 들어, 첫 번째 호출에서는 value가 "cssFile"이고, 두 번째 호출에서는 value가 "jsFile".
  console.log(`${value}: ${obj01[value]}`); //각 속성 이름과 그에 해당하는 정규 표현식을 출력.
});

//--✅ 인터페이스 확장(상속)
//---기본
interface Person {
  name: string;
  age: number;
}

interface Developer01 {
  //동일한 속성을 굳이 또 작성하지 말고
  name: string;
  age: number;
  gender: string;
}

interface Developer02 extends Person {
  //이렇게 상속받아 쓰면 된다.
  gender: string;
}

var Dana01: Developer02 = {
  name: "dana",
  age: 30,
  gender: "male",
};

//---함수 메소드를 사용하려면?
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  //함수 정의. 매개변수 없고 return값도 없다.
  eat: () => void;
}

const Person: Person = { name: "dana", age: 28 };
const stu: Student = {
  name: "dana",
  age: 88,
  studentID: "00000000",
  eat: () => console.log("hi."),
};
