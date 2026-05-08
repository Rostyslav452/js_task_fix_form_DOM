'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((e) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('htmlFor', `${e.id}`);
  label.textContent = e.name.toUpperCase();

  e.setAttribute('placeholder', `${e.name}`);

  e.before(label);
});
