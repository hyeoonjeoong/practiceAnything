import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data.js';

import MainProducts from './pages/MainProducts.jsx';
import ProductDetail from './components/ProductDetail.js';
import Cart from './components/Cart.js';
import axios from 'axios';
import { useQuery } from 'react-query';

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

  //✅ react-query
  //useQuery로 감싸서 사용한다. return 두개가 필요하다.
  //--- 1) 요청 시 성공, 실패, 로딩 중인지 쉽게 파악하기에 좋다.
  //result는 아래 변수! 원래 있는 거 아님. 이런식으로 기본적인 키워드로 더 쉽게 볼 수 있게 되는 것.
  //result.data -> 요청이 성공했을 때 가져오는 데이터
  //result.isLoading --> 요청이 로딩 중일 때 true가 된다.
  //result.error --> 요청 실패했을 때 true가 된다.
  //예를 들어 로딩 중일 때 "로딩중이다..."를 보여주고 싶다면?
  // {result.isLoading} 이런식으로 바로 사용할 수 있다.
  //그냥 리액트라면??? 일일이 useState를 사용해야 한다..
  //--- 2) 자동으로 재요청 해준다. 신선한 데이터를 얻을 수 있다 자동으로 refetch해준다!
  //{staleTime:2000} 이런식으로 타이머도 적용 가능하다.
  //--- 3) 요청 실패 시 알아서 요청을 재시도 해준다.
  //--- 4) state공유를 안해도 된다 .
  //예를 들어 상위 컴포넌트, 하위 컴포넌트에서 같은 데이터가 필요하다?
  //쌩 리액트라면 state를 만들어 props로 보내거나 하겠지만???
  //얘는 걍 상위, 하위 컴포넌트에서 동일한 요청 똑같이 작성해줘도 된다.
  //그럼 똑같은 요청을 두번이나 하면 비효율적이지 않은가?? ㄴㄴ!!
  //react-query는 똑똑해서 같은 요청을 두번 하지 않는다. 알아서 합쳐서 한 번에 요청을 한다.
  //캐싱도 해준다. 요청 결과를 기억을 해준다. 동일한 요청을 5분전에도 했다면? 그럼 5분 전 결과를 우선적으로 보여준다.
  //이전 성공한 요청을 우선적으로 보여주고 요청을 진행한다! 클라이언트 측에서는 더 빠르다고 느낄 듯.

  let result = useQuery('작명', () => {
    return axios
      .get('https://codingapple1.github.io/userdata.json')
      .then((a) => {
        return a.data;
      });
  });
  console.log(result.data);

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
          <Nav className="ms-auto">
            반가워요 {result.isLoading ? 'Loading...' : 'result.data.name'}
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
