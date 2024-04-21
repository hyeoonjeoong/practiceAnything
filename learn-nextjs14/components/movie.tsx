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
      <Link href={`/movies/${id}`}>{title}</Link>
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
