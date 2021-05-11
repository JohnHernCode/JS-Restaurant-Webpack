import { content, createHtmlElement } from "./index";

function renderNav() {
  const navItems = ["Home", "Menu", "About"];
  const header = document.createElement("header");
  const container = document.createElement("div");
  const row = document.createElement("div");
  const logoWrap = document.createElement("div");
  const logoDiv = document.createElement("div");
  const logoLink = document.createElement("a");
  const image = document.createElement("img");
  const itemsWrap = document.createElement("div");
  const itemsFull = document.createElement("div");
  const itemsDiv = document.createElement("div");
  const uList = document.createElement("ul");
  container.classList.add("container-fluid");
  row.classList.add("row");
  logoWrap.classList.add("col-md-3");
  logoDiv.classList.add("full");
  logoLink.classList.add("logo");
  itemsWrap.classList.add("col-md-4", "align-items-center")
  itemsFull.classList.add("full");
  itemsDiv.classList.add("right_header_info")
  image.setAttribute('src', 'a794730fa04f411a44a6.png');

  navItems.forEach((item) =>
    uList.appendChild(createHtmlElement("li", null, null, item))
  );


  logoLink.appendChild(image);
  logoDiv.appendChild(logoLink);
  logoWrap.appendChild(logoDiv);
  row.appendChild(logoWrap);
  uList.appendChild(itemsDiv);
  itemsDiv.appendChild(itemsFull);
  itemsFull.appendChild(itemsWrap);
  row.appendChild(itemsWrap);
  container.appendChild(row);
  header.appendChild(container);
  content.appendChild(header);  
}

export { renderNav }