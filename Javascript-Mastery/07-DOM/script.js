const btn = document.querySelector('#addTask');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

// btn.addEventListener('click', () => {
//   head.textContent = 'Welcome Swaraj';
//   head.style.color = 'blue';
//   head.style.backgroundColor = 'yellow';
//   head.style.fontSize = '40px';
// });

// btn.addEventListener('click', () => {
//   console.log('A');
// });

// btn.addEventListener('click', () => {
//   console.log('B');
// });

// btn.addEventListener('click', () => {
//   console.log('C');
// });

// btn.addEventListener('click', () => {
//   console.log('First');
// });

// console.log('Middle');

// btn.addEventListener('click', () => {
//   console.log('Second');
// });

// console.log('End');

// btn.addEventListener('click', (e) => {
//   console.log(e.type);
//   console.log(e.target);
// });

btn.addEventListener('click', () => {
  const task = taskInput.value;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button class="delete">
    <span>🗑️</span>
    Delete</button>
    `;

  taskList.appendChild(li);

  taskInput.value = '';
});

taskList.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('.delete');

  if (!deleteBtn) return;

  deleteBtn.parentElement.remove();
});
