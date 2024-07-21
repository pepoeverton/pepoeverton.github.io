const toggleButton = document.querySelector('#toggle-theme');
let defaultTheme = localStorage.getItem('theme') || 'light';

if (defaultTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');

  if (isDark) {
    defaultTheme = 'dark';
  } else {
    defaultTheme = 'light';
  }

  localStorage.setItem('theme', defaultTheme);
});

// Setting the theme previously selected by the user
document.addEventListener('DOMContentLoaded', () => {
  // Inject the value from localStorage into the toggleButton
  if (toggleButton) {
    toggleButton.checked = defaultTheme === 'dark' ? true : false;
  }
});
