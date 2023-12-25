import { Container, Row, Col } from "react-bootstrap";

import Card from "../components/Card.js";

function MainProducts(props) {
  const { products } = props;

  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id}>
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
