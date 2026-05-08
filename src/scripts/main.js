'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((e) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('htmlFor', `${e.id}`);
  label.textContent = e.name.charAt(0).toUpperCase() + e.name.slice(1);

  e.setAttribute('placeholder', `${e.name}`);

  e.before(label);
});
