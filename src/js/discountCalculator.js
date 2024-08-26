export const discountCalculator = ()=>{
  const switchers = document.querySelectorAll('.js-discount-switch');
  let discountSum = 0;
  const totalDiscount = document.querySelector('.js-total-discount')
  for (let switcher of switchers) {
    switcher.addEventListener('change', (evt)=>{
      switcher.checked
        ?discountSum+= +evt.target.value
        :discountSum-= +evt.target.value
      totalDiscount.innerHTML = `${discountSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
    })
  }
}