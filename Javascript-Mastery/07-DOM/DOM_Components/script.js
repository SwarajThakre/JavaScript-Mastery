const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

    buttons.forEach((button) => {
      button.classList.remove('active');
    });

    contents.forEach((content) => {
      content.classList.remove('active');
    });

    button.classList.add('active');

    const content = document.querySelector(`#${tabId}`);

    content.classList.add('active');
  });
});
