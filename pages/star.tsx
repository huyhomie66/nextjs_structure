function Page({ stars }: any) {
  return <div>{JSON.stringify(stars)}</div>;
}

Page.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json };
};

export default Page;
