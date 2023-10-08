//Vet ikke om dette er riktig eller ikke.

import { useState } from "react";
import createCart from "../features/products/createCart";

const initialState = {cart: createCart(8), cartOpen: false};

export default function useCart() {
    const [cart, setCart] = useState(initialState.cart);
    const [isCartOpen, setIsCartOpen] = useState(initialState.cartOpen);

    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    }

    function handleChangeByAmount(id: number, amount: number) {
        if ((cart[id] + amount) >= 0) {
            const tempCart = [...cart];
            tempCart[id] += amount;
            setCart(tempCart);
        }
    }

    function removeItem(id: number) {
        const tempCart = [...cart];
        tempCart[id] = 0;
        setCart(tempCart);
    }

    function zeroOutCart(cart: Array<number>) {
        const tempCart = [...cart];
    
        for (let i = 0; i < cart.length; i++) {
            tempCart[i] = 0
        }
    
        return tempCart;
    }

    function handleBuy() {
        setCart(zeroOutCart(cart));
        window.alert("Items bought! :)")
    }

    function addToCart(id: number) {
        const tempCart = [...cart];
        tempCart[id] += 1;
        setCart(tempCart);
        console.log(cart)
    }

    return {cart, isCartOpen, toggleCart, handleBuy, handleChangeByAmount, removeItem, addToCart}
}