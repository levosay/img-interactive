const polygonElem = document.querySelectorAll('polygon')
const map = document.querySelector('.map')

const createHint = (number, name) => {
  const wrapper = document.createElement('div')
  const numb = document.createElement('div')
  const title = document.createElement('div')
  const error = document.createElement('div')
  const span = document.createElement('span')

  wrapper.classList.add('hint-wrapper')
  numb.classList.add('hint__number')
  title.classList.add('hint__title')
  error.classList.add('hint__error')
  span.classList.add('hint__text')

  numb.innerHTML = number
  span.innerHTML = 'Корпус'

  wrapper.append(numb)
  title.append(name)
  title.append(span)
  wrapper.append(title)

  map.append(wrapper)
}



polygonElem.forEach(item => {
  item.addEventListener('mousemove', (event) => {
    item.classList.add('visible')
    const hintWrapper = document.querySelector('.hint-wrapper')

    hintWrapper.style.top = `${event.y + 27}px`
    hintWrapper.style.left = `${event.x + 10}px`
  })

  item.addEventListener('mouseleave', () => {
    item.classList.remove('visible')
    document.querySelector('.hint-wrapper').remove()
  })

  item.addEventListener('mouseenter', () => {
    let dataNumber = item.getAttribute('data-number')
    let dataName = item.getAttribute('data-name')

    createHint(dataNumber, dataName)
  })
})
