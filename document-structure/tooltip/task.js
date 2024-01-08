const tooltips = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
for (let hasTooltip of tooltips) {
	hasTooltip.addEventListener ('click', (el) => {
		el.preventDefault();
		el = el.target;
		let position = el.getBoundingClientRect();
		tooltip.classList.add('tooltip_active');
		tooltip.textContent = el.attributes.title.value;
		tooltip.setAttribute('style', 'top:'+(position.top+position.height+4)+'px; left:'+position.left+'px;position:absolute')
		el.parentNode.insertBefore(tooltip, el);
	})
}