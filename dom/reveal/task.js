const reveal = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

addEventListener("scroll", () => {
	for (var i = 0; i < reveal.length; i++) {
			let rect = reveal[i].getBoundingClientRect();
			if(rect.top < viewportHeight && rect.bottom < viewportHeight){
				reveal[i].classList.add('reveal_active');
			} 
	}
});