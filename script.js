const toggleBool = (bool) => {
  // function takes in a boolean and returns the same boolean with the opposite state
  return !bool
}

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
  newTag.id = item === "About" ? 'about' : item === 'Home' ? "home": item == 'Add Items' ? 'add-items' : item === "Contact" ? 'contact' : ""
  newTag.innerHTML = item === 'Home' ? `<a href='./index.html'>Home</a>` : item
  navMenu.appendChild(newTag)
  })
return navMenu;
}

createNav()
const nav = document.querySelector('#nav')
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const addItems = document.querySelector('#add-items')
const contactWindow = document.querySelector('#contact-window')
const xAbout = document.querySelector('#close')
const aboutWindow = document.querySelector('#about-window')

const container = document.querySelector('.notes-container')
const articles = container.getElementsByTagName('article')

let aboutShow = false;
let contactShow = false;

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

contactWindow.addEventListener('click',(event) => {
  event.preventDefault()
  contactWindow.classList = contactShow ? 'contact hide' : 'contact show';
  toggleBool(contactShow)
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
      hidden = toggleBool(hidden)
    } else {
      targetElement.removeAttribute('hide')
      // targetElement.setAttribute('class','show')
      targetElement.setAttribute('class',`show ${targetElement.classList.value.includes('carousel-container') ? 'carousel-container': "" }`)
      hidden = toggleBool(hidden)
    }
  }
}

// function Sound() {
//   let fileUrl = "audio/clicksoundeffect.mp3";
//   let audio = new Audio(fileUrl);
//   audio.play();
// }
// ---- New event listener ---- 
for (let i = 0; i < articles.length; i++) {
  articles[i].addEventListener('click',(event) => {
    event.preventDefault()
    const element = event.target
    // Sound()
    // let targetElement = getElement(element.nextElementSibling.id)
    showArticle(element)
  })
}
let targetElement = document.getElementById('article-01-points');

// let filtered = ["A", "B", "C"].filter(element => element === "B");
// console.log('filtered ==>',filtered[0]) 


