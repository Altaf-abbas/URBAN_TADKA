/* =====================================================
   SOUTH INDIAN PAGE
===================================================== */


/* ================= CART ================= */

let cart = [];


/* ================= ELEMENTS ================= */

const foodGrid =
    document.getElementById("foodGrid");

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


/* =====================================================
   CATEGORY FILTER
===================================================== */

const categoryButtons =
    document.querySelectorAll(".category");

const foodCards =
    document.querySelectorAll(".food-card");


categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        /* Remove active class */

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        /* Add active class */

        this.classList.add("active");


        const category =
            this.getAttribute("data-category");


        /* Show / Hide foods */

        foodCards.forEach(card => {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =====================================================
   SEARCH FUNCTION
===================================================== */

function searchFood() {

    const searchValue =
        searchInput.value
        .toLowerCase()
        .trim();


    foodCards.forEach(card => {

        const foodName =
            card.getAttribute("data-name")
            .toLowerCase();


        if (
            foodName.includes(searchValue)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* Search while typing */

searchInput.addEventListener(
    "input",
    searchFood
);


/* Search button */

searchBtn.addEventListener(
    "click",
    searchFood
);


/* =====================================================
   ADD TO CART
===================================================== */

const addButtons =
    document.querySelectorAll(".add-cart");


addButtons.forEach(button => {

    button.addEventListener("click", function () {

        const name =
            this.getAttribute("data-name");

        const price =
            Number(
                this.getAttribute("data-price")
            );


        /* Check existing item */

        const existingItem =
            cart.find(item =>
                item.name === name
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


        /* Button effect */

        const originalText =
            this.innerText;


        this.innerText =
            "Added ✓";


        this.style.background =
            "#f05a00";


        setTimeout(() => {

            this.innerText =
                originalText;

            this.style.background =
                "#222";

        }, 1000);

    });

});


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalItems +=
            item.quantity;

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


/* =====================================================
   DISPLAY CART
===================================================== */

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


        const div =
            document.createElement("div");


        div.className =
            "cart-item";


        div.innerHTML = `

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


        cartItems.appendChild(div);

    });

}


/* =====================================================
   REMOVE CART ITEM
===================================================== */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =====================================================
   OPEN CART
===================================================== */

cartButton.addEventListener(
    "click",
    function () {

        cartOverlay.style.display =
            "flex";

        displayCart();

    }
);


/* =====================================================
   CLOSE CART
===================================================== */

closeCart.addEventListener(
    "click",
    function () {

        cartOverlay.style.display =
            "none";

    }
);


/* =====================================================
   CLICK OUTSIDE CART
===================================================== */

cartOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            cartOverlay
        ) {

            cartOverlay.style.display =
                "none";

        }

    }
);


/* =====================================================
   CHECKOUT
===================================================== */

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
            "Thank you for ordering from Urban Tadka! 🍛"
        );


        cart = [];


        updateCart();


        cartOverlay.style.display =
            "none";

    }
);


/* =====================================================
   INITIAL CART
===================================================== */

updateCart();