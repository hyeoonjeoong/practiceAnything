import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import MainDashBoard from "./pages/MainDashBoard";
import SideBar from "./pages/SideBar";
import Products from "./pages/products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <container className="grid-container">
        <Router>
          <header className="left-box">
            <SideBar />
          </header>
          <main className="right-box">
            <Route path="/admin" exact={true}>
              <MainDashBoard />
            </Route>
            <Route path="/admin/products" exact={true}>
              <Products />
            </Route>
            <Route path="/admin/orders" exact={true}>
              <Orders />
            </Route>
            <Route path="/admin/users" exact={true}>
              <Users />
            </Route>
            <Redirect to="/admin" />
          </main>
        </Router>
      </container>
    </>
  );
}

export default App;
