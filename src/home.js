import { content } from "./index";

function renderHome() {
  const section = document.createElement("div");
  const container = document.createElement("div");
  const row = document.createElement("div");
  const col1 = document.createElement("div");
  const full = document.createElement("div");
  const carousel1 = document.createElement("div");
  const carousel2 = document.createElement("div");
  const carousel3 = document.createElement("div");
  const row2 = document.createElement("div");
  const col2 = document.createElement("div");
  const sliderC = document.createElement("div");
  const sliderCA = document.createElement("a");
  const col3 = document.createElement("div");
  const sliderI = document.createElement("div");
  const image = document.createElement("img");
  const sh31 = document.createElement("h3");
  const sh32 = document.createElement("h3");
  const sp = document.createElement("p");
  const sbr = document.createElement("br");
  section.classList.add("slider_section")
  container.classList.add("container");
  row.classList.add("row");
  col1.classList.add("col-md-12");
  full.classList.add("full");
  carousel1.classList.add("carousel", "vert slide");
  carousel2.classList.add("carousel-inner", "active")
  carousel3.classList.add("carousel-item");
  row2.classList.add("row");
  col2.classList.add("col-md-5");
  sliderC.classList.add("slider_cont");
  sliderCA.classList.add("main_bt_border");
  col3.classList.add("col-md-7");
  sliderI.classList.add("slider_image", "full", "text_align_center")
  image.setAttribute('src', 'b5786459156f31ec740d.png');
  sliderCA.setAttribute('href', '#')
  sliderCA.textContent = "Menu";
  sh31.textContent = "Burgers";
  sh32.textContent = "That Delight!";
  
  // format

  sliderI.appendChild(image);
  col3.appendChild(sliderI);
  row2.appendChild(col3)

  sliderC.appendChild(sliderCA);
  // sliderC.appendChild(sp)
  // sliderC.appendChild(sh32)
  // sliderC.appendChild(sbr)
  // sliderC.appendChild(sh31)
  col2.appendChild(sliderC);
  row2.appendChild(col2);

  carousel3.appendChild(row2);
  carousel2.appendChild(carousel3);
  carousel1.appendChild(carousel2);
  full.appendChild(carousel1);
  col1.appendChild(full);
  row.appendChild(col1);
  container.appendChild(row);
  section.appendChild(container);
  content.appendChild(section);  
}

export { renderHome }