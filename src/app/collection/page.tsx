import Link from "next/link";

const ARCHIVES = [
  { href: "/collection/home/", title: "A day with" },
  { href: "/collection/home/", title: "Home" },
] as const;

export default function CollectionPage() {
  return (
    <div className="content">
      <h1 className="page-title">Photo Collections</h1>
      <h2 className="section-heading">Archives</h2>
      <ul className="archive-list">
        {ARCHIVES.map(({ href, title }) => (
          <li key={title}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
