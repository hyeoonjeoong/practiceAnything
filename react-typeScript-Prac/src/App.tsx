import React from "react";
import "./App.css";

import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import RandomCat from "./components/intersectinoObserver/RandomCat";
import CarouselComponent from "./components/slickCarousel/CarouselComponent";
import MultipleCheck from "./components/multipleCheckBox/MultipleCheck";
import RoundButton from "./components/button/RoundButton";

function App() {
  const handleButton = () => {
    console.log("버튼 클릭");
  };
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
      <h3>Button type, props 처리</h3>
      <RoundButton onClick={handleButton}>버튼</RoundButton>
    </>
  );
}

export default App;
