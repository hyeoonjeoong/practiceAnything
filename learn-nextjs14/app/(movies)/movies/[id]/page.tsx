import { promises } from 'dns';
import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
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
  //-- 변수에 저장해야하니 이렇게 하자. 결과값으로 array를 주기 때문.
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('end fetching');

  return (
    <>
      <h1>{movie.title}</h1>
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

//⬇⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
//-------------✅ Parallel Requests
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
