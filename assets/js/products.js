import { getImages } from "./util/img.js";

const getProducts = async () => {
    
    const allProducts = [];
    const data = await fetch('./assets/db/products.json');
    const { products }= await data.json();
    const urlImages = await getImages(products.length);

    products.forEach((product, index) => {
        const { name, unit_price, stock } = product;
        const img = urlImages[index];
        allProducts .push({
            img,
            name,
            unit_price,
            stock
        });
    });
    return allProducts;
}

export {
    getProducts
}