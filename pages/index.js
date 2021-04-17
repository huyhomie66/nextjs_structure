import React, { useEffect } from "react";
import Header from "@/common/header";
import Body from "@/common/body";
import Background from "@/theme/animations/component/background";
// import ColStack from "@/theme/animations/component/colstack";
import "../styles/globals.css";

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
