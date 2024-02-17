import React from "react";
import "./App.css";

import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import RandomCat from "./components/intersectinoObserver/RandomCat";
import CarouselComponent from "./components/slickCarousel/CarouselComponent";
import MultipleCheck from "./components/multipleCheckBox/MultipleCheck";

function App() {
  return (
    <>
      <h3>InfiniteScroll</h3>
      {/* <InfiniteScroll /> */}
      <h3>RandomCat</h3>
      {/* <RandomCat /> */}
      <h3>Carousel</h3>
      <CarouselComponent />
      <h3>MultipleCheck</h3>
      <MultipleCheck />
    </>
  );
}

export default App;
