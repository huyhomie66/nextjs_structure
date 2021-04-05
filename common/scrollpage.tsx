import React from "react";
import { Element } from "react-scroll";
import { navbarItems } from "@/constants";
import "@/styles/navbar-container.css";

const ScrollPage = () => {
  return (
    <React.Fragment>
      {/* @ts-ignore */}
      <Element
        className="scroll-container"
        id="navbar"
        style={{
          position: "relative",
          height: "50vh",
          overflow: "scroll",
          marginBottom: "100px",
        }}
      >
        {navbarItems.map((item: any, index: number) => (
          <Element
            key={index}
            name={item.title}
            style={{
              height: "50vh",
            }}
          >
            {item.title}
            {/* {item.component} */}
          </Element>
        ))}
      </Element>
      ;
    </React.Fragment>
  );
};

export default ScrollPage;
