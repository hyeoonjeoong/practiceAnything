// import React, { useEffect, useState } from "react";
// import { NaverMap, Marker } from "react-naver-maps";
// import axios from "axios";

// const Map03: React.FC = () => {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     // 네이버 지도 API 호출
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://openapi.naver.com/v1/search/category.json",
//           {
//             headers: {
//               "X-Naver-Client-Id": "kv71rzhnhq",
//               "X-Naver-Client-Secret":
//                 "pzp3oiTAHtMzwLdiaI7nHDjiVDYLIzJm80QqH3sk",
//             },
//             params: {
//               category: "FD6", // 술집 업종 코드
//               display: 10, // 표시할 결과 수
//             },
//           }
//         );

//         setPlaces(response.data.items);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "600px" }}>
//       <NaverMap
//         mapTypeId="yourMapId" // 유일한 ID를 지정합니다.
//         // style={{ width: "100%", height: "100%" }}
//         defaultCenter={{ lat: 37.5665, lng: 126.978 }} // 서울의 기본 좌표
//         defaultZoom={12}
//         // onInitialized={(map) => console.log("NaverMap initialized:", map)}
//       >
//         {places.map((place: any) => (
//           <Marker
//             key={place.id}
//             position={{
//               lat: parseFloat(place.mapy),
//               lng: parseFloat(place.mapx),
//             }}
//           />
//         ))}
//       </NaverMap>
//     </div>
//   );
// };

// export default Map03;

import React from "react";

const Map03 = () => {
  return <div>Map03</div>;
};

export default Map03;
