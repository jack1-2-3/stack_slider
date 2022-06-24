function slider() {
  const sliderItems = document.querySelectorAll('.p-slider__item')

  let counter = 0

  const frontViewZIndex = 3
  const middleViewZIndex = 2
  const backViewZIndex = 1

  setInterval(startSlider, 2000)

  function startSlider() {
    const activeItem = document.querySelector('.p-slider__item.is-active')
    if (activeItem) {
      activeItem.classList.remove('is-active')
    }

    const frontViewCounter = counter
    
    let middleViewCounter = counter + 1
    if (middleViewCounter > sliderItems.length - 1) {
      middleViewCounter = 0
    }
    
    sliderItems.forEach((item) => {
      item.style.zIndex = backViewZIndex
    })
    sliderItems[frontViewCounter].style.zIndex = frontViewZIndex
    sliderItems[middleViewCounter].style.zIndex = middleViewZIndex
    
    sliderItems[frontViewCounter].classList.add('is-active')

    counter++
    if (counter > sliderItems.length - 1) {
      counter = 0
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  slider()
})
