
import { Cart } from "./cart.js";
import { getProducts } from "./products.js";
const cart = new Cart();
let products = [];

const main = async() =>{
    products = await getProducts();
    console.log(products);
}
main();



const addItem = (name, unit_price,desired_quantity, stock) => {
    if (stock <= 0) return alert('No stock available for this product');
    if (stock < desired_quantity) return alert('Quantity not available');
    cart.addItem(name, unit_price, stock);
}

