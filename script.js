let hidden = false;
let createNewTag = (elem,attrib,attribValue) => {
  element = document.createElement(elem);
  element.setAttribute(attrib,attribValue);
  return element;
}

const navItemArray = ['Home','About', "Add Items", "Contact"];

const createNav = () => {
  let navMenu = document.querySelector('#nav')
  navItemArray.forEach( (item)=>{
  let newTag = createNewTag('li','class','nav-item')
  newTag.id = item === "About" ? 'about' : item === 'Home' ? "home": ""
  newTag.innerHTML = item === 'Home' ? `<a href='./index.html'>Home</a>` : item
  navMenu.appendChild(newTag)
  })
return navMenu;
}
createNav()
const nav = document.querySelector('#nav')
const about = document.querySelector('#about')
const xAbout = document.querySelector('#close')
const aboutWindow = document.querySelector('#about-window')

const container = document.querySelector('.notes-container')
const articles = container.getElementsByTagName('article')

aboutShow = false

nav.addEventListener('click', (event) =>{
  event.preventDefault();
  console.log('Nav Event.target', event.target)
  

})
about.addEventListener('click',(event)=>{
  event.preventDefault()
  aboutWindow.classList = aboutShow ? 'about hide' : 'about show';
  aboutShow = !aboutShow
})
xAbout.addEventListener('click',(event)=>{
  event.preventDefault()
  aboutWindow.classList = aboutShow ? 'about hide' : 'about show';
  aboutShow = !aboutShow
})
const getElement = (elementId) => {
  let articleToShow = document.getElementById(elementId)
  return articleToShow
  
}

const showArticle = (event) => {
  let clickedId = event
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

// ---- New event listener ---- 
for (let i = 0; i < articles.length; i++) {
  articles[i].addEventListener('click',(event) => {
    event.preventDefault()
    const element = event.target
    // let targetElement = getElement(element.nextElementSibling.id)
    showArticle(element)
  })
}
let targetElement = document.getElementById('article-01-points');