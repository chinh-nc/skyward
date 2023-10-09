AOS.init({
  offset: 100,
});


document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviews", {
    type: "loop",
    perPage: 4,
    focus: 0,
    autoplay: true,
    lazyLoad: false,
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
    breakpoints: {
      1062: {
        perPage: 2,
      },
      767: {
        perPage: 3,
      },
      576: {
        perPage: 2,
      },
    },
  }).mount();
});
