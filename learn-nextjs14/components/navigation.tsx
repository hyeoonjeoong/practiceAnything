'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link> {path === '/' ? '🙂' : ''}
          </li>
          <li>
            <Link href="/about-us">About-us</Link>
            {path === '/about-us' ? '🙂' : ''}
          </li>
        </ul>
      </nav>
    </>
  );
}

//a태그를 사용하면 브라우저의 네비게이션을 사용하게 된다.
//우린 프레임워크의 네비게이션을 사용할거다. <Link>를 불러와서 사용한다!

//NextJs에는 url에 관한 정보를 알려주는 Hook이 있다.
//router까지 접근할 수 있게 해주기도 한다.
//usePathname
//user가 머물고 있는 path를 알려준다.
