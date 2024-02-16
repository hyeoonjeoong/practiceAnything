import React from "react";
import "./App.css";

import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import RandomCat from "./components/intersectinoObserver/RandomCat";
import CarouselComponent from "./components/slickCarousel/CarouselComponent";

function App() {
  return (
    <>
      <h3>InfiniteScroll</h3>
      {/* <InfiniteScroll /> */}
      <h3>RandomCat</h3>
      {/* <RandomCat /> */}
      <h3>Carousel</h3>
      <CarouselComponent />
    </>
  );
}

export default App;
