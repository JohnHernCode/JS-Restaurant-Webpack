// import styles
import './style.css';
import './bootstrap.min.css';
import './responsive.css';

// import pages
import renderNav from './navbar';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

const content = document.querySelector('#content');

function home() {
  content.innerHTML = '';
  renderNav(content);
  renderHome(content);
}
function menu() {
  content.innerHTML = '';
  renderNav(content);
  renderMenu(content);
}
function contact() {
  content.innerHTML = '';
  renderNav(content);
  renderContact(content);
}

home();

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if (target === 'Home') home();
  if (target === 'Menu') menu();
  if (target === 'Contact') contact();
});