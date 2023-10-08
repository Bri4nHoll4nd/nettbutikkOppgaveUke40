type ProductProps = {
    id: number,
    title: string,
    description: string,
    type: string,
    price: number,
    addToCart: any
};

export default function Product(props: ProductProps) {
    const {id, title, description, type, price, addToCart} = props;

    function handleAddToCart() {
        addToCart(id);
    }

    return (
        <li key={"product" + id + title} className="products">
            <p className="productType">{type}</p>
            <h3 className="productTitle">{title}</h3>
            <p className="productDescription">{description}</p>
            <p className="productPrice">{price},-</p>
            <button className="addToCartButton" type="button" onClick={handleAddToCart}>Add to cart</button>
        </li>
    )
};