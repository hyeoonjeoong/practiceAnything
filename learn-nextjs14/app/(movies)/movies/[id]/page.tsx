export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <h1>Movie Detail Page , params id : {id}</h1>
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
