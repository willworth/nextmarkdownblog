import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <h2>willworth.dev - a dev's blog</h2>
        </Link>
      </div>
    </header>
  );
}
