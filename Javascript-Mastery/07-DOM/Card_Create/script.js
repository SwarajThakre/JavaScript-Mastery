const app = document.querySelector('#app');

const card = document.createElement('div');
card.classList.add('card');

const header = document.createElement('h2');
header.textContent = 'Card Title';

const content = document.createElement('p');
content.textContent = 'This is the card content.';

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete Card';

deleteButton.addEventListener('click', () => {
  app.removeChild(card);
});

card.appendChild(header);
card.appendChild(content);
card.appendChild(deleteButton);

app.appendChild(card);
