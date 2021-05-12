export default function renderMenu(content) {
  const section = document.createElement('div');
  const container = document.createElement('div');
  const row = document.createElement('div');
  const col1 = document.createElement('div');
  const holder = document.createElement('div');
  const item1 = document.createElement('div');
  const productI1 = document.createElement('div');
  const image1 = document.createElement('img');
  const product1 = document.createElement('div');
  const p1h3 = document.createElement('h3');
  const p1h4 = document.createElement('h4');
  const item2 = document.createElement('div');
  const productI2 = document.createElement('div');
  const image2 = document.createElement('img');
  const product2 = document.createElement('div');
  const p2h3 = document.createElement('h3');
  const p2h4 = document.createElement('h4');
  const item3 = document.createElement('div');
  const productI3 = document.createElement('div');
  const image3 = document.createElement('img');
  const product3 = document.createElement('div');
  const p3h3 = document.createElement('h3');
  const p3h4 = document.createElement('h4');
  const item4 = document.createElement('div');
  const productI4 = document.createElement('div');
  const image4 = document.createElement('img');
  const product4 = document.createElement('div');
  const p4h3 = document.createElement('h3');
  const p4h4 = document.createElement('h4');
  section.classList.add('slider_section');
  container.classList.add('container');
  row.classList.add('row');
  col1.classList.add('col-md-12');
  holder.classList.add('d-flex', 'align-items-center', 'justify-content-around');
  item1.classList.add('item');
  item2.classList.add('item');
  item3.classList.add('item');
  item4.classList.add('item');
  productI1.classList.add('product_blog_cont');
  productI2.classList.add('product_blog_cont');
  productI3.classList.add('product_blog_cont');
  productI4.classList.add('product_blog_cont');
  image1.setAttribute('src', '32fbf72e843198fb1719.png');
  image2.setAttribute('src', '435dcc6dd981e946e5a6.png');
  image3.setAttribute('src', 'af927823dff88ae60af8.png');
  image4.setAttribute('src', '488f5427aa2b4079d008.png');
  product1.classList.add('product_blog_cont');
  product2.classList.add('product_blog_cont');
  product3.classList.add('product_blog_cont');
  product4.classList.add('product_blog_cont');

  p1h3.textContent = 'Homemade';
  p2h3.textContent = 'Noodles';
  p3h3.textContent = 'Egg';
  p4h3.textContent = 'Sushi Dizzy';
  p1h4.textContent = '$10';
  p2h4.textContent = '$10';
  p3h4.textContent = '$10';
  p4h4.textContent = '$10';

  // format

  productI1.appendChild(image1);
  item1.appendChild(productI1);
  product1.appendChild(p1h3);
  product1.appendChild(p1h4);
  item1.appendChild(product1);
  holder.appendChild(item1);

  productI2.appendChild(image2);
  item2.appendChild(productI2);
  product2.appendChild(p2h3);
  product2.appendChild(p2h4);
  item2.appendChild(product2);
  holder.appendChild(item2);

  productI3.appendChild(image3);
  item3.appendChild(productI3);
  product3.appendChild(p3h3);
  product3.appendChild(p3h4);
  item3.appendChild(product3);
  holder.appendChild(item3);

  productI4.appendChild(image4);
  item4.appendChild(productI4);
  product4.appendChild(p4h3);
  product4.appendChild(p4h4);
  item4.appendChild(product4);
  holder.appendChild(item4);

  col1.appendChild(holder);
  row.appendChild(col1);
  container.appendChild(row);
  section.appendChild(container);
  content.appendChild(section);
}