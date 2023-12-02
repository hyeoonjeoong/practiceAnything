import React from "react";
import FeedItem from "./FeedItem";

const FeedList = (props) => {
  return (
    <ul>
      {props.items.map((feed) => (
        <FeedItem
          key={feed.id}
          id={feed.id}
          image={feed.image}
          title={feed.title}
          purchase={feed.purchase}
          link={feed.link}
          creatorId={feed.creator}
        />
      ))}
    </ul>
  );
};

export default FeedList;
