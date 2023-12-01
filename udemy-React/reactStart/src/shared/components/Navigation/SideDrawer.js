import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    //SideDrawer가 언제 보일지 라이브러리에도 알려줘야 한다. in프로퍼티 사용.
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  //ReactDOM.createPortal 을 통해 어떤 콘텐츠를 어느 위치에 렌더링 할건지 정할 수 있다.
  //그리고 렌더링이 될 위치를 DOM에서 선택한다. index.html에서 지정한 아이디를 넣는다.
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
