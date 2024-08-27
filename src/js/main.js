import { selectColor } from "./colorSelector"
import { discountCalculator } from "./discountCalculator";
import { styleSliderProgress } from "./styledSlider";
import { calculateCredit } from "./creditCalculator";
window.onload = function(){
  selectColor();
  discountCalculator();
  styleSliderProgress();
  calculateCredit();
}
