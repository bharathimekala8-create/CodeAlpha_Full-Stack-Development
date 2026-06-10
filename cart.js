const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

let total = 0;

cart.forEach(item => {
    total += item.price;

    cartContainer.innerHTML += `
        <div class="product-card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
    `;
});

totalElement.innerText = `Total: ₹${total}`;
