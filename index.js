$(document).ready(function () {
  $('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev "><img src="./images/left-arrow.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext "><img src="./images/right-arrow.svg" alt=""></button>',
  });
});



$(document).ready(function () {
  $('.slick-second-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev "><img src="./images/left-arrow.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext "><img src="./images/right-arrow.svg" alt=""></button>',
  });
});
