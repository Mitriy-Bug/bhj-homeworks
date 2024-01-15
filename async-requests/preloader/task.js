const loader = document.getElementById('loader');
const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');
		let jsonData = JSON.parse(xhr.responseText);
		let valute = jsonData.response.Valute;
		printValute(valute);
		function printValute(itemValuta) {
			let listValutes = document.getElementById("items");
			for (let item in itemValuta) {
			  let elementValuta = document.createElement("div");
			  elementValuta.classList.add('item');
			  elementValuta.innerHTML = '<div class="item__code">'+item+'</div><div class="item__value">'+itemValuta[item].Value+'</div><div class="item__currency">руб.</div>';
			  listValutes.appendChild(elementValuta);
			}
		}
	}
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();