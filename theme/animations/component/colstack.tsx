import "./colstack.css";
import { colstackScript } from "@/theme/animations/script";
import { useEffect } from "react";

const ColStack = () => {
  useEffect(() => {
    colstackScript();
  }, []);
  return (
    <div className="col-stack">
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
    </div>
  );
};

export default ColStack;
