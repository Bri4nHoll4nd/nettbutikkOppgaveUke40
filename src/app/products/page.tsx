"use client"

import { useEffect, useState } from 'react';
import ProductList from "@/components/ProductList"
import "@/styles/stylesheet.css"
import Cart from '@/components/Cart';
import useCart from '../hooks/useCart';
import productsInCart from '../features/products/productsInCart';
import { Product } from '../features/products/createProducts';

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const {cart, isCartOpen, toggleCart, handleBuy, handleChangeByAmount, removeItem, addToCart} = useCart();

    

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("/api/products", {
                method: "get",
            });
            const result = (await response.json()) as {data: Product[]};
            setProducts(result.data);
        }
        getProducts();
    }, [])
    
    return (
        <>
            <button className="openCartButton" onClick={toggleCart}>Cart: {productsInCart(cart)}</button>
            <section className="productContainer">    
                <ProductList products={products} addToCart={addToCart}></ProductList>
            </section>    
            <Cart products={products} isCartOpen={isCartOpen} toggleCart={toggleCart} cart={cart} handleChangeByAmount={handleChangeByAmount} removeItem={removeItem} handleBuy={handleBuy}></Cart>
        </>
    )
  }