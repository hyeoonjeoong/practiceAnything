import React, { useEffect, useState } from "react";
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

const KakaoMap01 = () => {
  const [map, setMap] = useState<any>(null);

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
      // 기본 검색어를 "술집"으로 설정
      ps.categorySearch("FD6", placesSearchCB, { useMapBounds: true });

      function placesSearchCB(data: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          for (let i = 0; i < data.length; i++) {
            displayMarker(newMap, data[i], bounds);
          }
          newMap.setBounds(bounds);
        }
      }

      function displayMarker(map: any, place: any, bounds: any) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        window.kakao.maps.event.addListener(marker, "click", function () {
          const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });

        bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
      }
    };

    initializeMap();
  }, []);

  const handleSearch = () => {
    const keywordInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const keyword = keywordInput.value;

    if (keyword) {
      const combinedKeyword = `${keyword} 술집`;

      const ps = new window.kakao.maps.services.Places(map);
      ps.keywordSearch(combinedKeyword, placesSearchCB);

      function placesSearchCB(data: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          for (let i = 0; i < data.length; i++) {
            displayMarker(map, data[i], bounds);
          }
          map.setBounds(bounds);
        }
      }

      function displayMarker(map: any, place: any, bounds: any) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        window.kakao.maps.event.addListener(marker, "click", function () {
          const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });

        bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
      }
    }
  };

  return (
    <>
      <Map id="map" />
      <div>
        <input type="text" id="searchInput" placeholder="장소를 검색하세요" />
        <button onClick={handleSearch}>검색</button>
      </div>
    </>
  );
};

export default KakaoMap01;
