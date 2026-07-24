const form = document.querySelector('#signupForm');
const userError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const successMessage = document.querySelector('#successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();

  userError.textContent = '';
  emailError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  if (!username) {
    userError.textContent = 'Please enter a username.';
    isValid = false;
  }

  if (!email) {
    emailError.textContent = 'Please enter an email address.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.style.color = 'green';
  }

  console.log('Username:', username);
  console.log('Email:', email);
});
