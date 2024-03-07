import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

//✅--컴포넌트의 LifeCycle
//mount - 컴포넌트가 보여지는, 페이지에 장착되는
//update - 업데이트가 되고
//unmount - 제거 되는
//---왜 알아야 하는 가?
//내가 코드 실행에 간섭 할 수 있다. 어느 시점에 코드를 실행 할 지에 대한.

//옛날 React에서 Lifecycle hook 쓰는 법 / class형 (지금은 별로 안쓴다.)
// class Detail2 extends React.Component{
//   componentDidMount(){//mount 시

//   }
//   componentDidUpdate(){ //update 시

//   }
//   componentWillUnmount(){//unmount 시

//   }
// }

function ProductDetail(props) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  const { products } = props;
  //useParams()를 사용하면 현재 /:url파라미터 자리에 유저가 입력한 값을 가져올 수 있다.
  let { id } = useParams();

  //✅언제 쓰면 좋은 가?
  //useEffect 안에 있는 코드는 html렌더링 후에 동작한다!
  //만약 복잡한 연산을 해줘야 한다면?
  //html을 먼저 보여주고 복잡한 연산을 한다. 효율적으로 동작하게 되는 셈.
  //서버에서 데이터 가져올 때에도 주로 사용한다. (html보여주는 것에 비해 덜 중요한.)
  //타이머 장착하거나.

  useEffect(() => {
    console.log("hi, useEffect");

    setTimeout(() => {
      //렌더링 후 2초 후에 alert 사라지게 하기
      setAlert(false);
    }, 2000);
  }, []);

  const findProduct = products.find((product) => product.id == id);
  console.log(findProduct);
  if (!findProduct) {
    console.log("상품을 찾을 수 없습니다.");
  }

  return (
    <>
      <Container>
        {alert == true ? (
          <div className="alert alert-warning">2초 이내 구매 시 할인</div>
        ) : null}

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
