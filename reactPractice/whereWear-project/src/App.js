import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./User/pages/Users";
import UserFeed from "./Feed/pages/UserFeed";
import NewFeed from "./Feed/pages/NewFeed";
import MainHeader from "./Shared/components/Navigation/MainHeader";
import Login from "./User/pages/Login";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/:userId/feed" exact={true}>
          <UserFeed />
        </Route>
        <Route path="/feed/new" exact={true}>
          <NewFeed />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
