//-----------------------------파라미터에 타입 정의
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

//-----------------------------함수 반환 값에 타입 정의
function add(): number {
  return 10;
}

//-----------------------------함수에 타입 정의
function minus(a: number, b: number): number {
  return a - b;
}
//---
function numArr(arr: number[]): number {
  return arr.length;
}
//---
const strArr02 = (arr: string[]): number => {
  return arr.length;
};

//-----------------------------옵셔널 파라미터
//올 수도 있고, 없어도 된다.
//---
function zoo(a: string, b: string, c?: string) {
  return `${a},${b},${c}`;
}
zoo("panda1", "panda2", "panda5"); //"panda1,panda2,panda5"
zoo("tiger1", "tiger2"); //"tiger1,tiger2,undefined"
//---
const sum01 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a;
};

sum01(2); //2
sum01(1, 2); //3
//-----------------------------filter
let arr02 = [
  { gender: "male", name: "dana" },
  { gender: "female", name: "jun" },
  { gender: "male", name: "hyeon" },
];

let filtered = arr02.filter((item) => {
  if (item.gender === "male") {
    return item;
  }
});
console.log(filtered);
//-> 출력
[
  { gender: "male", name: "dana" },
  { gender: "male", name: "hyeon" },
];
