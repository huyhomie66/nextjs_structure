import Home from "@/common/body/home";
import Service from "@/common/body/service";

const navbarItems = [
  { title: "Home", component: <Home /> },
  { title: "Service", component: <Service /> },
  { title: "Product", component: <div style={{ height: "50vh" }} /> },
  { title: "About", component: <div style={{ height: "50vh" }} /> },
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
    title: "Streaming",
    icon: "",
    description: " ",
  },
  {
    title: "Chat",
    icon: "",
    description: " ",
  },
  {
    title: "Automation Test",
    icon: "",
    description: " ",
  },
  {
    title: "BlockChain",
    icon: "",
    description: " ",
  },
  {
    title: "Teck ",
    icon: "",
    description: " ",
  },
  {
    title: "Streaming",
    icon: "",
    description: " ",
  },
];
export { navbarItems, serviceItems, productItems };
