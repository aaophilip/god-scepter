let navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  let expanded = target.getAttribute('aria-expanded') === true || false;
  navButton.setAttribute('aria-expanded', !expanded)
};

navButton.addEventListener('click', toggleNav);