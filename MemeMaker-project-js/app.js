const saveBtn = document.getElementById('save');
const textInput = document.getElementById('text');
const fileInput = document.getElementById('file');
const modeBtn = document.getElementById('mode-btn');
const destroyBtn = document.getElementById('destroy-btn');
const eraserBtn = document.getElementById('eraser-btn');

const colorOptions = Array.from(
  document.getElementsByClassName('color-option')
);
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = 'round';

let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }

  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  //console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  //console.log(event.target.value);
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  //console.log(event.target);
  //console.dir(event.target.dataset.color); //객체로 확인
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = 'Fill';
  } else {
    isFilling = true;
    modeBtn.innerText = 'Draw';
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = 'white';
  isFilling = false;
  modeBtn.innerText = 'Fill';
}

function onFileChange(event) {
  console.dir(event.target);
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  console.log(url);
  const image = new Image();
  image.src = url; //<img src=""/> 와 같다.
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  //save()는 ctx의 현재 상태, 색상, 스타일 등 모든 것을 저장해준다.
  //글자를 넣을 떄는 굵기1, 글자 적고 난 후에는 원래의 굵기로 돌아가기 위해 값을 저장.
  //save()를 통해 수정이 가능, 수정 완료 시에는 restore() 해주면 된다. (기존의 체크포인트로 돌아간다.)
  //이 사이에서는 어떤 수정을 하던 저장 되지 않는다.
  //--> 변경되는 코드가 실행되기 전에 저장을 하기 때문.
  //--> save()로 이전 내용을 저장, 수정, restore()로 되돌아가기.
  ctx.save();
  const text = textInput.value;
  if (text !== '') {
    ctx.lineWidth = 1;
    ctx.font = '68px serif';
    //ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.fillText(text, event.offsetX, event.offsetY);
    console.log(event.offsetX, event.offsetY);
    ctx.restore();
    textInput.value = '';
  }
}

//-- toDataURL() 메서드는 이미지를 돌려준다. base64로 인코딩 되어있다.
//url로 인코딩 된 이미지를 얻을 수 있다.
//--> canvas에 그린 그림의 url링크를 가져와 저장!
function onSaveClick() {
  console.log(canvas.toDataURL());
  const url = canvas.toDataURL();
  const a = document.createElement('a'); //a태그를 생성해 가짜 링크 만들기
  a.href = url;
  a.download = 'myDrawing.png'; //해당 파일명으로 저장되도록 설정
  a.click(); //--> 링크를 클릭하면 파일이 다운로드 된다.
}

canvas.addEventListener('dblclick', onDoubleClick);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

//console.log(colorOptions);
colorOptions.forEach((color) => color.addEventListener('click', onColorClick));

modeBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraserBtn.addEventListener('click', onEraserClick);

fileInput.addEventListener('change', onFileChange);
saveBtn.addEventListener('click', onSaveClick);

//-----------------------------------------------------------------
//--------------사각형 그려보기
// ctx.fillRect(50, 50, 100, 200); -> 얘는 단축함수
//50, 50 이동하고 가로 100 세로 200인 사각형.

// ctx.rect(50, 50, 100, 200); -> 이렇게 해도 결국 같다. 선 그리고 채워주기.
// ctx.fill();

//--------------fill(), beginPath()
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill(); //같은 경로에 있는 얘들을 같이 fill.
// //여기까지 만들고, 끊고

// ctx.beginPath(); //새로운 경로를 만든다. 결국 선을 만들고, 적용하고 하나씩 적용해야 되는 것.
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = 'red';
// ctx.fill();

////--------------moveTo(), lineTo()
// moveTo() -> 이동만 하고
// lineTo() -> 그리면서 이동한다.
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();
// ctx.fill();

//--------------집 그려보기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

//--------------캐릭터 그려보기
// ctx.fillRect(210 - 40, 200 - 30, 15, 100);
// ctx.fillRect(350 - 40, 200 - 30, 15, 100);
// ctx.fillRect(260 - 40, 200 - 30, 60, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath(); //무언가 바뀔 필요가 있을 때 새로운 path를 만들어줘야 한다!
// ctx.fillStyle = 'white';
// ctx.arc(270, 80, 6, 0, 2 * Math.PI);
// ctx.arc(230, 80, 6, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(250, 100, 6, Math.PI, 2 * Math.PI);
// ctx.fill();

//--------------클릭하면 선 긋기, 마우스가 움직임에 따라 선 긋기
// ctx.moveTo(0, 0);

// const colors = ['#EFBC9B', '#FBF3D5', '#D6DAC8', '#9CAFAA'];

// function onClick(event) {
//   //console.log(event);
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke(); //선긋기 해줘야 화면에 보여진다!
// }

// // canvas.addEventListener('click', onClick);
// canvas.addEventListener('mousemove', onClick);
