const colorOptions = Array.from(
  document.getElementsByClassName('color-option')
);
const color = document.getElementById('color');
const lineWidth = document.getElementById('line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

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
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

//console.log(colorOptions);
colorOptions.forEach((color) => color.addEventListener('click', onColorClick));

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
