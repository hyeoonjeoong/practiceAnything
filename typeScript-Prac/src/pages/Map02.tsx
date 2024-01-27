import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Map02 = () => {
  const { naver } = window;
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  //------------------------------현재 위치 받아오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [myLocation]);

  // 내 위치 마커 표시하기
  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
        // 원하는 이미지로 마커 커스텀
        // icon: {
        //     url: pinImage,
        //     size: new naver.maps.Size(50, 52),
        //     origin: new naver.maps.Point(0, 0),
        //     anchor: new naver.maps.Point(25, 26),
        //   },
      });
    }
  }, [myLocation]);

  //주변 위치들의 위경도를 변수로 추가 ( 임의 )
  const otherLatLngs = [
    { lat: 37.53274172231237, lng: 126.95177124461686 },
    { lat: 37.53278879999967, lng: 126.95955849999976 },
    { lat: 37.53509469140108, lng: 126.9596417775591 },
    { lat: 37.53509469140108, lng: 126.9596417775591 },
  ];

  //주변 위치 마커로 표시하기 & 클릭 오버레이 이벤트 적용

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
      });

      //------------------------------주변 마커 나타내기
      for (let i = 0; i < otherLatLngs.length; i++) {
        const otherMarkers = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            otherLatLngs[i].lat,
            otherLatLngs[i].lng
          ),
          map,
        });
      }
    }
  }, [myLocation]);

  //------------------------------주변마커 오버레이 클릭 이벤트 적용하기
  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
      });

      // 주변 마커 나타내기
      const markers: naver.maps.Marker[] = [];
      const infowindows: naver.maps.InfoWindow[] = [];
      const contentTags =
        '<div class="naver-container"><p class="ptag">이러케 찍혀요</p><span class="spantag"> 얘를 아래에 뜨게하면되겠다</span></div>';

      // 반복문을 통해 찍어준다
      for (let i = 0; i < otherLatLngs.length; i += 1) {
        const otherMarkers = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            otherLatLngs[i].lat,
            otherLatLngs[i].lng
          ),
          map,
        });

        const infowindow = new naver.maps.InfoWindow({
          content: contentTags,
          borderWidth: 1,
          anchorSize: new naver.maps.Size(10, 10),
          pixelOffset: new naver.maps.Point(10, -10),
        });

        markers.push(otherMarkers);
        infowindows.push(infowindow);
      }

      naver.maps.Event.addListener(map, "idle", () => {
        updateMarkers(map, markers);
      });

      const updateMarkers = (
        isMap: naver.maps.Map,
        isMarkers: naver.maps.Marker[]
      ) => {
        const mapBounds: any = isMap.getBounds();
        let marker;
        let position;

        for (let i = 0; i < isMarkers.length; i += 1) {
          marker = isMarkers[i];
          position = marker.getPosition();

          if (mapBounds.hasLatLng(position)) {
            showMarker(isMap, marker);
          } else {
            hideMarker(marker);
          }
        }
      };

      const showMarker = (isMap: naver.maps.Map, marker: naver.maps.Marker) => {
        marker.setMap(isMap);
      };

      const hideMarker = (marker: naver.maps.Marker) => {
        marker.setMap(null);
      };

      const getClickHandler = (seq: number) => {
        return () => {
          const marker = markers[seq];
          const infoWindow = infowindows[seq];

          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        };
      };

      for (let i = 0; i < markers.length; i += 1) {
        naver.maps.Event.addListener(markers[i], "click", getClickHandler(i));
      }
    }
  }, [myLocation]);

  //------------------------------Naver Map Open API - Reverse Geocoding
  const [geoUrl, setGeoUrl] = useState(""); // open API를 호출할 때 쓰이는 url

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        // 현재 위경도를 넣어 url setting
        setGeoUrl(
          "/map-reversegeocode/v2/gc?coords=" +
            `${position.coords.latitude},${position.coords.longitude}` +
            "&orders=addr&output=json"
        );
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
    // Reverse Geocoding Open Api 호출 시도 -> proxy 우회도 해봤지만 실패. 백단에서 시도하기
    console.log("geoURL:::", geoUrl);
    const getAddress = async () => {
      axios
        .request({
          url: geoUrl,
          method: "GET",
          headers: {
            "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_ID as string, //앱 등록 시 발급받은 Client ID
            "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_SECRET as string, //앱 등록 시 발급받은 Client Secret
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    };
    getAddress();
  });
  return (
    <>
      <h3>--------Map02--------</h3>
      <div id="map" style={{ width: "80%", height: "500px" }} />;
    </>
  );
};

export default Map02;
