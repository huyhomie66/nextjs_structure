import React, { useEffect } from "react";
import Header from "@/common/header";
import Body from "@/common/body/scrollPage";
import Background from "@/theme/animations/component/background";
// import ColStack from "@/theme/animations/component/colstack";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Background />
      {/* <ColStack /> */}
    </React.Fragment>
  );
};

export default Home;
