import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

import React, { useState } from "react";

import data from "./data.js";
import Card from "./components/Card.js";

function App() {
  let [products] = useState(data);

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">On my way</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#best">Best</Nav.Link>
            <Nav.Link href="#outer">Outer</Nav.Link>
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#bottom">Bottom</Nav.Link>
            <Nav.Link href="#acc">Acc</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {products.map((product) => (
            <Col md={4}>
              <Card
                img={product.img}
                title={product.title}
                content={product.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
