import Home from "@/common/body/home";
import Service from "@/common/body/service";
const navbarItems = [
  { title: "Home", component: <Home /> },
  { title: "Service", component: <Service /> },
  { title: "Product", component: <div style={{ height: "50vh" }} /> },
  { title: "About", component: <div style={{ height: "50vh" }} /> },
];

export { navbarItems };
