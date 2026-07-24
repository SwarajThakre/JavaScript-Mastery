const dropBtn = document.querySelector('#dropdownBtn');
const dropdownMenu = document.querySelector('#dropdownMenu');

dropBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!dropBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});
