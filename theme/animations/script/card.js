import anime from "animejs/lib/anime.es.js";

export default function cardScript({
  targets,
  translateX,
  translateY,
  duration,
}) {
  anime({
    targets,
    translateX,
    translateY,
    duration,
    easing: "easeInOutQuad",
  });
}
