import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import MainProducts from "./pages/MainProducts.jsx";
import ProductDetail from "./components/ProductDetail.js";

import data from "./data.js";
import Card from "./components/Card.js";

function App() {
  let [products] = useState(data);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">On my way</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#best">Best</Nav.Link>
            <Nav.Link href="#outer">Outer</Nav.Link>
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#bottom">Bottom</Nav.Link>
            <Nav.Link href="#acc">Acc</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={<MainProducts />} />
      </Routes>
      <Routes>
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
