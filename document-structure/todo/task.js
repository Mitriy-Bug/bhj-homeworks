const tasksForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
let tasksRemove;
tasksForm.addEventListener('submit', (form)=>{
	form.preventDefault();
	if(taskInput.value){
		tasksList.insertAdjacentHTML("afterbegin", "<div class='task'><div class='task__title'>"+taskInput.value+"</div><a href='#' class='task__remove'>&times;</a></div>")
	}
	tasksRemove = document.querySelectorAll(".task__remove");
})
tasksList.addEventListener('mouseover', ()=> {
  if(tasksRemove) {
  	Array.from(tasksRemove, (el)=> {
 			el.addEventListener('click', ()=>{
				el.closest('.task').remove()
			})
		})
	}
})