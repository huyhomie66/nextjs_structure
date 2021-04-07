import { useEffect } from "react";
import colStackScript from "@/theme/animations/script/colstack";
import "./colstack.css";

const ColStack = () => {
  useEffect(() => {
    colStackScript();
  }, []);

  return (
    <div className="col-stack">
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      {/* <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      <div className="stack" />
      <div className="stack" /> */}
    </div>
  );
};

export default ColStack;
