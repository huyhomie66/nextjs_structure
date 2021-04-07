import anime from "animejs/lib/anime.es.js";

const colStackScript = () => {
  return anime({
    targets: ".col-stack .stack",
    translateX: function (el, i) {
      return 300 + -100 * i;
    },
    translateY: function (el, i) {
      return 50;
    },
    scale: function (el, i, l) {
      return 2;
    },
    rotate: function () {
      return 360;
    },
    borderRadius: function () {
      return ["50%", anime.random(10, 35) + "%"];
    },
    duration: function () {
      return anime.random(1200, 1800);
    },
    delay: function () {
      return anime.random(0, 400);
    },
    direction: "alternate",
    loop: true,
  });
};

export default colStackScript;
