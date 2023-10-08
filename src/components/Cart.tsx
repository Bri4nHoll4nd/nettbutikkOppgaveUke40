import CartItem from "./CartItem";
import calculateSum from "@/app/features/products/calculateSum";

type cartProps = {
    products: any,
    isCartOpen: boolean,
    toggleCart: any,
    cart: any,
    handleChangeByAmount: any,
    removeItem: any,
    handleBuy: any
}

export default function Cart(props: cartProps) {
    const {products, isCartOpen, toggleCart, cart, handleChangeByAmount, removeItem, handleBuy} = props;

    return (
        <>
            <div className={`cartOverlay ${isCartOpen ? 'open' : ''}`}></div>
            <section className={`cart ${isCartOpen ? 'open' : ''}`}>
                <article className="cartHeader">
                    <h2 className="cartTitle">Your shopping cart</h2>
                    <button className="cartCloseButton" onClick={toggleCart}>Close</button>
                </article>
                <ul className="cartItemsList">
                    {products.map((product: any, index: number) => {
                        if (cart[index] > 0) {
                            return <CartItem id={index} title={product[0]} amount={cart[index]} price={product[3]} handleChangeByAmount={handleChangeByAmount} removeItem={removeItem}></CartItem>;
                        }
                    })}
                </ul>
                <article className="cartBuy">
                    <p className="cartTotal">Total: {calculateSum(cart, products)},-</p>
                    <button className="cartBuyButton" onClick={handleBuy}>Buy</button>
                </article>
            </section>
        </>
    );
}