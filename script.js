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
    taskAlert.textContent = 'Wpisz treść zadania!';
    taskAlert.style.color = 'red';
  }
}

addBtn.addEventListener('click', addNewTask);