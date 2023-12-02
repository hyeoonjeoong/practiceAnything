import React from "react";
import { useParams } from "react-router-dom";

import FeedList from "../components/FeedList";

const DUMMY_FEED = [
  {
    id: "feedId1",
    image:
      "https://m.matinkim.com/web/product/extra/small/202204/82262645008c3fe22b4985b571e10579.jpg",
    title: "가방",
    purchase: "마뗑킴",
    link: "https://product.29cm.co.kr/catalog/2265357?source=item_detail&source_type=similar_item",
    creator: "userId1",
  },
  {
    id: "feedId2",
    image:
      "https://m.matinkim.com/web/product/extra/small/202204/82262645008c3fe22b4985b571e10579.jpg",
    title: "가방",
    purchase: "마뗑킴",
    link: "https://product.29cm.co.kr/catalog/2265357?source=item_detail&source_type=similar_item",
    creator: "userId2",
  },
];
const UserFeed = () => {
  const userId = useParams().userId;
  const viewFeed = DUMMY_FEED.filter((feed) => feed.creator === userId);
  return (
    <>
      <FeedList items={viewFeed} />
    </>
  );
};

export default UserFeed;
