import { promises } from 'dns';
import { API_URL } from '../../../(home)/page';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { Suspense } from 'react';

//--> components > movie-info.tsx 로 이동! (컴포넌트 분리 ☑️)
// async function getMovie(id: string) {
//   console.log(`Fetching movie: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

//--> components > movie-videos.tsx 로 이동! (컴포넌트 분리 ☑️)
// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('=============');
  console.log('start fetching');
  //--> ✅ promise.All
  //안에 Promise 들의 array를 넣어주면 된다.
  //getMovie를 하고 결과를 가지고 있고, getMovie를 하고 결과를 가지고 있다가
  //결과값으로 이루어진 배열을 준다.
  //Promise.all([getMovie(id),getVideos(id) ])
  //-- 변수에 저장해야하니 이렇게 하자. 결과값으로 array를 주기 때문. (컴포넌트 분리 ☑️)
  //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('end fetching');

  return (
    <>
      <h3>Movie Detail Page!</h3>
      <Suspense fallback={<h2>Loading movie info...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}

//-------------✅ Dynamic Routes
//[이러케] 폴더명을 만들어준다.
//Next.js에게 movies/ 뒤에 무엇이 들어가도 괜찮다고 알려 주는 것!
//그리고 당연히 해당 URL을 표시하려면 새 page파일을 만들어줘야 한다.

//데이터가 필요하다면?
//결국 경로로 들어오는 Id값으로 정보를 불러와야 하는 거기 떄문.
//얘는 백에서 실행된다. `use client`가 아니니깐.

//만일 주소창에 http://localhost:3000/movies/811811?region=kr&page=2
//이렇게 입력하게 되면 해당 값이 들어오게 된다.
//백에서 실행, 터미널에는 아래처럼 찍힌다.
//{ params: { id: '811811' }, searchParams: { region: 'kr', page: '2' } }

//-------------✅ Parallel Requests - 병렬적으로 데이터 fetch하기
//⬇⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
// async function getMovie(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id:string) {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }
// export default async function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const movie = await getMovie(id);
//   const videos = await getVideos(id);
//   return (
//     <>
//       <h1>{movie.title}</h1>
//     </>
//   );
// }
//------------------------------------------------------------------------
//1. async 로 바꿔준다.
//2. fetch할 함수를 만들어준다. getMovie

//이렇게 하면 getMovie함수가 끝나야 getVideos함수를 실행시킨다.
//첫 함수의 시간이 오래걸리면 사용자 입장에서 좋지 않다.
//--> 병렬로 처리 할 수는 없을까?
//--> ✅ promise.All 을 사용하면 된다.
//--> 근데 이건 React에서의 특징.

//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

//✅ 근데 어쨌든 함수가 끝날 때 까지 기다려야 한다. UI는 보이지 않는다. 결국 둘 다 기다려야 하는 것.
//이렇게 해주자.
//동시에 시작한다! 근데 먼저 준비된 게 있으면? 보여준다. 그럼 기다릴 필요 없다.

//page에서 데이터를 fetch하는 건 좋다.
//그럼 그 과정에서 자연스럽게 Loading 컴포넌트를 통해 로딩화면을 보여줄 수 있다.
//-- 하지만 데이터 소스가 여러개라면?
//✅ suspense를 써야 한다.
//--> components > movie-videos.tsx 로 가자. getVideos도 이동! (컴포넌트 분리 ☑️)

//Suspense로 해당 컴포넌트 감싸주면 된다.
//Suspense component에는 fallback이라는 prop이 있고,
//얘는 component가 await되는 동안 표시 할 메시지를 render 할 수 있게 해준다.
//기본적으로 다른 component를 render 할 수 있는 것.
//--> page의 어느 부분이 로딩중인지 더 명시적으로 알 수 있다.
//이전에 Loading컴포넌트는 페이지 전체가 로딩상태였다.
