import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
function Page({ stars }: any) {
  const state = useSelector((state) => state);
  console.info(state);
  return <div>{JSON.stringify(stars)}</div>;
}

Page.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json };
};

export default Page;
