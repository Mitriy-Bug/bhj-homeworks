const tooltips = document.querySelectorAll('.has-tooltip');
let tooltip = document.createElement('div');
let tooltipLinkDOM = null;
let tooltipActive = null;
let position = null;
tooltip.classList.add('tooltip');
for (let hasTooltip of tooltips) {
  hasTooltip.addEventListener ('click', (tooltipLink) => {
    tooltipLink.preventDefault();
    tooltipLinkDOM = tooltipLink.target;
    tooltipActive = document.querySelector('.tooltip_active');
    if (tooltipActive && tooltipActive.textContent === tooltipLinkDOM.attributes.title.value) {
      tooltip.classList.toggle('tooltip_active');
    } else {
      position = tooltipLinkDOM.getBoundingClientRect();
      tooltip.classList.add('tooltip_active');
      tooltip.textContent = tooltipLinkDOM.attributes.title.value;
      tooltip.setAttribute('style', 'top:'+(position.top+position.height+4)+'px; left:'+position.left+'px;position:absolute');
      tooltipLinkDOM.parentNode.insertBefore(tooltip, tooltipLinkDOM);
    }
  })
}