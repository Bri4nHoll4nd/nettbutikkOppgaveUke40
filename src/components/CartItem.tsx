export type cartItemProps = {
    id: number,
    title: string,
    amount: number,
    price: number,
    handleChangeByAmount: any,
    removeItem: any
}

export default function CartItem(props: cartItemProps) {
    const {id, title, amount, price, handleChangeByAmount, removeItem} = props;

    function handleAddChangePos() {
        handleChangeByAmount(id, +1);
    }

    function handleAddChangeMin() {
        handleChangeByAmount(id, -1);
    }

    function handleRemoveItem() {
        removeItem(id);
    }

    return (
        <li className="cartItems" key={"cartItem" + id + title} >
            <button className="cartAddButton" onClick={handleAddChangePos}>+</button>
            <button className="cartSubButton" onClick={handleAddChangeMin}>-</button>
            <input className="cartItemAmount" value={amount} type="number" readOnly/>
            <p className="cartItemTitle">{title} - ({price * amount},-)</p>
            <button className="cartRemoveButton" onClick={handleRemoveItem}>X</button>
        </li>
    );
}