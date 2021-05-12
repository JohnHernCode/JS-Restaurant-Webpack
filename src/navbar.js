export default function renderNav(content) {
  const navItems = ['Home', 'Menu', 'Contact'];
  const header = document.createElement('header');
  const container = document.createElement('div');
  const row = document.createElement('div');
  const logoWrap = document.createElement('div');
  const logoDiv = document.createElement('div');
  const logoLink = document.createElement('a');
  const image = document.createElement('img');
  const itemsWrap = document.createElement('div');
  const itemsFull = document.createElement('div');
  const itemsDiv = document.createElement('div');
  const uList = document.createElement('ul');
  container.classList.add('container-fluid');
  row.classList.add('row');
  logoWrap.classList.add('col-md-3');
  logoDiv.classList.add('full');
  logoLink.classList.add('logo');
  itemsWrap.classList.add('col-md-4', 'align-items-center');
  itemsFull.classList.add('full');
  itemsDiv.classList.add('right_header_info');
  image.setAttribute('src', 'a794730fa04f411a44a6.png');

  navItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const h3 = document.createElement('h3');
    a.setAttribute('href', '#');
    h3.textContent = `${item}`;
    a.appendChild(h3);
    li.appendChild(a);
    uList.appendChild(li);
  });

  logoLink.setAttribute('href', '#');

  logoLink.appendChild(image);
  logoDiv.appendChild(logoLink);
  logoWrap.appendChild(logoDiv);
  row.appendChild(logoWrap);
  itemsDiv.appendChild(uList);
  itemsFull.appendChild(itemsDiv);
  itemsWrap.appendChild(itemsFull);
  row.appendChild(itemsWrap);
  container.appendChild(row);
  header.appendChild(container);
  content.appendChild(header);
}