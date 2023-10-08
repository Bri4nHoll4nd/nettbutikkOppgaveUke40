export default function calculateSum(cart: Array<number>, products: Array<Array<string | number>>) {
    let sum = 0;
    
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i]; j++) {
            sum += Number(products[i][3]);
        }
    };

    return sum;
};