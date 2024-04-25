'use client';

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}

//-- Link 로도 이동할 수 있지만, useRouter()로도 이동할 수 있다.

//✅ useRouter()
//router 에 대한 access를 제공해준다.
//router.push() 를 하면 해당 페이지로 route 해준다.

//import { useRouter } from 'next/router';
//import { useRouter } from 'next/navigation'; <-- 이거여야 한다.

//그리고 우리는 onClick을 사용하고 있다.
//onClick은 이벤트 리스너로, server에는 존재하지 않는다.
//즉 해당 컴포넌트는 client components 가 되어야 한다.

//✅ prefetch
//클릭하지 않은 내용을 클릭하면 로딩 시간이 걸린다. 결국 loading state가 존재한다.
//홈페이지에 사용자가 도착했을 때 NextJs가 페이지들을 미리 로드해준다.
//--> 사용자가 클릭하기 전 부터 fetch를 하는 것.
//스크롤을 내리면서 네트워크탭을 확인해보자. 요청이 알아서 간다. 실제로 그 페이지에 들어간 것 처럼 요청을 보내는 것!
//로딩상태가 사라진다. 유저가 클릭하기 전에 이미 fetch를 해줬다.
