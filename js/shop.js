if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    const cartRemove = document.getElementsByClassName("btn-danger");

    for (let i = 0; i < cartRemove.length; i++){
        let button = cartRemove[i];
        button.addEventListener('click', removeItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChange)
    }

    let addToCart = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCart.length; i++){
        let btn = addToCart[i];
        btn.addEventListener('click', addtoCartClick)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked(){
    alert('Thank you for you purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal();
}

function removeItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
}

function quantityChange(event){
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal();
}

function addtoCartClick(event){
    let btn = event.target;
    let shopItem = btn.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let img = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, img);
    updateTotal();
}

function addItemToCart(title, price, img){
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert('This item is already in the cart')
            return
        }
    }
    
    let cartRowContent = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${img}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChange)
}

function updateTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0
    for (let i = 0; i < cartRows.length; i++){
        let row = cartRows[i];
        let priceElem = row.getElementsByClassName('cart-price')[0];
        let quantityElem = row.getElementsByClassName('cart-quantity-input')[0];
        // console.log(priceElem, quantityElem)
        let price = parseFloat(priceElem.innerText.slice(1));
        let quantity = quantityElem.value;
        total += price*quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementById('cart-total-price').innerText = '$' + total;
}