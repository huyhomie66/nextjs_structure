import React, { useEffect } from "react";
import Header from "@/common/header";
import Body from "@/common/body/scrollPage";
import Background from "@/theme/animations/component/background";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Background />
    </React.Fragment>
  );
};

export default Home;
