const allProduct = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

  	Array.from(allProduct, (product)=> {
  		let quantityControls = product.querySelector('.product__quantity-controls');
  		
  		let addBasket = product.querySelector('.product__add');

  		let quantityControl = quantityControls.querySelectorAll('.product__quantity-control');
  		let quantityValue = quantityControls.querySelector('.product__quantity-value');
  		let idProduct = product.dataset.id;
  		let imgProductSrc = product.querySelector('.product__image').currentSrc;

  		
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
				})
			}
			addBasket.addEventListener ('click', (add) => {
				quantityValue = quantityControls.querySelector('.product__quantity-value');

				const productInCard = [...cart.children].find((element) => element.dataset.id === idProduct);
				
					if(productInCard) {
					  productInCard.querySelector('.cart__product-count').innerText = Number(productInCard.querySelector('.cart__product-count').innerText) + Number(quantityValue.innerText);
					  //console.log(productInCard)
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
