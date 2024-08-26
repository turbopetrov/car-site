const colors = {
  gray: 'Благородный агат',
  black:'Черный',
  white:'Белый',
  blue: 'Синий',
  red: 'Красный',
}
export const selectColor = ()=>{
  const colorName = document.querySelector('.js-color-name');
  const colorsItems = document.querySelector('.js-color-selector');
  colorsItems.addEventListener('click', e=>{
    for(let item of colorsItems.children) {
      item === e.target
        ?item.classList.add('active')
        :item.classList.remove('active')
    }
    colorName.innerHTML = colors[e.target.getAttribute('data-color')]
  })
}