const polygonElements = document.querySelectorAll('polygon')
const template = document.querySelector('#hint')
const numberHint = template.querySelector('.hint__number')
const titleHint = template.querySelector('.hint__title')


const showHint = (number, name) => {
  template.classList.add('active')
  numberHint.innerHTML = number
  titleHint.innerHTML = `<h4>${name}</h4> <span>Корпус</span>`
}

polygonElements.forEach(polygon => {
  polygon.addEventListener('mousemove', (event) => {
    template.style.top = `${event.y + 27}px`
    template.style.left = `${event.x + 10}px`
    polygon.classList.add('visible')
  })

  polygon.addEventListener('mouseleave', () => {
    polygon.classList.remove('visible')
    template.classList.remove('active')
  })

  polygon.addEventListener('mouseenter', () => {
    const dataNumber = polygon.getAttribute('data-number')
    const dataName = polygon.getAttribute('data-name')

    showHint(dataNumber, dataName)
  })
})
