import Home from "@/common/body/home";
import Service from "@/common/body/service";
import Product from "@/common/body/product";
import {
  earthScript,
  backgroundScript,
  colstackScript,
  cardScript,
} from "@/theme/animations/script";

const navbarItems = [
  { title: "Home", component: <Home />, script: earthScript },
  { title: "Service", component: <Service />, script: cardScript },
  {
    title: "Product",
    component: <Product />,
    script: () => {},
  },
  {
    title: "Cost",
    component: <div style={{ height: "50vh" }} />,
    script: () => {},
  },
  {
    title: "About",
    component: <div style={{ height: "50vh" }} />,
    script: () => {},
  },
];

const serviceItems = [
  {
    title: "The Cloud",
    description: "",
    action: () => {},
    frame: {
      translateX: 100,
      duration: 200,
      targets: "cl",
    },
    subTitle:
      "To be a company guided by technological innovations, committed to the highest level of customer satisfaction, contributing to national prosperity and providing its employees with the most favorable working environment possible, thus enabling them to reach their full potential in their professional careers as well as their morale.",
  },
  {
    title: "Block Chain",
    description: "",
    action: () => {},
    frame: {
      translateX: 0,
      duration: 200,
      targets: "bc",
    },
    subTitle:
      "To be a company guided by technological innovations, committed to the highest level of customer satisfaction, contributing to national prosperity and providing its employees with the most favorable working environment possible, thus enabling them to reach their full potential in their professional careers as well as their morale.",
  },
  {
    title: "GLOBAL DEVOPS",
    description: "",
    frame: {
      translateX: -100,
      duration: 200,
      targets: "gd",
    },
    action: () => {},
    subTitle:
      "To be a company guided by technological innovations, committed to the highest level of customer satisfaction, contributing to national prosperity and providing its employees with the most favorable working environment possible, thus enabling them to reach their full potential in their professional careers as well as their morale.",
  },
];

const productItems = [
  {
    title: "Taxi App",
    icon: "",
    description: " ",
  },
  {
    title: "Chat Web/App",
    icon: "",
    description: " ",
  },
  {
    title: "Dating Web/App",
    icon: "",
    description: " ",
  },
  {
    title: "Food Web/App",
    icon: "",
    description: " ",
  },
  {
    title: "Payment Web/App",
    icon: "",
    description: " ",
  },
  {
    title: "Streaming Web/App",
    icon: "",
    description: " ",
  },
  {
    title: "Streaming Web/App",
    icon: "",
    description: " ",
  },
  {
    title: "Streaming Web/App",
    icon: "",
    description: " ",
  },
];
export { navbarItems, serviceItems, productItems };
