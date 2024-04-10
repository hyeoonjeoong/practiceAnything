import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data.js';

import MainProducts from './pages/MainProducts.jsx';
import ProductDetail from './components/ProductDetail.js';
import Cart from './components/Cart.js';

export let Context1 = createContext();

function App() {
  useEffect(() => {
    if (localStorage.getItem('watched')) return;
    localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  let [products] = useState(data);
  let [stock] = useState([10, 11, 12]);

  const navigate = useNavigate();

  //localStorage
  //-- 객체나 배열의 경우는 넣을 때 JSON 형태로 넣어야 한다.
  let obj = { name: 'dana' };
  //JSON.stringify(obj) //arr, object -> JSON변환 시 사용
  localStorage.setItem('data', JSON.stringify(obj));
  //-- 출력 할 때는?
  //다시 object로 변환해줘야지
  let 꺼낼거 = localStorage.getItem('data');
  console.log(JSON.parse(꺼낼거).name);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">On my way</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#best">Best</Nav.Link>
            <Nav.Link href="#outer">Outer</Nav.Link>
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#bottom">Bottom</Nav.Link>
            <Nav.Link href="#acc">Acc</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainProducts products={products} />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <ProductDetail products={products} />
            </Context1.Provider>
          }
        />
      </Routes>
      <Routes>
        {/* --------------------- */}
        {/* nested route */}
        {/* 유사한 여러 페이지가 필요할 때 (차이점이 없을 때 사용) */}
        {/* /about으로 접속 시 안에 있는 element 다 보인다. 단 어디에 보여줄지 지정해야 한다. Outlet 사용 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        {/* --------------------- */}
        {/* <Route path="*" element={<div>404 없는 페이지</div>} /> */}
      </Routes>
    </>
  );
}

export default App;

//About 요소로 들어왔을 때 Outlet 위치에 하위 페이지 요소들이 보여진다.
//<Outlet>은 nested routes안의 element들을 어디에 보여줄지 표기하는 곳. 하위 요소들의 위치를 잡아준다고 생각.
function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

//---------------------------------------------------------------
//⭐️ public 폴더에 있는 이미지 사용 시

// (1)그냥 이미지 경로 사용
// public 폴더에 넣으면 import 안해도 된다.
// css 파일에서도 /이미지경로 사용
// <img src="/logo192.png" />

//(2)env 경로 사용 (권장)
//<img src={process.env.PUBLIC_URL + '/logo192.png'} />
//배포 시 다른 경로에 배포하게 되면 파일을 찾을 수 없다고 나올 수 있다.

//---------------------------------------------------------------
//⭐️ css 파일에서 src 폴더안에 있는 사진 사용 시 : 그냥 이미지 경로 사용
// .main-bg {
//   height : 300px;
//   background-image : url('./bg.png');
//   background-size : cover;
//   background-position : center;
// }

//---------------------------------------------------------------
//⭐️ html 파일에서 src 폴더안에 있는 사진 사용 시 : 이미지 import 해와야 한다.

//---(1) url로 작성
// import bg from './bg.png'
//<div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>

//---(2) <img>태그 사용
//<img src={bg}/>
