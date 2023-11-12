let hidden = false;
let createNewTag = (elem,attrib,attribValue) => {
  element = document.createElement(elem);
  element.setAttribute(attrib,attribValue);
  return element;
}

const navItemArray = ['About', "Add Items"];

const createNav = () => {
  let navMenu = document.querySelector('#nav')
  navItemArray.forEach( (item)=>{
  let newTag = createNewTag('li','class','nav-item')
  newTag.id = item === "About" ? 'about' : ""
  newTag.innerHTML = item
  navMenu.appendChild(newTag)
  })
return navMenu;
}

console.log('createNav()',createNav())
// let testNewTag = createNewTag('p','class',"new-parag")
// console.log('testNewTag',testNewTag)

const about = document.querySelector('#about')
const xAbout = document.querySelector('#close')
const aboutWindow = document.querySelector('#about-window')
aboutShow = false
about.addEventListener('click',(event)=>{
  event.preventDefault()
  console.log('About Clicked')
  aboutWindow.classList = aboutShow ? 'about hide' : 'about show';
  aboutShow = !aboutShow
})
xAbout.addEventListener('click',(event)=>{
  event.preventDefault()
  console.log('xAbout Clicked!!')
  aboutWindow.classList = aboutShow ? 'about hide' : 'about show';
  aboutShow = !aboutShow
})

const getElement = (elementId) => {
  let articleToShow = document.getElementById(elementId)
  return articleToShow
  
}
const showArticle = (event) => {
  event.preventDefault
  let clickedId = event.target
  let targetElement = getElement(clickedId.nextElementSibling.id)
  if(clickedId.nextElementSibling.id !== 'carousel' 
      && clickedId !== 'about' ) {
    if(!hidden ){
      //console.log('targetElement.classList:', targetElement.classList)
      targetElement.removeAttribute('show')
      targetElement.setAttribute('class',`hide ${targetElement.classList.value.includes('carousel-container') ? 'carousel-container': "" }`)
      hidden = true;
    } else {
      targetElement.removeAttribute('hide')
      // targetElement.setAttribute('class','show')
      targetElement.setAttribute('class',`show ${targetElement.classList.value.includes('carousel-container') ? 'carousel-container': "" }`)
      hidden = false;
    }
  }
}

document.onload = document.addEventListener('click',showArticle)

// let clickedId = document.getElementById('article-01-title');
// let targetElement = document.getElementById('article-01-points');