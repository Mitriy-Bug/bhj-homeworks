const tabs = document.querySelectorAll('.tab');
const tabs_content = document.querySelectorAll('.tab__content');
const getActive = Array.from(tabs, (e, index)=>{
	e.addEventListener('click', () => {
		tabs.forEach((tab,i) => {
			tab.classList.remove("tab_active");
			tabs_content[i].classList.remove("tab__content_active");
		});
	  e.classList.add("tab_active");
	  tabs_content[index].classList.add("tab__content_active");
	})
});