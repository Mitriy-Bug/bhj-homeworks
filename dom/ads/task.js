function slider (selector) {
	let baners = null;
	function emptyActive() {
		document.querySelector(selector + ' .rotator__case').classList.add('rotator__case_active');
	}
	setInterval(() => {
		baners = document.querySelector(selector + ' .rotator__case_active');
		if(baners !== null){
			baners.classList.remove('rotator__case_active');
			if(baners.nextElementSibling !== null){
					baners.nextElementSibling.classList.add('rotator__case_active');
			} else {
				emptyActive();
			}
		} else {
			emptyActive();
		}
	}, 1000)
}

slider('.rotator')