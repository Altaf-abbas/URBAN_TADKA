/* =========================================
   URBAN TADKA
   INDIAN PAGE JAVASCRIPT
========================================= */


/* ===============================
   VARIABLES
================================ */

let cart = [];


const foodCards =
    document.querySelectorAll(".food-card");


const categoryButtons =
    document.querySelectorAll(".category");


const searchInput =
    document.getElementById("searchInput");


const searchBtn =
    document.getElementById("searchBtn");


const cartButton =
    document.getElementById("cartButton");


const cartCount =
    document.getElementById("cartCount");


const cartOverlay =
    document.getElementById("cartOverlay");


const closeCart =
    document.getElementById("closeCart");


const cartItems =
    document.getElementById("cartItems");


const cartTotal =
    document.getElementById("cartTotal");


const checkoutBtn =
    document.getElementById("checkoutBtn");


/* ===============================
   FILTER FOOD
================================ */

function filterFood() {

    const activeCategory =
        document
            .querySelector(".category.active")
            .dataset.category;


    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    foodCards.forEach(card => {

        const category =
            card.dataset.category;


        const name =
            card.dataset.name.toLowerCase();


        const categoryMatch =
            activeCategory === "all" ||
            category === activeCategory;


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


/* ===============================
   CATEGORY BUTTONS
================================ */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            filterFood();

        }
    );

});


/* ===============================
   SEARCH
================================ */

searchInput.addEventListener(
    "input",
    filterFood
);


searchBtn.addEventListener(
    "click",
    filterFood
);


/* ===============================
   ADD TO CART
================================ */

const addCartButtons =
    document.querySelectorAll(
        ".add-cart"
    );


addCartButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {


            const name =
                button.dataset.name;


            const price =
                Number(
                    button.dataset.price
                );


            addToCart(
                name,
                price
            );


            button.innerText =
                "Added ✓";


            button.classList.add(
                "added"
            );


            setTimeout(
                () => {

                    button.innerText =
                        "Add to Cart";

                    button.classList.remove(
                        "added"
                    );

                },
                800
            );

        }
    );

});


/* ===============================
   ADD ITEM
================================ */

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

            price: price,

            quantity: 1

        });

    }


    updateCart();

}


/* ===============================
   UPDATE CART
================================ */

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


        cartCount.innerText =
            "0";


        return;

    }


    let total = 0;

    let count = 0;


    cart.forEach(
        (item, index) => {


            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;

            count +=
                item.quantity;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "cart-item";


            div.innerHTML = `

                <div class="cart-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <span>
                        ₹${item.price}
                    </span>

                </div>


                <div class="quantity">

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


            cartItems.appendChild(div);

        }
    );


    cartTotal.innerText =
        `₹${total}`;


    cartCount.innerText =
        count;

}


/* ===============================
   PLUS
================================ */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


/* ===============================
   MINUS
================================ */

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


/* ===============================
   REMOVE
================================ */

function removeItem(index) {

    cart.splice(
        index,
        1
    );


    updateCart();

}


/* ===============================
   OPEN CART
================================ */

cartButton.addEventListener(
    "click",
    () => {

        cartOverlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }
);


/* ===============================
   CLOSE CART
================================ */

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


/* ===============================
   CHECKOUT
================================ */

checkoutBtn.addEventListener(
    "click",
    () => {


        if (
            cart.length === 0
        ) {

            alert(
                "Your cart is empty!"
            );

            return;

        }


        let order =
            "Your Order:\n\n";


        let total = 0;


        cart.forEach(item => {

            const amount =
                item.price *
                item.quantity;


            total += amount;


            order +=
                `${item.name} × ${item.quantity} = ₹${amount}\n`;

        });


        order +=
            `\nTotal = ₹${total}`;


        alert(
            order +
            "\n\nThank you for ordering from Urban Tadka ❤️"
        );

    }
);


/* ===============================
   ESC KEY
================================ */

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


/* ===============================
   START
================================ */

filterFood();

updateCart();