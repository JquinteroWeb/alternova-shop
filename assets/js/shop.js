

import { cart, showCatalog } from "./products.js";
import { downloadJson } from "./util/utils.js";
const btnCreateOrder = document.querySelector("#btn-create-order");

const main = async () => {

    showCatalog();
    btnCreateOrder.addEventListener("click", () => {
        createOrder();
    });
}
main();

const createOrder = () => {
    const { items } = cart;
    const date = new Date();      

    const orderDate = date.getFullYear() + "-" + (date.getMonth() + 1
    ) + "-" + date.getDate() + " " + date.getHours() + ":" +
    date.getMinutes() + ":" + date.getSeconds();
   
   
    if (items.length <= 0) return alert("Please add items to cart");

    const dataToJason = {
        total_price: cart.totalPrice(),
        orderDate,
        order_products: items,
    }
    
    const res = confirm('Do you want to order items from this cart?');
    if (!res) return;
    
    downloadJson(JSON.stringify(dataToJason), 'order.json', 'text/plain');
    console.log(dataToJason);
    //TODO: save data in json


   
    
}

const addItem = (name, unit_price, desired_quantity, stock) => {

    //!TODO: render the cart and catalog
}

