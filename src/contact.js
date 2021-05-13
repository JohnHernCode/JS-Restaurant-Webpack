const renderContact = (content) => {
  const section = document.createElement('div');
  const container = document.createElement('div');
  const row = document.createElement('div');
  const col1 = document.createElement('div');
  const head = document.createElement('div');
  const hh3 = document.createElement('h3');
  const fholder = document.createElement('div');
  const form = document.createElement('form');
  const frow = document.createElement('div');
  const ndiv = document.createElement('div');
  const ninput = document.createElement('input');
  const ediv = document.createElement('div');
  const einput = document.createElement('input');
  const mdiv = document.createElement('div');
  const mtext = document.createElement('textarea');
  const bdiv = document.createElement('div');
  const bsend = document.createElement('button');

  section.classList.add('slider_section', 'pb-lg-5', 'left-padding');
  container.classList.add('container-fluid');
  row.classList.add('row');
  col1.classList.add('col-md-12');
  head.classList.add('slider_cont', 'd-flex', 'align-items-center');
  fholder.classList.add('col-xl-6', 'col-lg-6', 'col-md-6', 'col-sm-12');
  form.classList.add('main_form');
  frow.classList.add('row');
  ndiv.classList.add('col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12');
  ediv.classList.add('col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12');
  mdiv.classList.add('col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12');
  bdiv.classList.add('col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12');
  ninput.classList.add('form-control');
  ninput.setAttribute('placeholder', 'Name');
  ninput.setAttribute('type', 'text');
  ninput.setAttribute('name', 'Name');
  einput.classList.add('form-control');
  einput.setAttribute('placeholder', 'Email');
  einput.setAttribute('type', 'text');
  einput.setAttribute('name', 'Email');
  mtext.classList.add('textarea');
  mtext.setAttribute('placeholder', 'Message');
  mtext.setAttribute('type', 'text');
  mtext.setAttribute('name', 'Message');
  bsend.classList.add('send');

  hh3.textContent = 'Contact Us';
  bsend.textContent = 'Send';

  // format

  head.appendChild(hh3);
  col1.appendChild(head);
  row.appendChild(col1);

  form.appendChild(frow);
  fholder.appendChild(form);
  row.appendChild(fholder);

  ndiv.appendChild(ninput);
  frow.appendChild(ndiv);

  ediv.appendChild(einput);
  frow.appendChild(ediv);

  mdiv.appendChild(mtext);
  frow.appendChild(mdiv);

  bdiv.appendChild(bsend);
  frow.appendChild(bdiv);

  container.appendChild(row);
  section.appendChild(container);
  content.appendChild(section);
};

export default renderContact;