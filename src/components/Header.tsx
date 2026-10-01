import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteConfig";

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath }: HeaderProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="site-header" role="banner">
        <div className="container nav-wrapper">
          <Link href="/" className="brand-link" aria-label="Vee Homepage">
            <Image
              src="/Veelogo.jpg"
              alt="Vee Brand Logo"
              width={36}
              height={36}
              className="brand-logo"
              priority
            />
            <span>{SITE_CONFIG.displayName}</span>
          </Link>
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <Link
                  href="/"
                  className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className={`nav-link ${
                    currentPath?.startsWith("/articles") ? "active" : ""
                  }`}
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/work-with-me"
                  className={`nav-link ${
                    currentPath === "/work-with-me" ? "active" : ""
                  }`}
                >
                  Work with Vee
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
