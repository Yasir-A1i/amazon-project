const cart = {
   cartItems: undefined,
   loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
  if (!this.cartItems){
    this.cartItems =  [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId : '1'
    },
    {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId : '2'
    }];
  };
  },

  saveToLocalStorage(){
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },

  addToCart(productId, amountvalue = 1){
    this.loadFromStorage();

    let matchingItem;
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        })
        if (matchingItem) {
          matchingItem.quantity += amountvalue;
        }
        else {
          this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
          })
        }
    this.saveToLocalStorage();     
  },
  removeFromCart(productId){
    let newCart = [];
    this.cartItems.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);      }
    })
    this.cartItems = newCart;
    this.saveToLocalStorage();
    
  },
  calculateCartQuantity() {
    let cartQuantity = 0;
  
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;
  },
  updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    this.saveToLocalStorage();
  },
  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToLocalStorage();
  }

}

cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e',1)
cart.loadFromStorage();
console.log(cart);





