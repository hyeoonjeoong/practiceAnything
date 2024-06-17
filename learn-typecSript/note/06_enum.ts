enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes); //'나이키'
//---------------------------------------------------------------------------------------------------------
function askQuestion(answer: string) {
  if (answer === "yes") {
    console.log("Yes");
  }
  if (answer === "no") {
    console.log("No");
  }
}
askQuestion("y");
askQuestion("예스");
askQuestion("Yes");

//answer: string -> 이렇게 하면 문자열 아무거나 넣어도 다 된다. 제약이 없는 것.
//--> 구체적인 값으로 제한을 못한다.
//---------------------------------------------------------------------------------------------------------
//--> enum 으로 하면 제약을 줄 수 있다.
//enum 에서 제공하는 데이터만 넣을 수 있다.
//목록이 필요한 형태에서 정확한 코드나 예외처리 등 신경을 덜 쓸 수 있다.
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion02(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("Yes");
  }
  if (answer === Answer.No) {
    console.log("No");
  }
}

askQuestion02(Answer.Yes);
//askQuestion02('예스')//안됨
//askQuestion02('Yes')//얘도 ㄴㄴ
