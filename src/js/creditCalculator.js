import {formatPrice} from './helpers'
export const calculateCredit = () => {
  const change = new Event("change");
  const fullPrice = 7070000;
  const firstPaymentSlider = document.querySelector('#first-payment-slider');
  const periodSlider = document.querySelector('#period-slider');
  const monthlyPaymentIncreaser = document.querySelector('.js-increase-monthly');
  const monthlyPaymentDecreaser = document.querySelector('.js-decrease-monthly');

  const firstPaymentDisplay = document.querySelector('.js-first-payment-value');
  const periodDisplay = document.querySelector('.js-period-value');
  const totalCreditDisplay = document.querySelector('.js-total-credit');
  const monthlyPaymentDisplay = document.querySelector('.js-monthly-payment-value');
  const calculateMonthlyPayment = (fullPrice, firstPayment, period)=>{
    return Math.round((fullPrice-firstPayment)/period);
  }

  const refreshBySliders = ()=>{
    const firstPayment = firstPaymentSlider.value;
    const period = periodSlider.value;
    firstPaymentDisplay.textContent = formatPrice(firstPayment);
    totalCreditDisplay.textContent = formatPrice(fullPrice-(+firstPayment));
    monthlyPaymentDisplay.textContent = formatPrice(calculateMonthlyPayment(fullPrice,firstPayment,period));
    periodDisplay.textContent = `${period} мес.`;
  }
  firstPaymentSlider.addEventListener('change', refreshBySliders);
  periodSlider.addEventListener('change', refreshBySliders);
  monthlyPaymentDecreaser.addEventListener('click', ()=>{
    const period = periodSlider.value;
    let monthlyPayment = parseInt(monthlyPaymentDisplay.textContent.split(' ').join(''));
    if((fullPrice - monthlyPayment-10000)*period > firstPaymentSlider.max) {
      monthlyPayment-=10000;
      monthlyPaymentDisplay.textContent = formatPrice(monthlyPayment);
      firstPaymentSlider.value = fullPrice - (monthlyPayment*period);
      firstPaymentSlider.dispatchEvent(change);
    }
  })

  monthlyPaymentIncreaser.addEventListener('click', ()=>{
    const period = periodSlider.value;
    let monthlyPayment = parseInt(monthlyPaymentDisplay.textContent.split(' ').join(''));
    if((fullPrice - monthlyPayment+10000)*period > firstPaymentSlider.max) {
      monthlyPayment+=10000;
      monthlyPaymentDisplay.textContent = formatPrice(monthlyPayment);
      firstPaymentSlider.value = fullPrice - (monthlyPayment*period);
      firstPaymentSlider.dispatchEvent(change);
    }
  })
}