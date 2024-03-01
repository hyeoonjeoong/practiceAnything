//💚 처음부터 다시 연습해보기

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// type ComponentType = "favorite" | "myreview";
// interface BarProps {
//   active: boolean;
// }
// //setSelectedPage는 콜백함수! 이런 경우 보통 type으로 Dispatch를 사용한다.
// //useState를 통한 세터함수로 업데이트하는거기 떄문에 React.SetStateAction 이다.
// //그리고 state의 타입을 지정해준다.
// interface MenuBarProps {
//   setSelectedPage: React.Dispatch<React.SetStateAction<ComponentType>>;
//   selectedPage: ComponentType;
// }

// const MenuBar: React.FC<MenuBarProps> = ({ setSelectedPage, selectedPage }) => {
//   return (
//     <MenuBarLayout>
//       <MenuBarBox>
//         <FavoriteLayout
//           onClick={() => setSelectedPage("favorite")}
//           active={selectedPage === "favorite"}
//         >
//           <FavoriteImg>
//             <img
//               src={
//                 process.env.PUBLIC_URL +
//                 (selectedPage === "favorite"
//                   ? "assets/images/mypage_favorite_active.png"
//                   : "assets/images/mypage_favorite_nonactive.png")
//               }
//               alt="Favorite"
//             />
//           </FavoriteImg>
//           <FavoriteBar active={selectedPage === "favorite"} />
//         </FavoriteLayout>
//         <MyReviewLayout
//           onClick={() => setSelectedPage("myreview")}
//           active={selectedPage === "myreview"}
//         >
//           <MyReviewImg>
//             <img
//               src={
//                 process.env.PUBLIC_URL +
//                 (selectedPage === "myreview"
//                   ? "assets/images/mypage_myreview_active.png"
//                   : "assets/images/mypage_myreview_nonactive.png")
//               }
//               alt="My Review"
//             />
//           </MyReviewImg>
//           <MyReviewBar active={selectedPage === "myreview"} />
//         </MyReviewLayout>
//       </MenuBarBox>
//     </MenuBarLayout>
//   );
// };

// export default MenuBar;

// const MenuBarLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 5px 0px;
//   gap: 10px;
//   width: 100%;
//   height: 45px;
// `;

// const MenuBarBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 14px;
//   width: 90%;
//   height: 35px;
// `;

// const FavoriteLayout = styled.nav<{ active: boolean }>`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0px;
//   gap: 3px;
//   width: 100%;
//   height: 33px;
//   cursor: pointer;
// `;

// const FavoriteBar = styled.div<BarProps>`
//   width: 156px;
//   height: 3px;

//   background: #B9B7B7;
//   ${({ active }) =>
//     active &&
//     `
//     background: #4D607B;
//   `}
//   border-radius: 20px;
// `;

// const FavoriteImg = styled.div`
//   img {
//     width: 15px;
//     height: 22px;
//     object-fit: contain;
//   }
// `;

// const MyReviewLayout = styled.nav<{ active: boolean }>`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0px;
//   gap: 3px;
//   width: 326px;
//   height: 33px;
//   cursor: pointer;
// `;

// const MyReviewBar = styled.div<BarProps>`
//   width: 156px;
//   height: 3px;

//   background: #CCD2DB;
//   ${({ active }) =>
//     active &&
//     `
//     background: #4D607B;
//   `}
//   border-radius: 20px;
// `;

// const MyReviewImg = styled.div`
//   img {
//     width: 22px;
//     height: 22px;
//     object-fit: contain;
//   }
// `;
