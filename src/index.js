// import styles
import './style.css';
import './bootstrap.min.css';
import './responsive.css';

// import pages
import {
  renderNav,
} from './navbar';
import {
  renderHome,
} from './home';

import {
  renderMenu,
} from './menu';

import {
  renderContact,
} from './contact';

const content = document.querySelector('#content');

function home() {
  content.innerHTML = '';
  renderNav();
  renderHome();
}
function menu() {
  content.innerHTML = '';
  renderNav();
  renderMenu();
}
function contact() {
  content.innerHTML = '';
  renderNav();
  renderContact();
}

home();

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if (target === 'Home') home();
  if (target === 'Menu') menu();
  if (target === 'Contact') contact();
});

export {
  content,
};