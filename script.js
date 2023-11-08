let hidden = false;

const getElement = (elementId) => {
  let articleToShow = document.getElementById(elementId)
  return articleToShow
  
}
const showArticle = (event) => {
  event.preventDefault
  let clickedId = event.target
  let targetElement = getElement(clickedId.nextElementSibling.id)
  if(!hidden){
    targetElement.removeAttribute('show')
    targetElement.setAttribute('class','hide')
    hidden = true;
  } else {
    targetElement.removeAttribute('hide')
    targetElement.setAttribute('class','show')
    hidden = false;
  }
}

document.onload = document.addEventListener('click',showArticle)

let clickedId = document.getElementById('article-01-title');
let targetElement = document.getElementById('article-01-points');