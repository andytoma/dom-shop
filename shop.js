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
      a.href = "#";
      a.className = "btn btn-primary";
      a.innerText = "... Go ...";
      a.addEventListener('click', addToCard);
      cardBody.appendChild(a);

  var row = document.querySelector("#products .row");
      row.appendChild(card);
}


function renderProductList(){

  for (var i = 0; i < products.length; i++) {
    renderProduct( products[i] );
  }

}

function addToCard(){
  alert();
}


renderProductList()
