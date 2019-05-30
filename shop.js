function renderProduct( product ){
  var card = document.createElement('div');
      card.className = "card col-md-3 mx-2 mt-2";
  var img  =document.createElement('img');
      img.src = product.photos[0];
      card.appendChild(img);
  var cardBody = document.createElement('div');
      cardBody.className = "card-body";
      card.appendChild(cardBody);
  var h = document.createElement('h5');
      h.className = "card-title";
      h.innerText = product.name;
      cardBody.appendChild(h);
  var p = document.createElement('p');
      p.className = "card-text";
      p.innerText = product.massa.value + product.massa.unit;
      cardBody.appendChild(p);
  var p2 = document.createElement('p');
      p2.className = "card-text";
      p2.innerText = product.price.value + product.price.currency;
      cardBody.appendChild(p2);
  var a = document.createElement('a');
      a.href = `#${product.id}`;
      a.className = "btn btn-primary";
      a.innerText = "... Go ...";
      a.addEventListener('click', addToCard);
      cardBody.appendChild(a);
  var row = document.querySelector("#products .row2");
      row.appendChild(card);
}


function renderProductList(){

  for (var i = 0; i < products.length; i++) {
    renderProduct( products[i] );
  }
}

function addToCard(e){
  let product_id = e.target.href.split("#").pop();

  if (localStorage.getItem('cart') !=null) {
      var products_cart = localStorage.getItem('cart').split(",")
  }else {
    var products_cart = [];
  }


      products_cart.push(product_id);

      // alert(product_cart);
    localStorage.setItem('cart', products_cart);

    showMessage("your product was added to the cart!");
}

function showMessage(message){

var div = document.createElement('div')
    div.className = "alert alert-warning alert-dismissible fade show";
    div.setAttribute('role', "alert");
var strong = document.createElement('strong');
    strong.innerText = "Success!";
var x = document.createTextNode("You should check in on some of those fields below.");
    div.appendChild(strong);
    div.appendChild(x);
var button = document.createElement('button');
    button.setAttribute("type","button");
    button.className = "close";
    button.setAttribute('data-dismiss', "alert");
    button.setAttribute('aria-label',"Close");
    div.appendChild(button);
var span = document.createElement('span');
    span.setAttribute('aria-hidden', "true");
    span.innerHTML = "&times";
    button.appendChild(span);

  var products = document.querySelector("#products");
      products.appendChild(div)

  setTimeout(function(){
    products.removeChild(div);
  },5000);
}

function showCart(){

  if (localStorage.getItem('cart') !=null) {
      var products_cart = localStorage.getItem('cart').split(",")
  }else {
    var products_cart = [];
  }





  var a = document.createElement('a');
      a.href = `#`;
      a.className = "btn btn-primary btn-lg rounded-pill";
  var i = document.createElement('i');
      i.className = "fas fa-shopping-cart";
      a.appendChild(i);
  var f = document.createTextNode(`items: ${products_cart.length}`);
      a.appendChild(f)

var cart = document.querySelector('.product-cart');
    cart.appendChild(a)
}


renderProductList()



// permament sa se inoiasca cosu

// eroarea daca ichidem alert inainte de 5 secunt
