
import { Cart } from "./cart.js";
import { getProducts , showCatalog} from "./products.js";
const cart = new Cart();


const main = async() =>{    
    showCatalog();
}
main();



const addItem = (name, unit_price,desired_quantity, stock) => {
    if (stock <= 0) return alert('No stock available for this product');
    if (stock < desired_quantity) return alert('Quantity not available');
    cart.addItem(name, unit_price, stock);
}

