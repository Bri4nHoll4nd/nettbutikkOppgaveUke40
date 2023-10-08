export default function productsInCart(cart: Array<number>) {
    let cartSize = 0;
    
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i]; j++) {
            cartSize += 1;
        }
    };

    return cartSize;
}