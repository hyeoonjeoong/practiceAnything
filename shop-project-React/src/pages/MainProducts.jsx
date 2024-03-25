import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import Card from '../components/Card.js';
import { useState } from 'react';

function MainProducts(props) {
  const { products } = props;
  const [item, setItem] = useState(products);
  console.log(item);

  const handleBtn = () => {
    axios
      .get('/json/productInfo.json')
      .then((res) => {
        console.log(res.data);
        let newData = [...products, ...res.data];
        setItem(newData);
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
          {item.map((product) => (
            <Col md={4} key={product.id}>
              <Card
                img={product.img}
                title={product.title}
                content={product.content}
                id={product.id}
              />
            </Col>
          ))}
        </Row>
        <Button onClick={handleBtn}>더보기</Button>
      </Container>
    </>
  );
}
export default MainProducts;
