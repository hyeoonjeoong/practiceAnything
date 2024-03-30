import Navigation from '../components/navigation';

export default function Tomato() {
  return (
    <>
      <div>
        <Navigation />
        <h1>Main Page!</h1>
      </div>
    </>
  );
}

// ✅ 리액트에서는 일일이 경로와 렌더링 될 컴포넌트를 직접 작성해줬다.
// Next.js 에서는 url을 직접 적어 줄 필요가 없다. 파일 시스템을 통해서 해줄거다!

// ✅ about-us 페이지를 만들고 싶다면?
// app하위에 해당 폴더를 만들어 주면 된다. (이 폴더명이 잠재적으로 하나의 페이지가 있다고 알려주는 셈!)
// 그냥 냅두면 경로가 될 수 없다. 보여줄 UI가 필요하다.
// 여기서 page.tsx 만들어주면 된다. (return 꼭 해줘야 한다!!!!!! )
// 이후 해당 경로를 입력해보면?? 경로를 지정해주지 않아도 자동으로 페이지가 렌더링 된다!

// 만약 폴더에 page가 없으면 404를 반환한다. 보여 줄 게 없으니.
// 결국 폴더는 경로를 생성하는걸로 봐주면 된다. 화면이 필요하다면 page.tsx 생성!
// page.tsx가 없다면 폴더는 경로의 일부분이 되는 것

// 별도로 component폴더를 둬도 된다.
// 어쨌든 page.tsx 파일이 아니면 사용자는 접근할 수 없다.
// page.tsx 이 사용자가 해당 url에 접근했을 때 모든 걸 보여주는 요소이다.
