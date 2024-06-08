//----------------------------- 문자열
const str: string = "hello";
const nickname: string = "Dana";

//----------------------------- 숫자
const num: number = 10;

//----------------------------- 배열
const arr1: Array<string> = [];
arr1.push("hi");

const arr2: Array<number> = [1, 2, 3];

//숫자로 이루어진 배열의 type : number[]
let arr: number[] = [1, 2, 3, 4, 5];

//문자로 이루어진 배열의 type : string[]
let strArr: string[] = ["a", "b", "c"];
let strArr2: Array<string> = ["a", "b", "c"]; //이러케도 가능

//숫자와 문자로 이루어진 배열은?
let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];
let abc: number | string = "a"; //둘 중 하나의 자료형이 들어올 수 있다.
abc = 5;

// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);

//----------------------------- 튜플 (순서와 type까지 지정 가능)
const address: [string, number] = ["seoul", 11];

//----------------------------- 객체
//object 자료형. 객체 자체를 의미한다.
const obj: object = {};
// obj.a = 10;

let obj2: object = {
  name: "loopy",
};

//객체를 열어주고 내부에 타입 지정도 가능
let dana: { age: number; address: string; gender: string } = {
  age: 22,
  address: "seoul",
  gender: "female",
};
//----------------------------- 타입 객체
const person: { age: number; gender: string } = { age: 17, gender: "female" };
person.age = 101;

//----------------------------- 진위값
let isLogin: boolean = false;
