let carts = document.querySelectorAll('.add-cart');

showCart = document.querySelector('.cart')

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cartNumber').textContent = productNumbers;
        showCart.classList.toggle('showCart')
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cartNumber').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cartNumber').textContent = 1;
        showCart.classList.toggle('showCart')
    }
}

onLoadCartNumbers();