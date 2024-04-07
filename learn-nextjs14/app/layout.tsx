import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies...',
  },
  description: 'The best movies on the best framework.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

//-------------✅ Layout
// --> 예를 들어 NavBar는 여러 컴포넌트에서 사용한다. 그럼 각 컴포넌트마다 일일이 코드를 복붙해야 하나?
// 이 때 필요한 것이 Layout!
//Next.js는 layout컴포넌트에 있는 export된 컴포넌트들을 렌더링 한다.

//<Layout>
//	<여기에 페이지 컴포넌트들이 들어가고 렌더링 되는 것/>
//</Layout>

// --> Layout이 여러개 필요하다면? 사용하는 페이지다 다른 레이아웃이 필요할 수 있다. 레이아웃 중첩 가능!
//해당 폴더 안에 page.tsx와 함께 layout.tsx파일을 만들면 된다!
//상위로 올라가면서 레이아웃 파일이 있다면, 알아서 해당 레이아웃을 사용해서 하위 항목을 렌더링해준다.
// --> 최상단 레이아웃이 기본이고 나머지 폴더에 레이아웃이 있다면 알아서 적용 시켜주는 것!

//(오 여기 레이아웃이랑 페이지 보여줘야겠군. 상위 폴더로 가자. 여긴 페이지만 있네 ㅇㅋ, 상위 폴더로 가자. 여기도 레이아웃, 페이지 있네. ㅇㅋ 그럼 이렇게 해서 적용시키면 되겠군 ~)

//-------------✅ Metadata
// 메타데이터도 중첩이 가능하다. 하지만 실제로 중첩되지는 않고 병합이 된다.
// 컴포넌트에서는 내보낼 수 없다.
// page, layout에서만 내보낼 수 있다. 또한 서버 컴포넌트에만 있을 수 있다!
//---> head에 직접 작성할 필요도 없고 더 명시적이다!
//---> 메타데이터 라는 객체를 내보내기만 하면 된다.  이름은 꼭 `metadata` 여야 한다!

//-----layout에 이렇게 메타데이터를 작성해주고
// export const metadata = {
//   title: {
//     template: '%s | Next Movies',
//     default: 'Next Movies...',
//   },
//   description: 'The best movies on the best framework.',
// };

//-----about-us에 이렇게 메타데이터를 작성했다면?
// export const metadata = {
//   title: 'About us',
// };

//그리고 about-us 페이지로 이동하게 되면???
//프레임워크가 해당 Title을 가져와 넣어준다. 아래처럼 되는 셈!
// export const metadata = {
//   title: {
//     template: 'About us | Next Movies',
//     default: 'Next Movies...',
//   },
//   description: 'The best movies on the best framework.',
// };
