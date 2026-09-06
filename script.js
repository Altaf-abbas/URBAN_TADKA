/* =========================================
   URBAN TADKA
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   CUISINE DATA

   YAHAN NAYA CUISINE ADD KARO
========================================= */

const cuisines = [

    {
        name: "Indian",
        emoji: "🇮🇳",
        page: "indian.html",
        description:
            "Rich spices & traditional flavours"
    },


    {
        name: "Chinese",
        emoji: "🇨🇳",
        page: "chinese.html",
        description:
            "Delicious oriental flavours"
    },


    {
        name: "Italian",
        emoji: "🇮🇹",
        page: "italian.html",
        description:
            "Pizza, pasta & more"
    },


    {
        name: "South Indian",
        emoji: "🥘",
        page: "south-indian.html",
        description:
            "Authentic southern flavours"
    },


    {
        name: "Fast Food",
        emoji: "🍔",
        page: "fast-food.html",
        description:
            "Quick & delicious bites"
    },


    {
        name: "Desserts",
        emoji: "🍰",
        page: "desserts.html",
        description:
            "Sweet moments for everyone"
    }

];



/* =========================================
   FOOD DATA

   SEARCH KE LIYE FOOD YAHAN ADD KARO
========================================= */

const foods = [

    /* INDIAN */

    {
        name: "Paneer Tikka",
        category: "Indian",
        price: 249,
        image: "images/paneer-tikka.jpg",
        page: "indian.html"
    },


    {
        name: "Chicken Tikka",
        category: "Indian",
        price: 299,
        image: "images/chicken-tikka.jpg",
        page: "indian.html"
    },


    {
        name: "Butter Chicken",
        category: "Indian",
        price: 299,
        image: "images/butter-chicken.jpg",
        page: "indian.html"
    },


    {
        name: "Shahi Paneer",
        category: "Indian",
        price: 249,
        image: "images/shahi-paneer.jpg",
        page: "indian.html"
    },


    {
        name: "Dal Makhani",
        category: "Indian",
        price: 199,
        image: "images/dal-makhani.jpg",
        page: "indian.html"
    },


    {
        name: "Chicken Biryani",
        category: "Indian",
        price: 279,
        image: "images/chicken-biryani.jpg",
        page: "indian.html"
    },


    {
        name: "Veg Biryani",
        category: "Indian",
        price: 229,
        image: "images/veg-biryani.jpg",
        page: "indian.html"
    },


    {
        name: "Mutton Biryani",
        category: "Indian",
        price: 349,
        image: "images/mutton-biryani.jpg",
        page: "indian.html"
    },


    {
        name: "Garlic Naan",
        category: "Indian",
        price: 79,
        image: "images/garlic-naan.jpg",
        page: "indian.html"
    },


    /* CHINESE */

    {
        name: "Veg Manchurian",
        category: "Chinese",
        price: 199,
        image: "images/veg-manchurian.jpg",
        page: "chinese.html"
    },


    {
        name: "Hakka Noodles",
        category: "Chinese",
        price: 179,
        image: "images/hakka-noodles.jpg",
        page: "chinese.html"
    },


    {
        name: "Chilli Chicken",
        category: "Chinese",
        price: 249,
        image: "images/chilli-chicken.jpg",
        page: "chinese.html"
    },


    /* ITALIAN */

    {
        name: "Margherita Pizza",
        category: "Italian",
        price: 249,
        image: "images/margherita-pizza.jpg",
        page: "italian.html"
    },


    {
        name: "White Sauce Pasta",
        category: "Italian",
        price: 229,
        image: "images/white-sauce-pasta.jpg",
        page: "italian.html"
    },


    /* SOUTH INDIAN */

    {
        name: "Masala Dosa",
        category: "South Indian",
        price: 149,
        image: "images/masala-dosa.jpg",
        page: "south-indian.html"
    },


    {
        name: "Idli Sambar",
        category: "South Indian",
        price: 99,
        image: "images/idli-sambar.jpg",
        page: "south-indian.html"
    },


    /* FAST FOOD */

    {
        name: "Veg Burger",
        category: "Fast Food",
        price: 129,
        image: "images/veg-burger.jpg",
        page: "fast-food.html"
    },


    {
        name: "French Fries",
        category: "Fast Food",
        price: 99,
        image: "images/french-fries.jpg",
        page: "fast-food.html"
    },


    /* DESSERT */

    {
        name: "Gulab Jamun",
        category: "Desserts",
        price: 99,
        image: "images/gulab-jamun.jpg",
        page: "desserts.html"
    },


    {
        name: "Rasmalai",
        category: "Desserts",
        price: 129,
        image: "images/rasmalai.jpg",
        page: "desserts.html"
    }

];



/* =========================================
   NAVBAR
========================================= */

const navLinks =
    document.getElementById("navLinks");


function createNavbar() {

    navLinks.innerHTML = "";


    /* HOME */

    const home =
        document.createElement("a");

    home.href = "index.html";

    home.innerText = "Home";

    home.classList.add("active");

    navLinks.appendChild(home);


    /* CUISINES */

    cuisines.forEach(cuisine => {

        const link =
            document.createElement("a");

        link.href =
            cuisine.page;

        link.innerText =
            cuisine.name;

        navLinks.appendChild(link);

    });

}



/* =========================================
   CUISINE CARDS
========================================= */

const cuisineGrid =
    document.getElementById("cuisineGrid");


function displayCuisines() {

    cuisineGrid.innerHTML = "";


    cuisines.forEach(cuisine => {


        const card =
            document.createElement("a");


        card.href =
            cuisine.page;


        card.className =
            "cuisine-card";


        card.innerHTML = `

            <div class="card-icon">
                ${cuisine.emoji}
            </div>

            <h3>
                ${cuisine.name}
            </h3>

            <p>
                ${cuisine.description}
            </p>

            <strong>
                Explore →
            </strong>

        `;


        cuisineGrid.appendChild(card);

    });

}



/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


const searchBtn =
    document.getElementById(
        "searchBtn"
    );


const searchResults =
    document.getElementById(
        "searchResults"
    );


const searchGrid =
    document.getElementById(
        "searchGrid"
    );


const searchText =
    document.getElementById(
        "searchText"
    );



function searchFood() {


    const value =
        searchInput.value
        .trim()
        .toLowerCase();


    if (value === "") {

        searchResults.style.display =
            "none";

        return;

    }


    const results =
        foods.filter(food => {


            const name =
                food.name.toLowerCase();


            const category =
                food.category.toLowerCase();


            return (
                name.includes(value) ||
                category.includes(value)
            );

        });


    searchGrid.innerHTML = "";


    searchText.innerText =
        `Results for "${searchInput.value}"`;


    searchResults.style.display =
        "block";


    /* NO RESULTS */

    if (results.length === 0) {

        searchGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    No food found 😔
                </h3>

                <p>
                    Try another food name or cuisine.
                </p>

            </div>

        `;

        searchResults.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    /* RESULTS */

    results.forEach(food => {


        const card =
            document.createElement("div");


        card.className =
            "search-food-card";


        card.innerHTML = `

            <img
                src="${food.image}"
                alt="${food.name}"
                onerror="
                    this.style.display='none'
                "
            >


            <div class="search-food-content">

                <span>
                    ${food.category}
                </span>


                <h3>
                    ${food.name}
                </h3>


                <strong>
                    ₹${food.price}
                </strong>


                <a
                    href="${food.page}"
                >
                    View Food →
                </a>

            </div>

        `;


        searchGrid.appendChild(card);

    });


    searchResults.scrollIntoView({
        behavior: "smooth"
    });

}



/* SEARCH BUTTON */

searchBtn.addEventListener(
    "click",
    searchFood
);


/* ENTER KEY */

searchInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            searchFood();

        }

    }
);



/* =========================================
   CART
========================================= */

let cart = [];


const cartBtn =
    document.getElementById(
        "cartBtn"
    );


const cartCount =
    document.getElementById(
        "cartCount"
    );


const cartOverlay =
    document.getElementById(
        "cartOverlay"
    );


const closeCart =
    document.getElementById(
        "closeCart"
    );


const cartItems =
    document.getElementById(
        "cartItems"
    );


const cartTotal =
    document.getElementById(
        "cartTotal"
    );


const checkoutBtn =
    document.getElementById(
        "checkoutBtn"
    );



/* =========================================
   OPEN CART
========================================= */

cartBtn.addEventListener(
    "click",
    () => {

        cartOverlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

        updateCart();

    }
);



/* =========================================
   CLOSE CART
========================================= */

function closeCartBox() {

    cartOverlay.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


closeCart.addEventListener(
    "click",
    closeCartBox
);


cartOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === cartOverlay
        ) {

            closeCartBox();

        }

    }
);



/* =========================================
   CART COUNT
========================================= */

function updateCartCount() {


    let count = 0;


    cart.forEach(item => {

        count += item.quantity;

    });


    cartCount.innerText =
        count;

}



/* =========================================
   ADD TO CART
========================================= */

function addToCart(
    name,
    price
) {


    const existing =
        cart.find(
            item =>
                item.name === name
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price: Number(price),

            quantity: 1

        });

    }


    updateCart();

}



/* =========================================
   UPDATE CART
========================================= */

function updateCart() {


    cartItems.innerHTML = "";


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Your cart is empty.
            </p>

        `;


        cartTotal.innerText =
            "₹0";


        updateCartCount();

        return;

    }


    let total = 0;


    cart.forEach(
        (item, index) => {


            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div
                    class="cart-item-info"
                >

                    <h4>
                        ${item.name}
                    </h4>

                    <span>
                        ₹${item.price}
                    </span>

                </div>


                <div
                    class="quantity-controls"
                >

                    <button
                        onclick="
                            decreaseQuantity(${index})
                        "
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="
                            increaseQuantity(${index})
                        "
                    >
                        +
                    </button>

                </div>


                <strong>
                    ₹${itemTotal}
                </strong>


                <button
                    class="remove-item"
                    onclick="
                        removeItem(${index})
                    "
                >
                    ×
                </button>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );


    cartTotal.innerText =
        `₹${total}`;


    updateCartCount();

}



/* =========================================
   INCREASE
========================================= */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}



/* =========================================
   DECREASE
========================================= */

function decreaseQuantity(index) {


    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(
            index,
            1
        );

    }


    updateCart();

}



/* =========================================
   REMOVE
========================================= */

function removeItem(index) {

    cart.splice(
        index,
        1
    );

    updateCart();

}
/* =========================================
   CHECKOUT
========================================= */

checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let total = 0;

    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;

    });


    /* CREATE CHECKOUT MODAL */

    const checkoutModal =
        document.createElement("div");

    checkoutModal.className =
        "checkout-overlay";


    checkoutModal.innerHTML = `

        <div class="checkout-box">

            <button
                class="checkout-close"
                id="checkoutClose"
            >
                ×
            </button>


            <h2>
                Complete Your Order 🛍️
            </h2>


            <p class="checkout-subtitle">
                Enter your details to place your order.
            </p>


            <!-- CUSTOMER DETAILS -->

            <div class="checkout-form">

                <label>
                    Full Name
                </label>

                <input
                    type="text"
                    id="customerName"
                    placeholder="Enter your name"
                >


                <label>
                    Mobile Number
                </label>

                <input
                    type="tel"
                    id="customerMobile"
                    placeholder="Enter mobile number"
                    maxlength="10"
                >


                <label>
                    Delivery Address
                </label>

                <textarea
                    id="customerAddress"
                    placeholder="Enter your complete address"
                    rows="3"
                ></textarea>


                <!-- PAYMENT -->

                <h3>
                    Payment Method
                </h3>


                <div class="payment-options">

                    <label class="payment-option">

                        <input
                            type="radio"
                            name="payment"
                            value="UPI"
                        >

                        <span>
                            📱 UPI
                        </span>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="payment"
                            value="Card"
                        >

                        <span>
                            💳 Card
                        </span>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="payment"
                            value="COD"
                        >

                        <span>
                            💵 Cash on Delivery
                        </span>

                    </label>

                </div>


                <!-- TOTAL -->

                <div class="checkout-total">

                    <span>
                        Total Amount
                    </span>

                    <strong>
                        ₹${total}
                    </strong>

                </div>


                <button
                    class="place-order-btn"
                    id="placeOrderBtn"
                >
                    Place Order ₹${total}
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        checkoutModal
    );


    /* CLOSE BUTTON */

    document
        .getElementById("checkoutClose")
        .addEventListener(
            "click",
            () => {

                checkoutModal.remove();

            }
        );


    /* OUTSIDE CLICK */

    checkoutModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                checkoutModal
            ) {

                checkoutModal.remove();

            }

        }
    );


    /* PLACE ORDER */

    document
        .getElementById("placeOrderBtn")
        .addEventListener(
            "click",
            () => {


                const name =
                    document
                        .getElementById(
                            "customerName"
                        )
                        .value
                        .trim();


                const mobile =
                    document
                        .getElementById(
                            "customerMobile"
                        )
                        .value
                        .trim();


                const address =
                    document
                        .getElementById(
                            "customerAddress"
                        )
                        .value
                        .trim();


                const payment =
                    document
                        .querySelector(
                            'input[name="payment"]:checked'
                        );


                /* VALIDATION */

                if (name === "") {

                    alert(
                        "Please enter your name."
                    );

                    return;

                }


                if (
                    mobile === "" ||
                    mobile.length !== 10 ||
                    isNaN(mobile)
                ) {

                    alert(
                        "Please enter a valid 10-digit mobile number."
                    );

                    return;

                }


                if (address === "") {

                    alert(
                        "Please enter your delivery address."
                    );

                    return;

                }


                if (!payment) {

                    alert(
                        "Please select a payment method."
                    );

                    return;

                }


                /* ORDER ID */

                const orderId =
                    "UT" +
                    Math.floor(
                        10000 +
                        Math.random() * 90000
                    );


                /* PAYMENT MESSAGE */

                if (
                    payment.value === "UPI"
                ) {

                    alert(
                        `UPI Payment Selected\n\nAmount: ₹${total}\n\nOrder ID: ${orderId}\n\nUPI payment gateway will be connected next.`
                    );

                }


                else if (
                    payment.value === "Card"
                ) {

                    alert(
                        `Card Payment Selected\n\nAmount: ₹${total}\n\nOrder ID: ${orderId}\n\nCard payment gateway will be connected next.`
                    );

                }


                else {

                    alert(
                        `Order Confirmed! 🎉\n\nOrder ID: ${orderId}\nAmount: ₹${total}\nPayment: Cash on Delivery\n\nThank you ${name} ❤️`
                    );

                }


                /* CLEAR CART */

                cart = [];

                updateCart();


                checkoutModal.remove();

                closeCartBox();

            }
        );

});
/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeCartBox();

        }

    }
);



/* =========================================
   INITIALIZE WEBSITE
========================================= */

createNavbar();

displayCuisines();

updateCartCount();

searchResults.style.display =
    "none";