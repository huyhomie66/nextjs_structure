import Link from "next/link";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState();

  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
      <li>
        <Link href="/error">
          <a>error</a>
        </Link>
      </li>
      <li>
        <Link href="/page">
          <a>page</a>
        </Link>
      </li>
      <li style={{ flexDirection: "column" }}>
        <input
          placeholder="fill count"
          value={count}
          onChange={(e: any) => setCount(e.target.value)}
        />

        <Link href={`/count/${count}`}>
          <a>count </a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
