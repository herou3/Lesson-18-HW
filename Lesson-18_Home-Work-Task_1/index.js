import "./index.css";
import JS_IMAGE from './assets/swift.jpeg';

function addImage(imagePath, cssPath='body') {
  const jsImageHTML = document.createElement('img')
  jsImageHTML.className = 'js-image'
  jsImageHTML.src = imagePath;
  document.querySelector(cssPath).append(jsImageHTML)
}

function addHeader(headerType, headerText, cssPath='body') {
  const header = document.createElement(headerType)
  header.innerText = headerText
  document.querySelector(cssPath).append(header)
}

addImage(JS_IMAGE)
addHeader('h1', 'I like JavaScript')

console.log('Hello World!')