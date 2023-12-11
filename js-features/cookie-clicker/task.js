let countClick = document.getElementById('clicker__counter').textContent;
let cookie = document.getElementById('cookie');
cookie.onclick = () => {
	document.getElementById('clicker__counter').textContent = ++countClick;
	if (countClick % 2 === 0) {
		cookie.setAttribute("width", 200);
	} else {
		cookie.setAttribute("width", 240);
	}
};