import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import data from "../data.js";
import Card from "../components/Card.js";

function MainProducts() {
  let [products] = useState(data);

  return (
    <>
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
    </>
  );
}
export default MainProducts;
