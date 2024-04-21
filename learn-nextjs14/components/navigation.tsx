'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
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

//-------------✅ usePathname
//a태그를 사용하면 브라우저의 네비게이션을 사용하게 된다.
//우린 프레임워크의 네비게이션을 사용할거다. <Link>를 불러와서 사용한다!

//NextJs에는 url에 관한 정보를 알려주는 Hook이 있다.
//router까지 접근할 수 있게 해주기도 한다.
//usePathname
//user가 머물고 있는 path를 알려준다.

//-------------✅ Hydration
//--> 만약 사용자가 about-us페이지로 가고 싶어 한다면?
//next.js는 그 요청을 보고 우리의 component를 dummy HTML로 변환한다. (인터랙티브 하지 않음!) 이게 사용자에게 넘겨진다.
//사용자가 페이지에 도착하면, 프레임워크를 load 한다.
//그리고 이 재미없는 HTML에 새로운 React application을 초기화 한다. (인터랙티브!)
//--> 사용자가 화면을 볼 때 next.js는 뒤에서 React application을 초기화하고 있는 것.
//결국 사용자가 페이지에 도착한 순간에는 아직 js, 프레임워크가 로드되지 않은 상태이다.
//하지만 이후에 js가 로드되는 순간, 모든 준비가 완료 된 순간 빠르게 React application이 initialize되는 것!
//--> 예를 들어 초기에 a태그 였던 것이 리액트의 Link컴포넌트가 된다. 깜빡임 없이 더 빠르게 로드 된다.
//그럼 리액트가 app을 넘겨받고, hard refresh 없이 navigate할 수 있게 되는 것.
//결국 사용자가 js를 더 적게 다운받아도 된다는 의미이기에 효율적이라고 볼 수 있다.

//하지만 이 Hydration이 모든 컴포넌트에서 발생하지는 않는다.
//"use client"지시어를 맨 위에 가지고 있는 component만 ! client 에서 interactive하게 만들어진다.
//이 컴포넌트는 client에서 interactive해야해! 라고 해주는 것.
//초기 로드에서는 component를 render하고, HTML을 사용자에게 주고 나서, eventListener들을 추가 할 component를 hydrate한다.

//✅ 그럼 언제 "use client"를 사용해야 하나?
//남발 할 필요 없다!
//실행했을 때 오류가 나고 next.js가 알려준다.
// 지금 useState사용하고 있으니 (interactive 한거 사용하고 있으니) "use client" 사용해야 한다고.
//그래서 "use client"가 client에서만 렌더링 되어야 해! 를 의미하지는 않는다.
//--> backend에서 render되고 frontend에서 hydrate됨을 의미한다.
//걍 use hydrate 로 생각하는게 편할 듯.
//어쨌든 얘도 server에서 먼저 render가 되고 나서 hydrate 된다!

//그럼 server component는?
//client component를 사용하지 않는 모든 것들이 server component가 된다.
//"use client"를 선언하지 않으면 기본적으로 모두 server component가 된다.
//예를 들어 client에게 딱 한 번만 render되어야 한다면 (useState나 onClick Event가 없을 경우)
//굳이 사용자에게 해당 component를 위한 코드를 다운받게 할 필요가 있나?? 당연히 그럴 필요 없다.
