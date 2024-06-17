interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

interface TrueFalse {
  value: boolean;
  selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});

//---------------------------------------------------------------------------------------------------------
//위에서 Email, ProductNumber, TrueFalse 각각 interface를 만들어줬다.
//근데 아래처럼 만들면 다 필요 없게 된다.
//--> 값은 같은데 타입만 바뀐다면 제네릭으로 쓰는 것이 깔끔, 코드를 줄일 수 있다.
interface DropdownItem02<T> {
  value: T;
  selected: boolean;
}
// DropdownItem<string> //이렇게 쓰든가
// DropdownItem<number> //이렇게 쓰든가

const emails02: DropdownItem02<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts02: DropdownItem02<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

//function createDropdownItem02(item: DropdownItem02<string|number>) { //-> 아래처럼 제네릭으로 하면 또 줄일 수 있다.
function createDropdownItem02<T>(item: DropdownItem02<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

emails02.forEach(function (email) {
  //const item = createDropdownItem02(email); //-> 아래에서 제네릭으로 변경. 넘길 때 string 이라고 넘겨주고, 위에서 받을 때 타입이 정해지는.
  const item = createDropdownItem02<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts02.forEach(function (product) {
  const item = createDropdownItem02(product);
});
