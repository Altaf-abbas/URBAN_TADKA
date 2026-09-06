/* ================= CART ================= */

let cart = [];


/* ================= ELEMENTS ================= */

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const cartButton =
    document.getElementById("cartButton");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const foodCards =
    document.querySelectorAll(".food-card");

const categoryButtons =
    document.querySelectorAll(".category");

const addButtons =
    document.querySelectorAll(".add-cart");


let currentCategory = "all";


/* ================= FILTER ================= */

function applyFilters() {

    const searchValue =
        searchInput.value
        .toLowerCase()
        .trim();


    foodCards.forEach(card => {

        const category =
            card.getAttribute("data-category");

        const name =
            card.getAttribute("data-name")
            .toLowerCase();


        const categoryMatch =
            currentCategory === "all" ||
            category === currentCategory;


        const searchMatch =
            name.includes(searchValue);


        if (
            categoryMatch &&
            searchMatch
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= CATEGORY ================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        this.classList.add("active");


        currentCategory =
            this.getAttribute("data-category");


        applyFilters();

    });

});


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    applyFilters
);


searchBtn.addEventListener(
    "click",
    applyFilters
);


/* ================= ADD CART ================= */

addButtons.forEach(button => {

    button.addEventListener("click", function () {

        const name =
            this.getAttribute("data-name");

        const price =
            Number(
                this.getAttribute("data-price")
            );


        const existingItem =
            cart.find(
                item => item.name === name
            );


        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }


        updateCart();


        const oldText =
            this.innerText;


        this.innerText = "Added ✓";

        this.style.background =
            "#f05a00";


        setTimeout(() => {

            this.innerText = oldText;

            this.style.background =
                "#222";

        }, 1000);

    });

});


/* ================= UPDATE CART ================= */

function updateCart() {

    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalItems += item.quantity;

        totalPrice +=
            item.price *
            item.quantity;

    });


    cartCount.innerText =
        totalItems;


    cartTotal.innerText =
        "₹" + totalPrice;


    displayCart();

}


/* ================= DISPLAY CART ================= */

function displayCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        return;
    }


    cart.forEach((item, index) => {

        const itemTotal =
            item.price *
            item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ₹${item.price}
                    ×
                    ${item.quantity}
                    =
                    ₹${itemTotal}
                </p>

            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${index})"
            >
                Remove
            </button>

        `;


        cartItems.appendChild(cartItem);

    });

}


/* ================= REMOVE ================= */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* ================= OPEN CART ================= */

cartButton.addEventListener(
    "click",
    function () {

        cartOverlay.style.display =
            "flex";

    }
);


/* ================= CLOSE CART ================= */

closeCart.addEventListener(
    "click",
    function () {

        cartOverlay.style.display =
            "none";

    }
);


/* ================= OUTSIDE CLICK ================= */

cartOverlay.addEventListener(
    "click",
    function (event) {

        if (event.target === cartOverlay) {

            cartOverlay.style.display =
                "none";

        }

    }
);


/* ================= CHECKOUT ================= */

checkoutBtn.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert(
                "Your cart is empty!"
            );

            return;
        }


        alert(
            "Thank you for ordering from Urban Tadka! 🍰"
        );


        cart = [];


        updateCart();


        cartOverlay.style.display =
            "none";

    }
);


/* ================= START ================= */

updateCart();