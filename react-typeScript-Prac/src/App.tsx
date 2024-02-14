import React from "react";
import "./App.css";

import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import RandomCat from "./components/intersectinoObserver/RandomCat";

function App() {
  return (
    <>
      <h3>InfiniteScroll</h3>
      {/* <InfiniteScroll /> */}
      <h3>RandomCat</h3>
      <RandomCat />
    </>
  );
}

export default App;
