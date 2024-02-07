import { useParams } from "react-router-dom";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ProductDetail(props) {
  //useParams()를 사용하면 현재 /:url파라미터 자리에 유저가 입력한 값을 가져올 수 있다.

  const { products } = props;
  let { id } = useParams();

  const findProduct = products.find((product) => product.id == id);
  console.log(findProduct);
  if (!findProduct) {
    console.log("상품을 찾을 수 없습니다.");
  }

  return (
    <>
      <Container>
        <Row>
          <React.Fragment key={findProduct.id}>
            <Col md={6}>
              <img src={findProduct.img} width="100%" alt={findProduct.title} />
            </Col>
            <Col md={6}>
              <h4 className="pt-5">{findProduct.title}</h4>
              <p>{findProduct.content}</p>
              <p>{findProduct.price}</p>
              <Button variant="dark">주문하기</Button>
            </Col>
          </React.Fragment>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
