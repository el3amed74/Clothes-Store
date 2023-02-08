//how to creat cart page using html? 
(function(){

  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart')
  })

})();


//add items to cart
(function() {

  const cartBtn = document.querySelectorAll('.store-item-icon');
  cartBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      if (event.target.parentElement.classList.contains('store-item-icon')) 
      {
        let fullPath = 
        event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf('img') + 3;
        let partPath = fullPath.slice(pos);
        const item = {};
        item.img = `img - cart${partPath}`;
        let name = event.target.parentElement.parentElement.nextElementSibling
  .children[0].children[0].textContent;

        item.name = name;

        let price = 
  event.target.parentElement.parentElement.nextElementSibling
  .children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
        console.log(finalPrice);
        console.log(item);

        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');

        cartItem.innerHTML = 
`<img src = "${item.img}" class="img-fluid rounded-circle" id="item-img" alt="" />
<div class="item-text">
  <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
  <span>£ </span> 
  <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
</div> 
<a href="#" id="cart-item-remove" class="cart-item-remove">
<i class="fas fa-trash"></i></a>`;

        //select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');
        cart.insertBefore(cartItem, total);
        alert('item added to the cart')
      }
    });
  
  });

})();

.cart.show-cart{display:block}
.cart{display:none; border: 1px solid #000; padding: 20px}
.store-items{margin:20px 0;border:1px solid #000;padding: 20px}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<a id="cart-info" href="javascript:;">Toggle Cart</a>

<!--cart-->

<div class="cart" id="cart">
  <!--cart item-->
  <div class="cart-item d-flex justify-content-between text-capitalize my-3">
    <img src="img-cart/creamicon.jpg" class="img-fluid rounded-circle" id="item-img" alt="" />
    <div class="item-text">
      <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
      <span>£ </span>
      <span id="cart-item-price" class="cart-item-price mb-0">10.99</span>
    </div>
    <a href="#" id="cart-item-remove" class="cart-item-remove">
      <i class="fas fa-trash"></i>
    </a>
  </div>
  <!--cart item end-->
  <!--cart item-->
  <div class="cart-item d-flex justify-content-between text-capitalize my-3">
    <img src="img-cart/creamicon2.jpg" class="img-fluid rounded-circle" id="item-img" alt="" />
    <div class="item-text">
      <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
      <span>£ </span>
      <span id="cart-item-price" class="cart-item-price mb-0">10.99</span>
    </div>
    <a href="#" id="cart-item-remove" class="cart-item-remove">
      <i class="fas fa-trash"></i>
    </a>
  </div>
  <!--cart item end-->
  <!--total-->
  <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
    <h5>total</h5>
    <h5>£ <strong id="cart-total" class="font-weight-bold">21.99</strong></h5>
  </div>
  <!--end of total-->
  <!--buttons-->
  <div class="cart-buttons-container mt-3 d-flex justify-content-between">
    <a href="#" id="clear-cart" class="btn btn-black text=uppercase">clear cart</a>
    <a href="#" id="checkout" class="btn btn-pink text=uppercase">checkout</a>
  </div>
</div>
</div>
</div>

<!--store items-->

<div class="row store-items" id="store-items">
  <!-- single item-->
  <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
    <div class="card single-item">
      <div class="img-container">
        <img src="img/bodybutter.jpg" class="card-img-top store-img" />
        <span class="store-item-icon"><i class="fas fa-shopping-cart"></i></span>
      </div>
      <div class="card-body">
        <div class="card-text d-flex justify-content-between text-capitalize">
          <h5 id="store-item-name">body butter</h5>
          <h5 class="store-item-value">£ <strong id="store-item-price" class="font-weight-bold">10.99</strong></h5>
        </div>
      </div>
    </div>
  </div>
  <!--singles item end -->



//Source: https://stackoverflow.com/questions/69785514


