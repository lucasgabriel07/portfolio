function changeTheme(checkbox) {

  const root = document.querySelector(':root');
  const links = document.querySelectorAll('.apresentacao__links__link');
  const arrows = Array.from(links).map(link => link.querySelector('img'));
  
  if (checkbox.checked) {
    // Dark
    root.style.setProperty('--bg_color', '#272424');
    root.style.setProperty('--fg_color', '#F5F5F5');

    arrows.forEach(arrow => {
      arrow.src = 'assets/white_arrow.svg';
    });

    localStorage.setItem('theme', 'dark');
  } 
  
  else {
    // Light
    root.style.setProperty('--bg_color', '#F5F5F5');
    root.style.setProperty('--fg_color', '#464646');
    
    arrows.forEach(arrow => {
      arrow.src = 'assets/black_arrow.svg';
    });

    localStorage.setItem('theme', 'light');
  }

}

const checkbox = document.getElementById('theme-checkbox');

checkbox.onchange = () => {
  changeTheme(checkbox);
}

checkbox.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    checkbox.click();
  }
})

if (localStorage.getItem('theme') != undefined) {
  checkbox.checked = localStorage.getItem('theme') == 'dark';
}

changeTheme(checkbox);