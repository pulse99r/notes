
// preset upto 100 images from the ./img folder
let folder = `./img/Kenti`; 
let image = folder
let images = []

for (let i = 0; i < 100; i++){
  images.push(folder+i+ '.jpg')
}

// DOM setup for images
let carouselArr = document.getElementById('carousel')

const createCarouselImgGroup =(element)=>{
  let liElement = document.createElement('li')
  let imgElement = document.createElement('img')
  liElement.setAttribute('class', 'carousel-item')
  imgElement.setAttribute('src', element)
  liElement.appendChild(imgElement)
  carouselArr.appendChild(liElement)
  
  return carouselArr
}

// New Test Code
const setCarousel = (start) => {
  let finish = start + 4;
  let carouselWindow = []
  carouselWindow[0] = images[start]
  carouselWindow[1] = images[start + 1]
  carouselWindow[2] = images[start + 2]
  carouselWindow[3] = images[start + 3]
  carouselWindow[4] = images[start + 4]
  return carouselWindow
}


let begin = 0;
let carouselWindow = setCarousel(begin)
carouselWindow.forEach((element)=>{createCarouselImgGroup(element)})

let leftArrow = document.getElementById('left')
let rightArrow = document.getElementById('right');


leftArrow.addEventListener('click',(event) => {
  event.preventDefault();
  begin--
  if (begin < 0 ){
    begin = 0
    // leftArrow.setAttribute('class', 'left-arrow-zero')
    leftArrow.setAttribute('class','carousel-item, left-arrow, left-arrow-zero')
  } else {
    leftArrow.removeAttribute("left-arrow-zero")
    carouselArr.innerHTML = ""
    let carouselWindow = setCarousel(begin)
    carouselWindow.forEach((element)=>{createCarouselImgGroup(element)})
  }
})

rightArrow.addEventListener('click',(event) => {
  event.preventDefault()
  carouselArr = document.getElementById('carousel')
  begin++
  if (begin >= 0 && begin + 5 < 31){
    rightArrow.removeAttribute("right-arrow-zero")
    carouselArr.innerHTML = ""
    let carouselWindow = setCarousel(begin)
    carouselWindow.forEach((element)=>{createCarouselImgGroup(element)})
  } else {
    rightArrow.setAttribute('class', 'carousel-item, right-arrow, right-arrow-zero')
    begin = images.length - 5;
    carouselArr.innerHTML = ""
    let carouselWindow = setCarousel(begin)
    carouselWindow.forEach((element)=>{createCarouselImgGroup(element)})
  }
})

