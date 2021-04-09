import React, { useEffect } from "react";
import { Element, Events, scrollSpy, animateScroll } from "react-scroll";
import { navbarItems } from "@/constants";

const ScrollPage = () => {
  useEffect(() => {
    console.info(Events);
    Events.scrollEvent.register("", function (to, element) {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", to, element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <React.Fragment>
      {/* @ts-ignore */}
      <Element
        className="scroll-container"
        id="navbar"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "scroll",
          marginBottom: "100px",
        }}
      >
        {navbarItems.map((item: any, index: number) => (
          <Element key={index} name={item.title}>
            {item.component}
          </Element>
        ))}
      </Element>
    </React.Fragment>
  );
};

export default ScrollPage;
