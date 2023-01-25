class Product {
    constructor(product, quantity, unit_price) {
        this.product = product;
        this.quantity = quantity;
        this.unit_price = unit_price;
        this.total_price = quantity * unit_price;
    }
}

class Cart {

    constructor() {
        this.items = [];
    }

    addItem(name, quantity, unit_price) {
        this.items.push(new Product(name, quantity, unit_price));
    }

    get cartItems() {
        return this.items;
    }

    totalPrice() {
        const total = 0;
        if (this.items.length < 1) return total;
        this.items.forEach((product) => {
            total += product.total_price;
        });
        return total;
    }
    createOrder() {
        //!TODO: Create Order
    }


}

export {
    Cart
}


