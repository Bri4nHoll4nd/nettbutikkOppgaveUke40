export default function createCart(productsAmount: number) {
    let cart = new Array<number>;

    for (let i = 0; i < productsAmount; i++) {
        cart.push(0)
    }

    return cart;
}