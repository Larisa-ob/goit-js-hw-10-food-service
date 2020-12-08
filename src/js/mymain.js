import menuItems from '../menu.json';
const refs = {
  menuItems: document.querySelector('.js-menu'),
  changeTems: document.querySelector('#theme-switch-toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.menuItems.addEventListener('click', onGalleryClick);
