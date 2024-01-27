// import { useEffect, useState } from "react";

// function Map() {
//   const [mapPoint, setMapPoint] = useState({ x: null, y: null });
//   const [location, setLocation] = useState("");
//   console.log(location);
//   useEffect(() => {
//     const mapDiv = document.getElementById("map");
//     const map = new window.naver.maps.Map(mapDiv);

//     window.naver.maps.Event.addDOMListener(mapDiv, "click", () => {
//       const coordinate = { x: map.data.map.center.x, y: map.data.map.center.y };

//       setMapPoint({ x: coordinate.x, y: coordinate.y });

//       window.naver.maps.Service.reverseGeocode(
//         {
//           coords: new window.naver.maps.LatLng(coordinate.y, coordinate.x),
//           // coords: map.getCenter(),
//           orders: [
//             window.naver.maps.Service.OrderType.ADDR,
//             window.naver.maps.Service.OrderType.ROAD_ADDR,
//           ].join(","),
//         },
//         (
//           status: number,
//           response: {
//             v2: {
//               address: {
//                 jibunAddress: string;
//               };
//             };
//           }
//         ) => {
//           if (status !== window.naver.maps.Service.Status.OK) {
//             console.error("Reverse geocoding 오류 - 상태:", status);
//             console.error("Reverse geocoding 오류 - 응답:", response);
//             return alert("Something wrong!");
//           }
//           const result = response.v2;
//           setLocation(result.address.jibunAddress);
//           console.log("결과값은", result.address.jibunAddress);
//         }
//       );
//     });
//   }, []);

//   return (
//     <div>
//       <div
//         id="map"
//         style={{
//           width: "400px",
//           height: "400px",
//           zIndex: "2",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <img
//           alt="마커이미지"
//           src="https://fontawesome.com/icons/location-pin?f=classic&s=solid"
//           style={{
//             position: "absolute",
//             zIndex: "1",
//             width: "30px",
//           }}
//         /> */}
//       </div>
//       <div>{mapPoint.x}</div>
//       <div>{mapPoint.y}</div>
//       <div>주소는 : {location}</div>
//     </div>
//   );
// }

// export default Map;

import React from "react";

const Map01 = () => {
  return <div>Map01</div>;
};

export default Map01;
