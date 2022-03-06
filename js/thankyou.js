const root = document.querySelector(':root');
const theme = localStorage.getItem('theme');

if (theme == 'light') {
  root.style.setProperty('--bg-color-1', getComputedStyle(root).getPropertyValue('--bg-light-1'));
  root.style.setProperty('--bg-color-2', getComputedStyle(root).getPropertyValue('--bg-light-2'));
  root.style.setProperty('--fg-color', getComputedStyle(root).getPropertyValue('--fg-light'));
}

else {
  root.style.setProperty('--bg-color-1', getComputedStyle(root).getPropertyValue('--bg-dark-1'));
  root.style.setProperty('--bg-color-2', getComputedStyle(root).getPropertyValue('--bg-dark-2'));
  root.style.setProperty('--fg-color', getComputedStyle(root).getPropertyValue('--fg_dark'));
}