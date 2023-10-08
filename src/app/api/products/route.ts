import { createProducts } from "@/app/features/products/createProducts";
import { NextResponse } from "next/server";

export function GET() {
    const products = createProducts(8);
    return NextResponse.json(
        {data: Array.from(products.values())},
        {status: 200}
    )
}