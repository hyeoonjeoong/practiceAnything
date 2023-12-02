import React from "react";

const FeedItem = (props) => {
  return (
    <>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <h3>What kind of product is it?</h3>
        {props.title}
        <h3>Where did you buy it?</h3>
        {props.purchase}
        <a href={props.link}></a>
      </div>
      <hr />
      <button>상품 구경가기!</button>
    </>
  );
};

export default FeedItem;
