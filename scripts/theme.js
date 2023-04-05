const toggleButton = document.querySelector('#toggle-theme');

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
})