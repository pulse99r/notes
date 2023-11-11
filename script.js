let hidden = false;

const getElement = (elementId) => {
  let articleToShow = document.getElementById(elementId)
  return articleToShow
  
}
const showArticle = (event) => {
  event.preventDefault
  let clickedId = event.target
  let targetElement = getElement(clickedId.nextElementSibling.id)
  if(clickedId.nextElementSibling.id !== 'carousel') {
    if(!hidden ){
      console.log('targetElement.classList:', targetElement.classList)
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