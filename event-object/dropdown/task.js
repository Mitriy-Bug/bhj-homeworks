const btn = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
btn.onclick = () => {
	list.classList.toggle("dropdown__list_active");
}
const links = Array.from(document.querySelectorAll(".dropdown__link"), (e)=>{
	e.addEventListener('click', (event) => {
	  event.preventDefault();
	  btn.textContent = e.textContent
	  list.classList.remove("dropdown__list_active");
	})
});