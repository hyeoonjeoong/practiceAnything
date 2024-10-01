"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Main Page</Link> {path === "/" ? "🏠" : ""}
          </li>
          <li>
            <Link href="/product">Product</Link>
            {path === "/product" ? "🕹️" : ""}
          </li>
          <li>
            <Link href="/weather">Weather</Link>
            {path === "/weather" ? "🌤️" : ""}
          </li>
          <li>
            <Link href="/user">User</Link>
            {path === "/user" ? "👀" : ""}
          </li>
          <li>
            <Link href="/popup">Popup</Link>
            {path === "/popup" ? "✨" : ""}
          </li>
          <li>
            <Link href="/form">Form</Link>
            {path === "/form" ? "🐤" : ""}
          </li>
        </ul>
      </nav>
    </>
  );
}
