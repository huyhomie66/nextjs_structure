import anime from "animejs/lib/anime.es.js";
import { serviceItems } from "@/constants";

function script({ targets, translateX, translateY, duration }) {
  anime({
    targets,
    translateX,
    translateY,
    duration,
    easing: "easeInOutQuad",
  });
}

export default function cardScript() {
  Promise.all(
    serviceItems.map((e) => {
      const { translateX, duration, targets } = e.frame;
      // @ts-ignore
      script({
        translateX,
        duration,
        targets: `.${targets}`,
      });
    })
  );
}
