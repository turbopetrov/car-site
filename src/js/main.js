import { selectColor } from "./colorSelector"
import { discountCalculator } from "./discountCalculator";
import { styleSliderProgress } from "./styledSlider";
import { calculateCredit } from "./creditCalculator";
import Swiper from 'swiper/bundle';
import { Navigation } from "swiper/modules";
window.onload = function(){
  selectColor();
  discountCalculator();
  styleSliderProgress();
  calculateCredit();
  const swiper = new Swiper('.complectation-swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.js-swiper-button-next',
      prevEl: '.js-swiper-button-prev',
      disabledClass: 'invisible',
    },
    slidesPerView: 'auto',
    spaceBetween: 12,
  });
};




