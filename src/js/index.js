AOS.init({
  offset: 100,
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviews", {
    type: "loop",
    perPage: 4,
    focus: 0,
    breakpoints: {
      1062: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      567: {
        perPage: 1,
      },
    },
  }).mount();
  new Splide("#products", {
    type: "loop",
    perPage: 3,
    focus: 0,
    updateOnMove: true,
    direction: "rtl",
    breakpoints: {
      1062: {
        perPage: 2,
      },
      767: {
        perPage: 3,
      },
    },
  }).mount();
});
