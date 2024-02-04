import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = styled.div`
  width: 80%;
  height: 700px;
  margin: 20px;
`;

const Map01 = () => {
  const [map, setMap] = useState<any>(null);
  const [centerRegion, setCenterRegion] = useState<string>("");
  const [keyword, setKeyword] = useState("");
  const [moveKeyword, setMoveKeyword] = useState("");

  useEffect(() => {
    const initializeMap = () => {
      const mapContainer = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(
          37.53005069999996,
          126.96089345393857
        ),
        level: 3,
      };

      const newMap = new window.kakao.maps.Map(mapContainer, options);
      setMap(newMap);

      const ps = new window.kakao.maps.services.Places(newMap);

      const displayCenterInfo = (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const infoDiv = document.getElementById("centerAddr");
          if (infoDiv) {
            infoDiv.innerHTML = result[0].address_name;

            const updatedCenterRegion = result[0].address_name;
            setCenterRegion(updatedCenterRegion);

            console.log("Region: ", updatedCenterRegion);
            setMoveKeyword(`${result[0].region_3depth_name}`);
          }
        }
      };

      const geocoder = new window.kakao.maps.services.Geocoder();

      const searchAddrFromCoords = (coords: any, callback: any) => {
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      };

      searchAddrFromCoords(newMap.getCenter(), displayCenterInfo);

      window.kakao.maps.event.addListener(newMap, "idle", () => {
        searchAddrFromCoords(newMap.getCenter(), displayCenterInfo);
      });
    };

    initializeMap();
  }, []);

  useEffect(() => {
    handleMoveSearch();
    console.log("moveKeyword", moveKeyword);
  }, [moveKeyword]);

  const handleMoveSearch = () => {
    if (map && moveKeyword) {
      const updatedKeyword =
        moveKeyword.endsWith("구") || moveKeyword.endsWith("동")
          ? moveKeyword.slice(0, -1)
          : moveKeyword;

      const searchCategories = [
        "술집",
        "호프",
        "요리주점",
        "포장마차",
        "오뎅바",
        "와인바",
        "일본식주점",
        "칵테일바",
      ];

      searchPlacesByCategory(updatedKeyword, searchCategories);
    }
  };

  const handleSearch = () => {
    if (map && keyword) {
      const updatedKeyword =
        keyword.endsWith("구") || keyword.endsWith("동")
          ? keyword.slice(0, -1)
          : keyword;

      const searchCategories = [
        "술집",
        "호프",
        "요리주점",
        "포장마차",
        "오뎅바",
        "와인바",
        "일본식주점",
        "칵테일바",
      ];

      searchPlacesByCategory(updatedKeyword, searchCategories);
    }
  };

  const searchPlacesByCategory = (
    baseKeyword: string,
    categories: string[]
  ) => {
    const ps = new window.kakao.maps.services.Places(map);

    categories.forEach((category) => {
      const fullKeyword = `${baseKeyword} ${category}`;
      ps.keywordSearch(fullKeyword, placesSearchCB);
      console.log(fullKeyword);
    });

    function placesSearchCB(data: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        data.forEach((place: any) => displayMarker(map, place, bounds));
        map.setBounds(bounds);
      }
    }

    function displayMarker(map: any, place: any, bounds: any) {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        infowindow.setContent(
          `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
        );
        infowindow.open(map, marker);
      });

      bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <span>지도중심기준 행정동 주소정보: </span>
      <span id="centerAddr"></span>
      <Map id="map" />
      <div>
        <input
          type="text"
          id="searchInput"
          placeholder="장소를 검색하세요"
          value={keyword}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </>
  );
};

export default Map01;
