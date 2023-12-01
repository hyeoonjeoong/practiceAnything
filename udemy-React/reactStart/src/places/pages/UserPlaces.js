//유저가 등록한 플레이스 정보데이터가 보여지는 페이지

import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building22",
    description: "One of the most famous sky scrapers in the world!222",
    imageUrl:
      "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  //url에 부호화된 userId정보를 엑세스 할 수 있다.
  const userId = useParams().userId;
  //DUMMY_PLACES의 모든 요소를 필터링해서 반환한다. 조건은 place.creator === userId
  //내가 보고 있는 장소의 게시물을 등록한 사람이 userId와 매칭된다면 배열을 반환한다.
  //내 계정이면 내가 작성한 게시물만 보이도록 해주는 것.
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
