import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";

import React, { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

import data from "./data.js";

import MainProducts from "./pages/MainProducts.jsx";
import ProductDetail from "./components/ProductDetail.js";

function App() {
  let [products] = useState(data);

  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">On my way</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#best">Best</Nav.Link>
            <Nav.Link href="#outer">Outer</Nav.Link>
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#bottom">Bottom</Nav.Link>
            <Nav.Link href="#acc">Acc</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainProducts products={products} />} />
        <Route
          path="/detail/:id"
          element={<ProductDetail products={products} />}
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

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}
