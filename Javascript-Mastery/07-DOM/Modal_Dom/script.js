const openbtn = document.querySelector('#openModal');
const closebtn = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');

openbtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closebtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
});
