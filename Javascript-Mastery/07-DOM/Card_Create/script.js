// const app = document.querySelector('#app');

// const card = document.createElement('div');
// card.classList.add('card');

// const header = document.createElement('h2');
// header.textContent = 'Card Title';

// const content = document.createElement('p');
// content.textContent = 'This is the card content.';

// const deleteButton = document.createElement('button');
// deleteButton.textContent = 'Delete Card';

// deleteButton.addEventListener('click', () => {
//   app.removeChild(card);
// });

// card.appendChild(header);
// card.appendChild(content);
// card.appendChild(deleteButton);

// app.appendChild(card);

const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  const parentDiv = e.currentTarget.parentElement;

  const h2 = parentDiv.querySelector('h2');

  const p = parentDiv.querySelector('p');

  if (h2 && p) {
    h2.textContent = 'DOM Traversal Mastered';
    p.textContent = 'You have successfully created a card!';
  }
});
