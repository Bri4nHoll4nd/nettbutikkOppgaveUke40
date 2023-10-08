import Product from "./Product";

type ProductListProps = {
    products: any,
    addToCart: any
}

export default function ProductList(props: ProductListProps) {
    const {products, addToCart} = props;

    return (
        <>
            <ul className="productList">
                {products.map((product: any, index: number) => (
                    <Product id={index} title={product[0]} description={product[1]} type={product[2]} price={product[3]} addToCart={addToCart}></Product>
                ))}
            </ul>
        </>
    )
}