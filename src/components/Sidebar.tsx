import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const script = Great_Vibes({ weight: "400", subsets: ["latin"] });

const NAV_LINKS = [
  { href: "/portraits/", label: "PORTRAITS" },
  { href: "/sport/", label: "SPORT" },
  { href: "/film/", label: "FILM" },
  { href: "/commission/", label: "COMMISSION" },
  { href: "/about/", label: "ABOUT" },
  { href: "/contact/", label: "CONTACT" },
] as const;

export default function Sidebar() {
  const year = new Date().getFullYear();
  return (
    <aside className="sidebar">
      <Link href="/" className={`sidebar-logo ${script.className}`}>
        Cether Deng
      </Link>
      <nav className="sidebar-nav" aria-label="Main">
        <ul className="sidebar-nav-list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="sidebar-nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="sidebar-footer">
        <p>© {year} Cether Deng.</p>
      </footer>
    </aside>
  );
}
