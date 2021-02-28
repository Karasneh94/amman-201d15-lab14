'use strict';



let items = document.getElementById('items');
let option = document.createElement('option');



// Cart constructor.
const Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = new Array;
};

Cart.prototype.addItem = function (product) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  let newItem = new CartItem(product);
  console.log(newItem);
  this.items.push(newItem);

};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  let data = JSON.stringify(cart1.items);
  localStorage.setItem('product', data);
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!

  getter();

for (let i = 0; i < cart1.items.length; i++) {
  
  if (cart1.items[i].name === item) {

    console.log('before remove');
    console.log(cart1.items[i]);
    const index = cart1.items.indexOf(i);

if (index > -1) {
  array.splice(index, 1);
}
console.log('after remove');
console.log(cart1.items[i]);
    break;
  }  
}
//###### End of for loop #####


cart1.saveToLocalStorage();


};

let cart1 = new Cart;

//
const CartItem = function (product) {

  this.product = product;


};

// Product contructor.
const Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  this.quantity = 0;
  Product.allProducts.push(this);
};
Product.allProducts = [];




function getter() {
  
let storedLocal = localStorage.getItem('product');
if(storedLocal){

cart1.items = JSON.parse(storedLocal);

//console.log(JSON.parse(storedLocal))

}

}





function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');


  for (let i = 0; i < Product.allProducts.length; i++) {

    let items = document.getElementById('items');
    let option = document.createElement('option');
    items.appendChild(option);
    option.textContent = Product.allProducts[i].name;

  }
}
//############end of generateCatalog#############

let addButton = document.getElementById('catalog');
addButton.addEventListener('submit', submitter);


function submitter(event) {

  event.preventDefault();
  let labelQuantity = parseInt(event.target.quantity.value);
  let labelItem = event.target.items.value;
  // console.log(labelQuantity);
  // console.log(labelItem);

  for (let i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].name === labelItem) {
      Product.allProducts[i].quantity += labelQuantity;
      cart1.addItem(Product.allProducts[i]);

      event.target.quantity.value = 0;
      event.target.items.value = '';

      if (i === 4) {
    console.log(Product.allProducts[4].name + 'will get deleted');
    cart1.removeItem(Product.allProducts[4].name)
    console.log(Product.allProducts[4].name + 'new index');
      }
    

      break;
    } else if (labelItem === '' || labelQuantity === 0 || labelQuantity === null) {
      alert('😡 Nothing Got Added To the Cart 😡')
      break;
    }
  }



  console.log(cart1.items[0]);
  console.log(cart1.items[1]);


}



  
  


// Initialize the app by creating the big list of products with images and names
generateCatalog();
