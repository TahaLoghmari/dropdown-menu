import './style.css'
let Menu = document.querySelector('.menu')
let svg = document.querySelector('svg')
let CurrentImageDiv = document.querySelector('.CurrentImageDiv')
let rightArrow = document.querySelector('.rightArrow')
let leftArrow = document.querySelector('.leftArrow')
let currentIndex = 0
let HideShowMenu = (button) => {
  button.classList.toggle('hidden')
  button.classList.toggle('notHidden')
}
svg.addEventListener('click', () => HideShowMenu(Menu))

const imagesContext = require.context('./images', false, /\.(png|jpe?g|svg)$/)
const images = imagesContext.keys().map(imagesContext)
const updateImage = () => {
  CurrentImageDiv.innerHTML = `<img src="${images[currentIndex]}" alt="CurrentImageDisplayed" class="currentImage">`
  if (currentIndex === 0) {
    leftArrow.disabled = true
    leftArrow.classList.add('arrowDisabled')
  } else leftArrow.classList.remove('arrowDisabled')
  if (currentIndex === images.length - 1) {
    rightArrow.disabled = false
    rightArrow.classList.add('arrowDisabled')
  } else rightArrow.classList.remove('arrowDisabled')
}
updateImage()
CurrentImageDiv.innerHTML = `<img src="${images[0]}" alt="CurrentImageDisplayed" class ="currentImage">`
let currentSlide = document.querySelector(`.slide${currentIndex + 1}`)
currentSlide.innerHTML = `<path d="M480.23-288Q560-288 616-344.23q56-56.22 56-136Q672-560 615.77-616q-56.22-56-136-56Q400-672 344-615.77q-56 56.22-56 136Q288-400 344.23-344q56.22 56 136 56Zm.05 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
rightArrow.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++
    let prevSlide = document.querySelector(`.slide${currentIndex}`)
    let currentSlide = document.querySelector(`.slide${currentIndex + 1}`)
    currentSlide.innerHTML = `<path d="M480.23-288Q560-288 616-344.23q56-56.22 56-136Q672-560 615.77-616q-56.22-56-136-56Q400-672 344-615.77q-56 56.22-56 136Q288-400 344.23-344q56.22 56 136 56Zm.05 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
    prevSlide.innerHTML = `<path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
    updateImage()
  }
})
leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    let prevSlide = document.querySelector(`.slide${currentIndex + 2}`)
    let currentSlide = document.querySelector(`.slide${currentIndex + 1}`)
    currentSlide.innerHTML = `<path d="M480.23-288Q560-288 616-344.23q56-56.22 56-136Q672-560 615.77-616q-56.22-56-136-56Q400-672 344-615.77q-56 56.22-56 136Q288-400 344.23-344q56.22 56 136 56Zm.05 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
    prevSlide.innerHTML = `<path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
    updateImage()
  }
})
let slides = document.querySelectorAll('.slide')
slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    let SlideNumber = slide.classList[1]
    let imageNumber = SlideNumber[SlideNumber.length - 1] - 1
    currentIndex = imageNumber
    let currentSlide = document.querySelector(`.slide${currentIndex + 1}`)
    currentSlide.innerHTML = `<path d="M480.23-288Q560-288 616-344.23q56-56.22 56-136Q672-560 615.77-616q-56.22-56-136-56Q400-672 344-615.77q-56 56.22-56 136Q288-400 344.23-344q56.22 56 136 56Zm.05 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
    slides.forEach((slide_) => {
      if (slide == slide_) return
      let SlideNumber_ = slide_.classList[1]
      let imageNumber_ = SlideNumber_[SlideNumber_.length - 1] - 1
      let currentSlide_ = document.querySelector(`.slide${imageNumber_ + 1}`)
      currentSlide_.innerHTML = `<path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/>`
    })
    updateImage()
  })
})
