// import styles
import './style.css';
import './bootstrap.min.css';
import './responsive.css';

// import pages
import {
  renderNav
} from './navbar'
import {
  renderHome
} from './home'

// import images
import Logo from './logo.png';
import Burger from './burger_slide.png';
import Drop from './menu_icon.png';
import Item1 from './rs1.png';
import Item2 from './rs2.png';
import Item3 from './rs3.png';
import Item4 from './rs4.png';

const content = document.querySelector('#content');


function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;
  return element;
}

function home() {
  content.innerHTML = "";
  renderNav();
  renderHome();
}

home();

export {
  content,
  createHtmlElement
}