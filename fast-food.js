/* =====================================================
   URBAN TADKA - FAST FOOD
===================================================== */


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


/* ================= CURRENT CATEGORY ================= */

let currentCategory = "all";


/* =====================================================
   FILTER FOOD
===================================================== */

function applyFilters() {

    const searchValue =
        searchInput.value
        .toLowerCase()
        .trim();


    foodCards.forEach(card => {

        const cardCategory =
            card.getAttribute("data-category");


        const foodName =
            card.getAttribute("data-name")
            .toLowerCase();


        const categoryMatch =
            currentCategory === "all" ||
            cardCategory === currentCategory;


        const searchMatch =
            foodName.includes(searchValue);


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


/* =====================================================
   CATEGORY FILTER
===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            /* Remove active class */

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* Add active class */

            this.classList.add("active");


            /* Get category */

            currentCategory =
                this.getAttribute(
                    "data-category"
                );


            /* Apply filter */

            applyFilters();

        }
    );

});


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    applyFilters
);


searchBtn.addEventListener(
    "click",
    applyFilters
);


/* =====================================================
   ADD TO CART
===================================================== */

addButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            const foodName =
                this.getAttribute(
                    "data-name"
                );


            const foodPrice =
                Number(
                    this.getAttribute(
                        "data-price"
                    )
                );


            /* Check existing item */

            const existingItem =
                cart.find(
                    item =>
                        item.name === foodName
                );


            if (existingItem) {

                existingItem.quantity++;

            } else {

                cart.push({

                    name: foodName,

                    price: foodPrice,

                    quantity: 1

                });

            }


            /* Update cart */

            updateCart();


            /* Button text */

            const oldText =
                this.innerText;


            this.innerText =
                "Added ✓";


            this.style.background =
                "#f05a00";


            setTimeout(() => {

                this.innerText =
                    oldText;

                this.style.background =
                    "#222";

            }, 1000);

        }
    );

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


    /* Empty cart */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Your cart is empty.
            </p>

        `;

        return;

    }


    /* Display cart items */

    cart.forEach(
        (item, index) => {


            const itemTotal =
                item.price *
                item.quantity;


            const cartItem =
                document.createElement(
                    "div"
                );


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


            cartItems.appendChild(
                cartItem
            );

        }
    );

}


/* =====================================================
   REMOVE ITEM
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
   CLOSE CART ON OUTSIDE CLICK
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
            "Thank you for ordering from Urban Tadka! 🍔"
        );


        /* Clear cart */

        cart = [];


        /* Update cart */

        updateCart();


        /* Close cart */

        cartOverlay.style.display =
            "none";

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

updateCart();