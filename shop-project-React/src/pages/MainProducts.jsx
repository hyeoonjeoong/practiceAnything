import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

import Card from "../components/Card.js";

function MainProducts(props) {
  const { products } = props;

  const handleBtn = () => {
    console.log("hi");
    axios
      .get("/json/productInfo.json")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <Button onClick={handleBtn}>버튼</Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default MainProducts;
