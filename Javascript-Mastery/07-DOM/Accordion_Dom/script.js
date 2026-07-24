const btn = document.querySelectorAll('.question');
const ans = document.querySelectorAll('.answer');

btn.forEach((button) => {
  button.addEventListener('click', () => {
    ans.forEach((answer) => {
      answer.classList.remove('active');
    });

    const Currans = button.nextElementSibling;

    Currans.classList.toggle('active');
  });
});
