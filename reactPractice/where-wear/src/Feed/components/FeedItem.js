import React from "react";
import "./FeedItem.css";
import Card from "../../Shared/components/UIElements/Card";
import Button from "../../Shared/components/UIElements/Button";

const FeedItem = (props) => {
  return (
    <>
      <li className="feed-item">
        <Card>
          <img className="feed-item__img" src={props.image} alt={props.title} />
          <div>
            <h3>What kind of product is it?</h3>
            {props.title}
            <h3>Where did you buy it?</h3>
            {props.purchase}
          </div>
          <br />
          <Button>
            <a href={props.link}>
              <button>상품 구경가기!</button>
            </a>
          </Button>
        </Card>
      </li>
    </>
  );
};

export default FeedItem;
