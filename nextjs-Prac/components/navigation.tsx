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
            <Link href="/">Main Page</Link> {path === '/' ? '🏠' : ''}
          </li>
          <li>
            <Link href="/top">Top</Link>
            {path === '/top' ? '👚' : ''}
          </li>
          <li>
            <Link href="/bottom">Bottom</Link>
            {path === '/bottom' ? '👖' : ''}
          </li>
          <li>
            <Link href="/user">User</Link>
            {path === '/user' ? '👀' : ''}
          </li>
          <li>
            <Link href="/popup">Popup</Link>
            {path === '/popup' ? '✨' : ''}
          </li>
        </ul>
      </nav>
    </>
  );
}
