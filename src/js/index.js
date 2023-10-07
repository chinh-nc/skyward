AOS.init({
  offset: 100,
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviews", {
    type: "loop",
    perPage: 4,
    focus: 0,
  }).mount();
  new Splide("#products", {
    type: "loop",
    perPage: 3,
    focus: 0,
    updateOnMove: true,
    direction: "rtl",
  }).mount();
});
