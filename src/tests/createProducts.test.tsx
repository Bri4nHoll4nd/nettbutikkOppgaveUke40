import { Product, createProducts } from "../app/features/products/createProducts";

const fakeProduct: Product = {
    title: "Amazing product",
    description: "Some wierd long description about a random amazing product, that is super cool",
    types: "Hardware",
    price: 459
}

describe.only("Create products", () => {
    it("should create product list", () => {
        const products = createProducts(10, true, fakeProduct)

        expect(products.length).toBe(10)
    })
    it("should have correct data", () => {
        const products = createProducts(10, true, fakeProduct)
        const firstProduct = products[0]

        expect(firstProduct[0]).toBe("Amazing product")
        expect(firstProduct[1]).toBe("Some wierd long description about a random amazing product, that is super cool")
        expect(firstProduct[2]).toBe("Hardware")
        expect(firstProduct[3]).toBe(459)
    })
})