const buttonsFontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');
let fontSize = '';

Array.from(buttonsFontSize, function(buttonFontSize) {
  buttonFontSize.addEventListener("click", (button) => {
  	button.preventDefault();
  	buttonsFontSize.forEach(function(element) {
      element.classList.remove("font-size_active");
    });
  	button.target.classList.add('font-size_active');
  	if(button.target.classList.contains('font-size_small')){
  		fontSize = 'book_fs-small';
  	} else if(button.target.classList.contains('font-size_big')){
  		fontSize = 'book_fs-big';
  	} else {
  		fontSize = '';
  	}
  	bookContent.classList = 'book__content';
  	bookContent.classList.add(fontSize);
	});
})