import React, { useState } from "react";
import { Link } from "react-scroll";
import { navbarItems } from "@/constants";
import "@/styles/navbar-container.css";

const Section = () => {
  const [active, setActive] = useState();

  const onSetActive = (e: any) => {
    setActive(e);
  };

  return (
    <nav>
      {navbarItems.map((item: any, index: number) => {
        const className =
          active === item.title ? "nav-link-active" : "nav-link";
        return (
          <Link
            key={index}
            className={className}
            to={item.title}
            spy={true}
            smooth={true}
            duration={200}
            onSetActive={() => onSetActive(item.title)}
            containerId="navbar"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Section;
