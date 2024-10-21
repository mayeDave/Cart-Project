let cartList = document.getElementById("cartList");
let summary = document.getElementById("summary");
let summaryButton = document.getElementById("summaryButton");



const products = [
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/7814221/1.jpg?0368",
        name: "Hp Stream 11 Pro- Intel Celeron",
        description: "4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard",
        price: "#140000",
        stock: 10
    },
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/1246412/5.jpg?6480",
        name: "Hp Stream 11 Pro- Intel Celeron",
        description: "4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard",
        price: "#200000",
        stock: 8
    },
    {
        imgUrl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2086402/1.jpg?6749",
        name: "Hp Stream 11 Pro- Intel Celeron",
        description: "4GB RAM - 64GB SSD Windows 10 Pro+ Mouse & USB LIGHT FOR Keyboard",
        price: "#350000",
        stock: 20
    }
];

for (const product of products) {
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `
    
    <img src="${product.imgUrl}" class="prodImg"> 
    
    
    <div class="column">
    <p>${product.name}</p> 
    <h4 class="stock">${product.stock} <span>units in stock</span></h4>
    <p class="stockMsg"></p>
    </div>
    <p>${product.description}</p>
     
    <h3>${product.price}</h3> 
    <div class="flexSpace">
    <button class="remove"><span class="material-symbols-outlined white">
delete
</span>Remove</button>
    </div>
    <br>
    <div class="flexSpace">
    <button class="add">+</button>
    <p class="total">1</p>
    <button class="deduct">-</button>
    
    
    </div>
    
    
    `;

    // link the add and deduct button to a function to add and deduct from cart
            let addBtn = cartItem.querySelector(".add");
            let deductBtn = cartItem.querySelector(".deduct");
            let totalQty = cartItem.querySelector(".total");
            let stockDisplay = cartItem.querySelector(".stock");
            
           
            addBtn.addEventListener("click", function() {

                let currentStock = parseInt(stockDisplay.innerHTML);
                let currentQuantity = parseInt(totalQty.innerHTML);
            

            // Ensure you can't add more than available stock
            if (currentStock > 0) {
                

                totalQty.innerHTML = currentQuantity + 1;
                stockDisplay.innerHTML = `${currentStock - 1} units in stock`; // Deduct from stock
                
            } else {
                alert("Out of stock!");
            }
        });

        deductBtn.addEventListener("click", function() {

            let currentStock = parseInt(stockDisplay.innerHTML);
            let currentQuantity = parseInt(totalQty.innerHTML);
            
            // Ensure you can't have less than 1 item in the cart
            if (currentQuantity > 1) {
                

                totalQty.innerHTML = currentQuantity - 1;
                stockDisplay.innerHTML = `${currentStock + 1} units in stock`; // Add back to stock
            }
        });
 
    // create a function to remove item from cart from cart when selected via loop

    let removeBtn = cartItem.querySelector(".remove");
    removeBtn.addEventListener("click", function() {
        cartItem.remove(); // Remove the cart item from the DOM
    });

    cartItem.setAttribute("class", "cartItem");
    
    cartList.appendChild(cartItem);
    
}

// create cart summary to sum all item's price

summary.innerHTML = `
<div>
    <div id="summaryDiv">
        <div>
            <h3>Subtotal</h3>
            <p>Delivery fees not included yet.</p>
        </div>
        <div>
            <h3 id="summary"></h3>
        </div>
        </div>
    <button class="checkout"></button>
</div>
`;


// Add all product price and sum up in the cart summary total summary
let sumPrice = summary.querySelector("#summary");
let checkoutBtn = summary.querySelector(".checkout");
let total = 0;
for (const product of products) {
    total += parseInt(product.price.slice(1));
}
sumPrice.innerHTML = `#${total}`;
checkoutBtn.innerHTML = `Checkout (#${total})`;
