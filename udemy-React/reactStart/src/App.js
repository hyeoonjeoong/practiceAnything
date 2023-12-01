import React from "react";
// as Router 는 import해오는 BrowserRouter를 Router라는 이름으로 가져오겠다는거. 별명 지어주는 것.
//그리고 Route도 가져온다.
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigiation";

//---Router , Route
//라우터를 사용해야 하는 앱 일부를 모두 감싸준다.
//<Users/>렌더 될 페이지 ( 이 컴포넌트가 렌더링 되는 것)
//얘는 어떤 경로든 / 로 시작하기만 하면 Users를 렌더링하게 된다.

//---exact
//여기서 path를 <Route path = "/"> 이렇게 하면
//얘는 어떤 경로든 / 로 시작하기만 하면 Users를 렌더링하게 된다.
// ~~/hi 여도 Users페이지가 렌더된다.
// ~~/ 일 때 만! 렌더링하게 하고 싶다면 exact 프로퍼티를 추가해야한다.
//그럼 경로가 /인 경우에만 라우트가 렌딩된다.

//---Redirect
//url이 변경되면 React의 라우터는 아래 설정된 라우트를 전체적으로 훑는다.
//경로에 /밖에 없다면 Users 렌더링하고, /뒤에 무언가 있다면 이 부분을 트리거 하지 않고
//Redirect를 실행시켜서 다시 /로 리디렉션 시킬 것이다.

//---Switch
//위에서 아래로 쭉 내려간다. 특정 url에 해당되더라도 멈추지 않고 실행되어서 /로 Redirect 하게 된다.
//이걸 막아준다. Switch컴포넌트는 Route정의를 감싸줄 수 있다.
//첫 Route 앞과 Redirect 뒤에 작성하면 된다.
//Switch 내부에 있는 코드는 일치하는 라우트를 만나면 다음 줄 건너뛰도록 하는 것.

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/:userId/places" exact={true}>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact={true}>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
