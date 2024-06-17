//---------------------------------------------------------------------------------------------------------
// generics

function logText(text) {
  console.log(text);
  return text;
}
logText("Hi"); //타입 없으니 아무거나 다 넘길 수 있다. //'Hi'
logText(true); //타입 없으니 아무거나 다 넘길 수 있다. //true
logText(100); //타입 없으니 아무거나 다 넘길 수 있다. //100

function logText02<T>(text: T): T {
  console.log(text);
  return text;
}

//함수 호출 할 때 파라미터의 타입을 지정하면서 그 때 넘겨줄게! 이다. 이게 제네릭.
logText02("텍스트"); //기본적으로 string 이 간다. 추론 해 준 것.
logText02<string>("이렇게해도됨");

//---------------------------------------------------------------------------------------------------------
//기존 타입 정의 방식과 제네릭의 차이점
function logText03(text: string) {
  console.log(text);
  text.split("").reverse().join("");
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}
logNumber(50);
const newNum = logNumber(50);
newNum.toString(); //number 이기 때문에 이와 관련된 거 쓸 수 있게 된다.

//--> 근데 type 을 다르게 만들기 위해 중복되는 코드이지만 다 다르게 만든다? 비효율적이다.
//--> 이래서 필요한 게 유니온 타입
//--> 근데 얘로 선언하면 또 문제가 있다.
function logWhat(text: string | number) {
  console.log(text);
  return text;
}

//--> 들어오는 값에 대한 처리는 되지만, 반환값에 대한 처리는 제대로 안된다.
const aa = logText("a"); //문자를 받았지만 반환값은 string | number 가 된다.
aa.split(""); //에러가 뜬다. 만약 number 면 제공 안되는 거니까.
logText(10);

//---------------------------------------------------------------------------------------------------------
//제네릭의 장점과 타입 추론에서의 이점
//제네릭으로 해보자.

function logText04<T>(text: T): T {
  //함수에서 어떤 타입을 받을건지, 그리고 받을 파라미터의 타입은 뭔지, 리턴할 때 타입은 뭔지
  console.log(text);
  return text;
}
logText04("hi");
logText04(10);

const str02 = logText04<string>("hi"); //string 으로 받아서 쓰겠다고 호출 할 때 정의
str02.split(""); //이렇게 가능. string 이라는 거 아니까.

//동일한 함수 내에서 다른 타입으로도 이용할 수 있다. (위에서 처럼 각각 만드는게 아니라, 타입은 비워놓고 호출 시점에 추론해서 정의 하는 것)
const login = logText04<boolean>(true);

//---------------------------------------------------------------------------------------------------------
//interface에 제네릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj03: Dropdown = { value: "hi", selected: false };

interface Dropdown02<T> {
  value: T;
  selected: boolean;
}
const obj04: Dropdown02<string> = { value: "hi", selected: false };
const obj05: Dropdown02<number> = { value: 10, selected: false };

//---------------------------------------------------------------------------------------------------------
//제네릭의 타입 제한 (타입에 대한 힌트를 줄 수 있다.)
//function logTextLength<T>(text:T):T{
function logTextLength<T>(text: T[]): T[] {
  //이렇게 [] 배열이라고 표시를 해주면 length가 들어올거라 유추 할 수 있다.
  console.log(text.length); //ts에서는 logTextLength에 어떤 타입이 들어올 지 모른다. 그러니 length는 없다는 에러가 뜬다. 이 때 힌트를 준다.
  return text;
}

//logTextLength('hi')
logTextLength<string>(["hi", "bye"]);

//---------------------------------------------------------------------------------------------------------
//정의된 타입으로 타입을 제한하기 (정의 된 타입을 이용 할 수 있다.)
interface LengthType {
  length: number;
}
function logTextLength02<T extends LengthType>(text: T): T {
  //extends를 해서 length가 있다고 알려준다.
  text.length;
  return text;
}

logTextLength02("a"); //문자열은 기본적으로 length 속성이 제공된다.
// logTextLength02(10) //숫자는 length 속성이 제공 되지 않는다.
// var a = logTextLength02(10) //이러케 하고
// a. //찍어보면 사용 할 수 있는 속성 없다.

logTextLength02({ length: 10 });

//---------------------------------------------------------------------------------------------------------
//keyof로 제네릭의 타입 제한하기

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption(10); //제네릭이니까 다 된다.
getShoppingItemOption<string>("pants"); //제네릭이니까 다 된다.

//interface에 정의된 속성만 받겠다고 제한하려면?
//ShoppingItem에 있는 key들 중에 한 가지가 제네릭이 된다는 것. (extends를 통해 제네릭에 들어올 수 있는 옵션, 즉 타입을 제한 하는 것.)

//T 타입의 변수는 ShoppingItem의 키값만 값으로 받을 수 있다.
//키는 원래 string이기 때문에 그래서 'name', 'price', 'stock'만 들어갈 수 있는 것.
//keyof를 이용해서 ShoppingItem 인터페이스의 키만 들어갈 수 있게 타입을 제약. getShoppingItemOption()의 반환 값은 크게 의미를 두지 않아도 된다.
function getShoppingItemOption02<T extends keyof ShoppingItem>(
  itemOption: T
): T {
  return itemOption;
}

getShoppingItemOption02("name");

//추가 예시로 <T extends keyof { age: number, admin: boolean }>(param: T) 로 정의되었다면 age와 admin만 T에 올 수 있다고 보면 된다.
