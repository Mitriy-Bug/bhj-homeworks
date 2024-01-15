const tasksForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
let value = null;
tasksForm.addEventListener('submit', (objectForm) => {
  objectForm.preventDefault();
  value = taskInput.value.trim();
  if(value){
    tasksList.insertAdjacentHTML("afterbegin", "<div class='task'><div class='task__title'>"+value+"</div><a href='#' class='task__remove'>&times;</a></div>");
    let task = tasksList.children[0];
    task.querySelector(".task__remove").addEventListener('click', () => task.remove());
  }
  document.getElementById("task__input").value = '';
  
})