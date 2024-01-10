const allProduct = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

if(allProduct) {
  	Array.from(allProduct, (product)=> {
  		let quantityControls = product.children[2].children[0].children[1];
  		let addBasket = product.children[2].children[0].children[2];

  		let quantityControl = quantityControls.querySelectorAll('.product__quantity-control');
  		let quantityValue = quantityControls.querySelector('.product__quantity-value');
  		let idProduct = product.dataset.id;
  		let imgProductSrc = product.children[1].currentSrc;
  		
 			for (let control of quantityControl) {
				control.addEventListener ('click', (el) => {
					el.preventDefault();
					el = el.target;
					if (el.classList.contains('product__quantity-control_dec')) {
						quantityValue.innerText--
						if(quantityValue.innerText < 1) {
							quantityValue.innerText = 1
						}
					}
					if (el.classList.contains('product__quantity-control_inc')) {
						quantityValue.innerText++
					}
					//console.log(quantityValue.innerText);
				})
			}
			addBasket.addEventListener ('click', (add) => {
				quantityValue = quantityControls.querySelector('.product__quantity-value');
				//console.log(cart.children.length)
				if (cart.children.length > 0) {
					for (let i = 0; i < cart.children.length; i++) {
						if (cart.children[i].dataset.id == idProduct) {
							cart.children[i].children[1].innerText = Number(cart.children[i].children[1].innerText) + Number(quantityValue.innerText);
						} else {
							cart.insertAdjacentHTML("beforeend", `
									<div class="cart__product" data-id="`+idProduct+`">
			                <img class="cart__product-image" src="`+imgProductSrc+`">
			                <div class="cart__product-count">`+quantityValue.innerText+`</div>
			            </div>
								`)
						}
					}
				} else {
									cart.insertAdjacentHTML("beforeend", `
								<div class="cart__product" data-id="`+idProduct+`">
		                <img class="cart__product-image" src="`+imgProductSrc+`">
		                <div class="cart__product-count">`+quantityValue.innerText+`</div>
		            </div>
							`)
				}
			})
		})
	}