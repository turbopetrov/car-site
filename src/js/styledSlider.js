const changeProgressBar = (slider) => {
  slider.style.setProperty("--value", slider.value);
  slider.style.setProperty("--min", slider.min == "" ? "0" : slider.min);
  slider.style.setProperty("--max", slider.max == "" ? "100" : slider.max);
  slider.addEventListener("input", () =>    slider.style.setProperty("--value", slider.value)
  );
};

export const styleSliderProgress = () => {
  for (let slider of document.querySelectorAll('input[type="range"].slider-progress')) {
    changeProgressBar(slider);
    slider.addEventListener('change', () => changeProgressBar(slider));
  }
};
