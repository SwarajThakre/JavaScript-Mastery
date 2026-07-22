const input = document.querySelector('#inputText');
const preview = document.querySelector('#preview');

input.addEventListener('input', () => {
  preview.textContent = input.value;
});
