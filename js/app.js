// show cart

(function() {

const  cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');


cartInfo.addEventListener('click', function(){

cart.classList.toggle('show-cart');


});


})();


//add items to the cart 

(function(){

const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(function(btn){

btn.addEventListener('click',function(event){
    console.log(event.target);

    if(event.target.parentElement.classList.contains('store-item-icon')){
 
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf('img') + 3;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = 'img-cart${partPath}';
        

let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;


let finalPrice = price.slice(1).trim();
item.price = finalPrice;
//console.log(finalPrice);
//item.name = name; 
//console.log(price);
console.log(item);



const cartItem = document.createElement('div');
    cartItem.classList('cart-item','d-flex','justify-content-between','text-capitalize','my-3');
        cartItem.innerHTML = 





}

});

});


})();
