const input = document.querySelector('.todoInput');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.todoList ul');
const popUpInfo = document.querySelector('.popupInfo');
const popUp = document.querySelector('.popup');
const acceptBtn = document.querySelector(".accept");
const cancelBtn = document.querySelector(".cancel");
const taskInput = document.querySelector(".popupInput");
const alertInfo = document.querySelector(".popupInput");
const taskAlert = document.querySelector('.alertInfo')
const allTasks = ul.getElementsByTagName('li');
let taskToEdit;
let task;
let attributeID = 0;


//creating bar with complete/edit/delete controls
const createToolsArea = () => {
  const toolsPanel = document.createElement('div');
  toolsPanel.className = 'tools';
  task.appendChild(toolsPanel);

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
  completeBtn.className = 'complete';

  const editBtn = document.createElement('button');
  editBtn.innerHTML = `EDIT`;
  editBtn.className = 'edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
  deleteBtn.className = 'delete';

  toolsPanel.appendChild(completeBtn);
  toolsPanel.appendChild(editBtn);
  toolsPanel.appendChild(deleteBtn);
}

//complete/edit/delete control
const checkClick = (e) => {
  if (e.target.closest('button').classList.contains('complete')) {
    e.target.closest('li').classList.toggle('completed');
    e.target.closest('button').classList.toggle('completed');
  } else if (e.target.classList.contains('edit')) {
    const popUp = document.querySelector('.popup');
    popUp.style.display = 'block';
    editTask(e)
  } else if (e.target.closest('button').classList.contains('delete')) {
    e.target.closest('li').remove();

    if (allTasks.length == 0) {
      taskAlert.textContent = 'Brak zadań na liście.';
      taskAlert.style.color = 'rgb(2, 84, 161)';
    }
  }
}

//adding new tasks to list
const addNewTask = () => {
  attributeID++;
  const taskText = input.value;

  if (input.value !== '') {
    task = document.createElement('li');
    task.innerText = taskText;
    task.setAttribute('id', `edit-${attributeID}`)
    ul.appendChild(task);
    taskAlert.innerText = '';
    input.value = '';
    createToolsArea();
  } else {
    taskAlert.textContent = 'No task inputed!';
    taskAlert.style.color = 'red';
  }
}

addBtn.addEventListener('click', addNewTask);
ul.addEventListener('click', checkClick);