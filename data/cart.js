export const cart = [];
export function addToCart(productId, amountValue){
    let matchingItem;
        cart.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        })
        if (matchingItem) {
          matchingItem.quantity += amountValue;
        }
        else {
          cart.push({
            productId: productId,
            quantity: 1
          })
        }
  }