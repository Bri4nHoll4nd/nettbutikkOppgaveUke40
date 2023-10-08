const titles = ["NanoGlo Lightbulb", "ZenMist Diffuser", "ChargeHub Pad", "GreenTote Bags", "LunaMask", "BrewMate Travel Mug", "ZenCushion", "SparkBrush", "PixelView VR", "BioGlow Skincare", "AeroMount", "TrekPro Backpack", "NovaSound Headphones", "KittyPlay Toys", "SolarGlow Lights", "HydraBottle", "EcoClean Kit", "GigaMouse", "PetCare Kit", "EcoHike Boots"];
const descriptions = ["A sleek, stainless steel water bottle with double-wall insulation to keep your beverages icy cold or piping hot.", "A vibrant, hand-painted ceramic vase adorned with intricate floral patterns.","A high-definition, 55-inch LED smart TV that transforms your living room into a cinematic experience.", "A compact, portable Bluetooth speaker that delivers crystal-clear sound for your music on the go.", "An elegant, leather-bound journal with acid-free pages for capturing your deepest thoughts and creative ideas.", "A versatile, 10-piece stainless steel cookware set featuring non-stick surfaces for effortless cooking.", "A cutting-edge, noise-canceling headphones with immersive surround sound for your music and movies.", "A plush, memory foam mattress topper that turns your ordinary bed into a luxurious oasis of comfort.", "A classic, leather wallet with multiple card slots and a zippered coin pocket to keep your essentials organized.", "A robust, cordless power drill with interchangeable bits for all your DIY projects.", "A contemporary, glass-top coffee table with a geometric metal base that adds a touch of modern elegance to your living room.", "An eco-friendly, reusable shopping bag made from recycled materials, perfect for reducing plastic waste.", "A charming, handcrafted wooden chess set that doubles as a decorative piece for your home.", "A high-performance, carbon-fiber bicycle designed for speed and agility on the open road.", "A gourmet, artisanal chocolate gift box filled with a delectable assortment of truffles and pralines.", "An advanced, fitness tracker watch that monitors your heart rate, tracks your workouts, and counts your steps.", "A whimsical, hand-painted children's toy chest adorned with colorful animals and a hinged lid for easy access.", "A luxurious, cashmere scarf that wraps you in warmth and style during the chilly winter months.", "A cutting-edge, robotic vacuum cleaner that effortlessly cleans your floors with smart navigation technology.", "An aromatic, soy wax candle in a frosted glass jar, creating a soothing ambiance with its calming fragrance."];
const types = ["Game", "Book", "Electronics", "Art", "Clothing"];

const getRandomFromList = (list: Array<string>) => {
    return list[Math.floor(Math.random() * list.length)];
};

const getRandomPrice = (max: number) => {
    return Math.floor(Math.random() * max);
}

export type Product = {
    title: string,
    description: string,
    types: string,
    price: number
}

export function createProducts(amount: number) {
    let products = [];
    for (let i = 0; i < amount; i++) {
        products.push([getRandomFromList(titles), getRandomFromList(descriptions), getRandomFromList(types), getRandomPrice(1000)]);
    };

    console.log(products)
    return products;
};

export function createCart(productsAmount: number) {
    let cart = new Array<number>;

    for (let i = 0; i < productsAmount; i++) {
        cart.push(0)
    }

    console.log(cart)
    return cart;
}

export function changeAmount(id: number, byAmount: number, cart: Array<number>) {
    if (cart[id] !== 0) {
        if ((cart[id] + byAmount) <= 0) {
            cart[id] = 0;
        } else {
            cart[id] += byAmount;
        }
    };
};

export function removeProduct(id: number, cart: Array<number>) {
    cart.splice(id, 1);
};

export function calculateSum(cart: Array<number>, products: Array<Array<string | number>>) {
    let sum = 0;
    
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i]; j++) {
            sum += Number(products[i][3]);
        }
    };

    return sum;
};

export function productsInCart(cart: Array<number>) {
    let cartSize = 0;
    
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < cart[i]; j++) {
            cartSize += 1;
        }
    };

    return cartSize;
}

export function zeroOutCart(cart: Array<number>) {
    const tempCart = [...cart];

    for (let i = 0; i < cart.length; i++) {
        tempCart[i] = 0
    }

    return tempCart;
}