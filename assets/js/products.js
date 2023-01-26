import { Cart } from "./cart.js";
const cart = new Cart();

const getProducts = async () => {

    const allProducts = [];
    const data = await fetch('./assets/db/products.json');
    const { products } = await data.json();
    products.forEach((product, index) => {
        const { name, unit_price, stock } = product;
        allProducts.push({
            id: index,
            name,
            unit_price,
            stock
        });
    });
    return allProducts;
}

const getProductHTML = (product) => {
    const nameImg = product.name.replace(/[^a-zA-Z0-9 ]/g, '');
    return `
    <div class="col">
      <div class="card">
        <img
          src="https://loremflickr.com/500/500/${nameImg}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: ${product.unit_price}</p>
          <p class="card-text">Stock: ${product.stock}</p>          
          <button id="btn-product-${product.id}" class="btn btn-success">Add to cart</button>
        </div>
      </div>
    </div>`;
}

const showCatalog = async () => {
    const catalog = document.querySelector('#catalog');
    catalog.innerHTML = '';
    const products = await getProducts();
    products.forEach(product => {
        catalog.innerHTML += getProductHTML(product);
    });
    //Add event listeners
    btnProducts();
}

const btnProducts = async () => {
    const products = await getProducts();
    products.forEach(product => {
        const btn = document.getElementById(`btn-product-${product.id}`);
        btn.addEventListener('click', () => {

            if (product.stock <= 0) 
            {
                alert('No stock available for this product!');                
                return;
            }               

            //TODO: Validate stock
            product.stock -= 1;


            //Add to cart
            cart.addItem(product.name, 1, product.unit_price);
            cart.showCart();
        });
    });
}



export {
    getProducts,
    showCatalog
}