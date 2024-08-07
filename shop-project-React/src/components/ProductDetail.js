import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { Context1 } from '../App.js';
import { addItem } from '../store.js';

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
  let { stock } = useContext(Context1); //보관함 해체!
  //✅ Context API 특징
  //1. state변경 시 쓸데없는 것 까지 재렌더링된다.
  //하위 컴포넌트에서 사용하지 않더라도 무조건 다 재렌더링되어 비효율적이다.
  //2. 나중에 컴포넌트의 재사용이 어렵다. 다른 페이지에서 사용하려 할 때 변수명이 없다거나 등
  //사용해보면 좋겠지만 실제로는 잘 쓰지 않는다. 외부 라이브러리를 주로 사용한다.

  let [count, setCount] = useState(0);
  let [alertMsg, setAlertMsg] = useState(true);
  let [inputValue, setInputValue] = useState('');
  let [isTab, setIsTab] = useState(0);

  const { products } = props;
  //useParams()를 사용하면 현재 /:url파라미터 자리에 유저가 입력한 값을 가져올 수 있다.
  let { id } = useParams();

  //✅ useEffect 언제 쓰면 좋은 가?
  //useEffect 안에 있는 코드는 html렌더링 후에 동작한다!
  //만약 복잡한 연산을 해줘야 한다면?
  //html을 먼저 보여주고 복잡한 연산을 한다. 효율적으로 동작하게 되는 셈.
  //서버에서 데이터 가져올 때에도 주로 사용한다. (html보여주는 것에 비해 덜 중요한.)
  //타이머 장착하거나.
  //--- 뒤에 붙은 []는 의존성배열. 조건과 같다. 해당 변수가 달라질 때 마다 useEffect내부의 코드를 실행해준다.

  let dispatch = useDispatch();

  useEffect(() => {
    console.log('hi, useEffect');

    setTimeout(() => {
      //렌더링 후 2초 후에 alert 사라지게 하기
      setAlertMsg(false);
    }, 2000);
  }, []);

  //✅ useEffect 의 clean up function
  //내부에 return문을 넣을 수 있다. 얘는 useEffect 동작 전에 실행된다. (별멍: clean up function)
  //얘는 mount시에는 실행 안된다. unmount 시 실행된다!!
  // useEffect(() => {
  //   let a = setTimeout(() => {
  //     setAlertMsg(false);
  //   }, 2000);

  //   return () => {
  //     //리액트 특성 상 재렌더링이 잦아진다. 의도치 않게 타이머가 여러개 생성 될 수 도 있다.
  //     //그래서 기존 타이머는 제거하는 코드를 작성해준다. (주로 타이머 사용 시 이러케 한다. 쓸데없는 비효율 방지 위해!)
  //     //타이머를 변수에 넣어서 사용한다.
  //     clearTimeout(a); //타이머 제거해주는 함수.

  //     //서버로 데이터 요청 할 때에 ~ 그 사이에 재렌더링 된다면? 그럼 요청이 끝나기 전에 요청이 가고 ~~ 오류 날 수 있다.
  //     //그럴 때 이런식으로 clean up function 사용해주면 된다.
  //   };
  // }, []);

  //✅
  //useEffect(()=>{}) 재렌더링마다 코드 실행
  //useEffect(()=>{},[]) mount 시 1회 코드 실행
  //useEffect(()=>{},[count]) count라는 변수 (특정 state 변경 시에만 실행)
  //useEffect(()=>{
  // return()={
  //   //unmount 시 1회 코드 실행
  //   //useEffect 전에 뭔가 먼저 실행하고 싶을 때에도 여기에 작성
  // }
  // },[])

  //(숙제) input 숫자 아닌 값이 들어오면 alert 띄우기
  useEffect(() => {
    if (isNaN(inputValue) == true) {
      console.log('Not a Number');
      alert('숫자만 입력해주세요.');
    }
  }, [inputValue]);

  const findProduct = products.find((product) => product.id == id);
  console.log(findProduct);
  if (!findProduct) {
    console.log('상품을 찾을 수 없습니다.');
  }

  useEffect(() => {
    console.log(findProduct.id);
    let watchedItem = localStorage.getItem('watched');
    watchedItem = JSON.parse(watchedItem);
    watchedItem.push(findProduct.id);
    watchedItem = new Set(watchedItem); //알아서 중복 제거해준다.!
    watchedItem = Array.from(watchedItem); //new Set으로 새로 한 거 다시 Array로 뽑아오기
    localStorage.setItem('watched', JSON.stringify(watchedItem));
  }, []);

  return (
    <>
      <Container>
        {alertMsg == true ? (
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
              <p>useContext 잘 온다 ! {stock}</p>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="수량을 입력해주세요."
              ></input>
              <Button
                variant="dark"
                onClick={() => {
                  dispatch(
                    addItem({
                      id: findProduct.id,
                      name: findProduct.title,
                      count: 1,
                    })
                  );
                }}
              >
                주문하기
              </Button>
            </Col>
          </React.Fragment>
        </Row>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setIsTab(0)}>
              상세 정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setIsTab(1)}>
              사이즈
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setIsTab(2)}>
              리뷰
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent isTab={isTab} />
      </Container>
    </>
  );
}

function TabContent({ isTab }) {
  const [fade, setFade] = useState('');

  //---react의 automatic batching 기능
  //state가 바뀔 때 마다 재렌더링하는게 아니라
  //state변경 함수들이 가까이 있으면 다 처리하고 마지막 한 번만 재렌더링 된다.
  //이럴 때 약간의 시간차를 주어서 처리 하는 것.
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      setFade('');
    };
  }, [isTab]);
  //---------if문으로 해도 되지만
  // if (isTab == 0) {
  //   return <div>내용0</div>;
  // }
  // if (isTab == 1) {
  //   return <div>내용1</div>;
  // }
  // if (isTab == 2) {
  //   return <div>내용2</div>;
  // }

  //---------배열을 사용해도 된다.
  //array자료형에서 [i] 인덱스를 가져온다.
  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][isTab]}
    </div>
  );
}
export default ProductDetail;
