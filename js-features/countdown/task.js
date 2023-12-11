let startCount = Number(document.getElementById('timer').textContent);
let timer = setInterval(() => {
	document.getElementById('timer').textContent = --startCount;
	if (startCount == 0) {
		alert('Вы победили в конкурсе');
		clearInterval(timer);
	}
}, 1000);