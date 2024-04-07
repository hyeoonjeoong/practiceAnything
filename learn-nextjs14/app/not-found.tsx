import { Metadata } from 'next';
import Navigation from '../components/navigation';

export const metadata: Metadata = {
  title: 'Not found',
};
export default function NotFound() {
  return (
    <>
      <div>
        <Navigation />
        <h1>Not Found</h1>
      </div>
    </>
  );
}

//✅ not-found 파일 만들기
//not-found.tsx 로 파일만 만들어주고 내용을 넣어주면 된다.
//그럼 없는 경로로 들어갔을 시 자동으로 해당 페이지를 렌더링해준다.
