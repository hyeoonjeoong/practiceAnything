import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}
const Map2 = styled.div`
  width: 80%;
  height: 700px;
  margin: 20px;
`;
const KakaoMap02 = () => {
  //-----------------------------------------기본 지도 생성
  useEffect(() => {
    // 마커를 클릭하면 장소명을 표출할 인포윈도우
    const infowindow2 = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    const container2 = document.getElementById("map2"); // 지도를 표시할 div
    const option2 = {
      center: new window.kakao.maps.LatLng(
        37.53005069999996,
        126.96089345393857
      ), // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성
    const map2 = new window.kakao.maps.Map(container2, option2);

    //-----------------------------------------카테고리로 장소 검색하기
    // 장소 검색 객체를 생성
    const ps2 = new window.kakao.maps.services.Places(map2);

    // 카테고리로 음식점을 검색
    ps2.categorySearch("FD6", placesSearchCB, { useMapBounds: true });

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place: any) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new window.kakao.maps.Marker({
        map: map2,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow2.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow2.open(map2, marker);
      });
    }
  }, []);

  return (
    <>
      <Map2 id="map2" />
    </>
  );
};
export default KakaoMap02;
