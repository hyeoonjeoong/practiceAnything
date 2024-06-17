//---------------------------------------------------------------------------------------------------------
//class 는 es6 부터 생겨남

class Person02 {
  //여기에 클래스 로직 작성
  //기본적으로 instance 만들어준다. 초기화를 위해 constructor 만들어준다.
  constructor(name, age) {
    console.log("constructor 생성");
    this.name = name;
    this.age = age;
  }
}
new Person02();
//콘솔창에 'constructor 생성' 보여진다.

//--> 필요한 값을 넘겨서 설정 해 줄 수 있다.
//--> 객체로 받을 수 있다.
var jane = new Person02("jane", 30);
console.log(dana);
//--(아래처럼 찍힘
// Person: {
//     "name": "Dana",
//         "age": 30
// }
//)--

//--> 왜 쓰는 거? / class 는 prototype 과 관련 있다.
//---------------------------------------------------------------------------------------------------------
//--prototype?
var user = { name: "Dana", age: 100 };
var admin = {}; //빈 객체로 생성
admin.__propto__ = user; //admin 의 프로토타입을 만든다. user 를 상속받아서. (user 가 가지고 있던 정보를 내려 받는 것.)
//그러면
admin.name; //'Dana' 가 된다.
admin.age; //100 이 된다.
//admin을 찍어보면 빈 객체로 나온다. 빈 객체로 생성을 했으니까.
admin; // {}, 그리고 __propto__ 이런식으로 프로토타입이 뜬다. 이 안에 user 가 가지고 있던 정보가 들어있다.)
//admin에 role을 추가해보면?
admin.role = "admin";
admin; //{role:'admin'} 그리고 __propto__ 내부에 user 가 가지고 있던 정보.

//--prototype 활용
var obj02 = { a: 10 };
Object.keys(obj02); //['a']
obj.hasOwnProperty("a"); //true
obj; // {a:10}

//object 를 생성하고 나서 보면
//기본적으로 위에 있는 프로토타입은 오브젝트이다. __proto__ : Object

//---------------------------------------------------------------------------------------------------------
//--prototype , class 의 관계
//--> 아래 두 함수는 결국 같다.

//프로토타입 기반 생성자 함수 사용하면
function Person03(name, age) {
  this.name = name;
  this.age = age;
}
var Jeong = new Person03("Jeong", 30);

//클래스로 사용하면
//(프로토타입 문법으로 작성하는 코드보다 좀 더 간결하거나 명시적인 부분을 제공해준다.)
class Person04 {
  constructor(name, age) {
    console.log("새로운 사람 생성");
    this.name = name;
    this.age = age;
  }
}

var Hyeon = new Person04("Hyeon", 30);
