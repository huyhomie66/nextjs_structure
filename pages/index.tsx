import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "@/store/user/slice";

function Home() {
  const [count, setCount] = useState();
  const dispatch = useDispatch();

  const userState = useSelector((state: any) => state.user);
  useEffect(() => {
    dispatch(userSlice.actions.fetch());
  });

  return (
    <React.Fragment>
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
          <Link href="/star">
            <a>star</a>
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
      <div>{JSON.stringify(userState.data)}</div>
    </React.Fragment>
  );
}

export default Home;
