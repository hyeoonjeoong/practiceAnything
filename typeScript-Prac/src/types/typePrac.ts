import { createContext } from "react";
//------------------------------------------------------
//✅타입스크립트는 모든 내용에 대한 타입 지정이 필요하다.
//string, number 이런 단순거 말고 함수나, 세터함수나 등등
//뭐가 무슨 타입인지에 대해 알아두자.
//프로젝트 진행하면서 알게 된 내용들
//------------------------------------------------------

//--세터 함수는 이렇게 할 수 있다.
// export type SetTagsFunction = (
//   value: TagsState | ((prevState: TagsState) => TagsState)
// ) => void;

//--렌더링 될 컴포넌트 지정
//어떤 컴포넌트가 렌더링 될 지에 대해 명시적으로 작성.
type ComponentType = "favorite" | "myreview";

//--콜백 함수
//setSelectedPage는 콜백함수! 이런 경우 보통 type으로 Dispatch를 사용한다.
//useState를 통한 세터함수로 업데이트하는거기 떄문에 React.SetStateAction 이다.
//그리고 state의 타입을 지정해준다.
interface MenuBarProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<ComponentType>>;
  selectedPage: ComponentType;
}

//리액트 훅인 useContext를 사용할 때에도 타입을 지정해주어야한다.
//그냥 뭐든 명시적으로 한 번 씩 더 작성해준다고 생각.
export const CheckboxContext = createContext<any | null>(null);

//--폰트 파일 같은 경우 그냥 import 해 올 수 없다.
//font.d.ts 파일 생성 후 아래와 같이 작성해준다.
//해당 확장자를 모듈로써 선언하는 것.
// declare module "*.ttf" {
//     const value: any;
//     export = value;
//   }
//   declare module "*.woff" {
//     const value: any;
//     export = value;
//   }
