'use client';

import { title } from 'process';
import { useEffect, useState } from 'react';

//⬇⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
//-------------기존 리액트에서의 data fetching 빙식

//'use client'에서는 metadata 사용할 수 없다.
// export const metadata = {
//   title: 'Home',
// };

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div>
        <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>
      </div>
    </>
  );
}
//✅ 보통 리액트에서의 data fetching 방법이다.
//이는 결국 사용자에게 로딩 상태를 보여줘야 한다. 그리고 항상 client 측에서 일어난다. 브라우저가 API요청을 보내게 되는 것.
//결국 여기에는 비밀스러운 정보를 담아서 보낼 수 없다. 위험하다!

//---> 모든 것을 client에서 fetching 한다면?
//-- 보안을 위해 항상 API를 중간에 만들어야 하고, 데이터베이스에 직접 통신할 수 없다.
//API에 요청을 먼저 하고, API가 안전한 환경에 있다면 그 뒤에 데이터베이스에 요청을 보내게 된다.
//-- 로딩상태를 항상 확인해줘야 한다. 이에 따른 useState 상태도 관리해야 한다. 우리가 스스로 관리해야 한다.
//useState를 사용 -> 'use client' 설정 -> metadata 도 사용 불가 ㅠ.ㅠ

//---> 하지만 API 없이 직접 데이터베이스와 통신할 수 있다면 ? (server component에서 fetch를 한다면!)
//-- useState, useEffect를 사용하지 않아도 된다. 별도의 로딩 상태를 구현하지 않아도 된다. NextJs가 대신 해줄거다!!
//단 이 작업은 꼭 server component에서 진행되어야 한다.

//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

// ✅ ------------리액트에서는 일일이 경로와 렌더링 될 컴포넌트를 직접 작성해줬다.
// Next.js 에서는 url을 직접 적어 줄 필요가 없다. 파일 시스템을 통해서 해줄거다!

// ✅ ------------about-us 페이지를 만들고 싶다면?
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

// ✅ ------------Route groups
//폴더 이름을 괄호로 묶어줘야 한다.
//원래는 폴더명이 곧 경로가 되지만, 괄호로 묶어주면 url이 생성되지 않는다. url에 영향을 전혀 안준다!
//최상단 root에 냅다 page.tsx로 두는 것 보다 그룹화되어 더 명시적이다.
