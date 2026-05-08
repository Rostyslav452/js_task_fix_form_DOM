'use strict';

const inputs = [...document.querySelector('form').querySelectorAll('input')];

inputs.forEach((e) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${e.id}`);

  const capitalizedName = e.name.charAt(0).toUpperCase() + e.name.slice(1);

  label.textContent = capitalizedName;

  e.setAttribute('placeholder', `${capitalizedName}`);

  e.before(label);
});
