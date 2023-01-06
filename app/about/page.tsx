import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link href="/#hashid">Hash ID Section</Link>
            </li>
            <li
              style={{
                padding: "10px",
              }}
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>This is about us page</h1>
      </main>
    </>
  );
}
