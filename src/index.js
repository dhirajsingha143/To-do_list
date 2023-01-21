import './style.css';

const toDoList = document.querySelector('.toDo_list_ul');

const addTask = (toDoListArray, task) => {
  toDoListArray.push({ task, id: toDoListArray.length + 1 });
};

const renderToDoList = (toDoListArray) => {
  toDoList.innerHTML = '';

  toDoListArray = getLocalStorage();

  toDoListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-list-li');

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.classList.add('todo-list-li-checkbox');
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.checked = toDo.completed;
    toDoItem.appendChild(toDoCheckbox);

    const toDoText = document.createElement('input');
    toDoText.classList.add('todo-list-li-text');
    toDoText.value = toDo.task;
    // toDoText.disabled = true;
    toDoItem.appendChild(toDoText);

    if (toDo.completed) {
      toDoText.classList.add('completed');
    }

    const crossIcon = document.createElement('span');
    crossIcon.classList.add('todo-list-li-cross');
    crossIcon.innerHTML = 'x';
    toDoItem.appendChild(crossIcon);

    toDoList.appendChild(toDoItem);
  });
};