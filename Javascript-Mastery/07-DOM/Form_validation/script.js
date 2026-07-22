const form = document.querySelector('#form');
const usernameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const error = document.querySelector('#error');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !email || !password) {
    error.textContent = 'Please fill in all fields.';
    error.style.color = 'red';
  } else {
    error.textContent = 'Form submitted successfully!';
    error.style.color = 'green';
  }
  if (password.length < 6) {
    error.textContent = 'Password must be at least 6 characters long.';
    error.style.color = 'red';
    return;
  }
  if (!emailPattern.test(email)) {
    error.textContent = 'Please enter a valid email address.';
    error.style.color = 'red';
    return;
  }

  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});
