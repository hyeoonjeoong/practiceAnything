const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

//--------------집 그려보기
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();

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
