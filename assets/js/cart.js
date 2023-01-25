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
        let total = 0;
        if (this.items.length < 1) return total;
        this.items.forEach((product) => {
            total += product.total_price;
        });       
        return total;
    }
    createOrder() {
        //!TODO: Create Order
    }

    getProductHTMLCart(product) {
        
        const nameImg = product.product.replace(/[^a-zA-Z0-9 ]/g, '');
        return `
        <div class="col">
          <div class="card">
            <img
              src="https://loremflickr.com/500/500/${nameImg}"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">${product.product}</h5>
              <p class="card-text">Quantity: ${product.quantity}</p>
              <p class="card-text">Unit price: ${product.unit_price}</p>          
              <p class="card-text">Total price: ${product.total_price}</p> 
            </div>
          </div>
        </div>`;
          
    }

    showCart(){
        const cart = document.querySelector('#cart');
        const total = document.querySelector('#total');

        cart.innerHTML = '';
        if(this.items.length <= 0){
            cart.innerHTML = '<h1>No items to show</h1>';
            total.innerHTML = '0';
            return;
        }
        this.items.forEach((product) => {            
            cart.innerHTML += this.getProductHTMLCart(product);            
        });      

        total.innerHTML = `<p>Total price: <b>${this.totalPrice()}</b></p>`;
    }


}

export {
    Cart
}


