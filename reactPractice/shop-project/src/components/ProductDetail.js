import React, { useState } from "react";

import { Container, Nav, Row, Col } from "react-bootstrap";

import data from "../data.js";

function ProductDetail() {
  let [products] = useState(data);

  return (
    <>
      <Container>
        <Row>
          {products.map((product) => (
            <>
              <Col md={6}>
                <img src={product.img} width="100%" />
              </Col>
              <Col md={6}>
                <h4 className="pt-5">{product.title}</h4>
                <p>{product.content}</p>
                <p>{product.price}</p>
                <button className="btn btn-danger">주문하기</button>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
