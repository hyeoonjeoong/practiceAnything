import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}
const Map3 = styled.div`
  width: 80%;
  height: 700px;
  margin: 20px;
`;

const KakaoMap03 = () => {
  const mapContainerId = "map3";
  const centerCoord = { lat: 37.566826, lng: 126.9786567 };
  const initialLevel = 3;

  useEffect(() => {
    const map3 = new window.kakao.maps.Map(
      document.getElementById(mapContainerId),
      {
        center: new window.kakao.maps.LatLng(centerCoord.lat, centerCoord.lng),
        level: initialLevel,
      }
    );

    const geocoder = new window.kakao.maps.services.Geocoder();
    const placesService = new window.kakao.maps.services.Places();

    const marker = new window.kakao.maps.Marker();
    const infowindow3 = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시
    searchAddrFromCoords(map3.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시
    window.kakao.maps.event.addListener(
      map3,
      "click",
      function (mouseEven: any) {
        searchDetailAddrFromCoords(
          mouseEven.latLng,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const detailAddr = !!result[0].road_address
                ? `<div>도로명주소 : ${result[0].road_address.address_name}</div>`
                : "";
              const content = `<div class="bAddr">
                                <span class="title">법정동 주소정보</span>
                                ${detailAddr}
                            </div>`;

              // 마커를 클릭한 위치에 표시
              marker.setPosition(mouseEven.latLng);
              marker.setMap(map3);

              // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시
              infowindow3.setContent(content);
              infowindow3.open(map3, marker);
            }
          }
        );
      }
    );

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시
    window.kakao.maps.event.addListener(map3, "idle", function () {
      searchAddrFromCoords(map3.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords: any, callback: any) {
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords: any, callback: any) {
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    function displayCenterInfo(result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const infoDiv = document.getElementById("centerAddr");
        if (infoDiv !== null) {
          infoDiv.innerHTML = result[0].address_name;
          // 2depth, 3depth
        }
        // for (let i = 0; i < result.length; i++) {
        //   infoDiv.innerHTML = result[i].address_name;
        // }
      }
    }

    // 지도 이동 시 키워드로 장소 검색
    window.kakao.maps.event.addListener(map3, "dragend", function () {
      const center = map3.getCenter();
      const centerRegion = `${center.getLat()},${center.getLng()}`;

      // 키워드로 장소를 검색
      placesService.keywordSearch("술집", function (data: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정
          map3.setBounds(bounds);
        }
      });
    });

    function displayMarker(place: any) {
      const marker = new window.kakao.maps.Marker({
        map: map3,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      window.kakao.maps.event.addListener(marker, "click", function () {
        infowindow3.setContent(
          `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
        );
        infowindow3.open(map3, marker);
      });
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행
  return (
    <>
      <h3>KakaoMap03 - 업종에 맞춰 가져오기 (술집)</h3>
      <p>이동할때마다 확인되는 주소지 확인, 주소기 기반으로 재검색 되도록</p>
      <div className="hAddr2">
        <h5 className="title2">지도중심기준 주소정보: </h5>
        <h5 id="centerAddr2"></h5>
      </div>
      <Map3 id="map3" />
    </>
  );
};

export default KakaoMap03;
