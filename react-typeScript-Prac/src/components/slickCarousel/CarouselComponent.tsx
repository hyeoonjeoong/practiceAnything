import React from "react";

import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardCol from "./CardCol";

function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Box>
          <CardCol barName="1번" />
        </Box>
        <Box>
          <CardCol barName="2번" />
        </Box>
        <Box>
          <CardCol barName="3번" />
        </Box>
        <Box>
          <CardCol barName="4번" />
        </Box>
        <Box>
          <CardCol barName="5번" />
        </Box>
      </Slider>
    </div>
  );
}

export default CarouselComponent;

const Box = styled.div`
  width: 300px;
  height: 200px;
  /* background-color: red; */
`;

//커스텀 스타일 적용 시
// const CustomSlider = styled(Slider)`
//   position: relative;
//   display: inline-block;
//   width: 430px;
//   height: 200px;
//   align-items: center;
//   justify-content: center;
//   margin: 5px;
//   padding: 5px 20px;
// `;
