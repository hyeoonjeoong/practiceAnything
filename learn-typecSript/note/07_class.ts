//---------------------------------------------------------------------------------------------------------
//--typeScript 의 class 문법

class Person05 {
  //-- ts에서는 최상단에 type 정의 해주어야 한다.
  // name: string;
  // age:number;
  //-- 변수의 유효범위도 설정해 줄 수 있다. 클래스 내부에서만 쓸 거라면 private, 기본적으로 쓸 거라면 public.
  private name: string;
  public age: number;
  readonly lgo: string;

  constructor(name: string, age: number) {
    //파라미터 타입도 지정해주기.
    this.name = name;
    this.age = age;
  }
}
