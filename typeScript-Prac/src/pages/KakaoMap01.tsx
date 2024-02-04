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

      function displayCenterInfo(result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          const infoDiv = document.getElementById("centerAddr");
          if (infoDiv !== null) {
            infoDiv.innerHTML = result[0].address_name;

            // setCenterRegion를 호출한 후에 주소 정보를 업데이트합니다.
            const updatedCenterRegion = result[0].address_name;
            setCenterRegion(updatedCenterRegion);

            console.log("Region: ", updatedCenterRegion);
            // console.log("2depth: ", result[0].region_2depth_name);
            // console.log("3depth: ", result[0].region_3depth_name);
            //setMoveKeyword(`${result[0].region_2depth_name}`);
            setMoveKeyword(`${result[0].region_3depth_name}`);
          }
        }
      }

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new window.kakao.maps.services.Geocoder();

      // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
      searchAddrFromCoords(newMap.getCenter(), displayCenterInfo);

      // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
      window.kakao.maps.event.addListener(newMap, "idle", function () {
        searchAddrFromCoords(newMap.getCenter(), displayCenterInfo);
      });

      function searchAddrFromCoords(coords: any, callback: any) {
        // 좌표로 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      }
    };

    initializeMap();
  }, []);

  useEffect(() => {
    // 키워드 값 바뀔때마다 검색
    // handleSearch();
    handleMoveSearch();
    console.log("moveKeyword", moveKeyword);
  }, [moveKeyword]);

  const handleMoveSearch = () => {
    if (map) {
      if (moveKeyword) {
        // 맨 마지막 글자가 "구"나 "동"이면 마지막 한글자를 제외합니다.
        const lastChar = moveKeyword.charAt(moveKeyword.length - 1);
        const updatedKeyword =
          lastChar === "구" || lastChar === "동"
            ? moveKeyword.slice(0, -1)
            : moveKeyword;

        const searchCategories2 = [
          "술집",
          "호프",
          "요리주점",
          "포장마차",
          "오뎅바",
          "와인바",
          "일본식주점",
          "칵테일바",
        ];

        const ps = new window.kakao.maps.services.Places(map);

        //사용자 입력 -구, -동 + 카테고리
        searchCategories2.forEach((category) => {
          ps.keywordSearch(`${updatedKeyword} ${category}`, placesSearchCB);
          console.log(`${updatedKeyword} ${category}`);
        });

        //사용자 입력 + 카테고리
        searchCategories2.forEach((category) => {
          ps.keywordSearch(`${moveKeyword} ${category}`, placesSearchCB);
          console.log(`${moveKeyword} ${category}`);
        });

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
    }
  };
  const handleSearch = () => {
    if (map) {
      const keywordInput = document.getElementById(
        "searchInput"
      ) as HTMLInputElement;
      let keyword = keywordInput.value.trim();

      if (keyword) {
        // 맨 마지막 글자가 "구"나 "동"이면 마지막 한글자를 제외합니다.
        const lastChar = keyword.charAt(keyword.length - 1);
        const updatedKeyword =
          lastChar === "구" || lastChar === "동"
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

        const ps = new window.kakao.maps.services.Places(map);

        //사용자 입력 -구, -동 + 카테고리
        searchCategories.forEach((category) => {
          ps.keywordSearch(`${updatedKeyword} ${category}`, placesSearchCB);
          console.log(`${updatedKeyword} ${category}`);
        });

        //사용자 입력 + 카테고리
        searchCategories.forEach((category) => {
          ps.keywordSearch(`${keyword} ${category}`, placesSearchCB);
          console.log(`${keyword} ${category}`);
        });

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
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <h3>KakaoMap01 - 지역명 검색 시 "술집 카테고리" 더해져서 검색</h3>
      <ul>
        <li>"용산" 검색 시 "용산 술집", "용산 이자카야"로 검색되도록</li>
        <li>클릭했을떄 뜨는 정보 안사라진다</li>
      </ul>
      <span>지도중심기준 행정동 주소정보: </span>
      <span id="centerAddr"></span>
      <Map id="map" />
      <div>
        <input
          type="text"
          id="searchInput"
          placeholder="장소를 검색하세요"
          value={keyword} // Use the 'keyword' state as the value
          onChange={handleInputChange} // Handle input changes
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </>
  );
};

export default KakaoMap01;
