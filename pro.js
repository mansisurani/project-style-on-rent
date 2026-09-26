/* =====================================================
   STYLE ON RENT - MAIN JAVASCRIPT
===================================================== */


/* ================= DRESS DATA ================= */


        const dresses = [

    // ================= ENGAGEMENT =================

    {
        id: 1,
        name: "Engagement royal Lehenga",
        category: "engagement",
        price: 6999,
        image: "WhatsApp Image 2026-09-14 at 11.42.44 AM (1).jpeg"
    },
    {
        id: 2,
        name: "Engagement  royal blue Lehenga",
        category: "engagement",
        price: 5999,
        image: "WhatsApp Image 2026-09-14 at 11.42.44 AM (2).jpeg"
    },
    {
        id: 3,
        name: "Engagement ivory Dress",
        category: "engagement",
        price: 7999,
        image: "WhatsApp Image 2026-09-14 at 11.42.45 AM (1).jpeg"
    },
    {
        id: 4,
        name: "Engagement champagne Lehenga",
        category: "engagement",
        price: 6999,
        image: "WhatsApp Image 2026-09-14 at 11.42.45 AM (3).jpeg "
    },
    {
        id: 5,
        name: "Engagement peach flaren Outfit",
        category: "engagement",
        price: 6999,
        image: "WhatsApp Image 2026-09-14 at 11.42.45 AM.jpeg"
    },
    {
        id: 6,
        name: "Engagement white  Lehenga",
        category: "engagement",
        price: 4999,
        image: "WhatsApp Image 2026-09-26 at 5.45.47 PM (1).jpeg"
    },
    {
        id: 7,
        name: "Engagement silver sequin Outfit",
        category: "engagement",
        price: 8499,
        image: "WhatsApp Image 2026-09-26 at 5.45.47 PM.jpeg"
    },
    {
        id: 8,
        name: "Engagement grey shimmer Lehenga",
        category: "engagement",
        price: 7999,
        image: "WhatsApp Image 2026-09-26 at 5.45.48 PM.jpeg"
    },


    // ================= HALDI =================

    {
        id: 9,
        name: "Yellow Haldi Lehenga",
        category: "haldi",
        price: 1999,
        image: "WhatsApp Image 2026-09-14 at 1.37.34 PM.jpeg"
    },
    {
        id: 10,
        name: "Haldi white dress",
        category: "haldi",
        price: 1500,
        image: "WhatsApp Image 2026-09-14 at 11.42.45 AM (2).jpeg"
    },
    {
        id: 11,
        name: "Haldi White-Yellow Dress ",
        category: "haldi",
        price: 1000,
        image: "WhatsApp Image 2026-09-22 at 7.20.39 PM (1).jpeg"
    },
    {
        id: 12,
        name: "  Floral Haldi Outfit",
        category: "haldi",
        price: 1400,
        image: "WhatsApp Image 2026-09-22 at 7.20.38 PM.jpeg"
    },
    {
        id: 13,
        name: "Haldi Traditional Lehenga",
        category: "haldi",
        price: 1200,
        image: "WhatsApp Image 2026-09-14 at 11.42.44 AM.jpeg"
    },
    {
        id: 14,
        name: "Haldi Yellow Anarkali",
        category: "haldi",
        price: 2999,
        image: "WhatsApp Image 2026-09-14 at 4.30.45 PM (2).jpeg"
    },
    {
        id: 15,
        name: "Haldi Printed Outfit",
        category: "haldi",
        price: 1400,
        image: "WhatsApp Image 2026-09-14 at 1.37.41 PM.jpeg"
    },
    {
        id: 16,
        name: "Haldi Mirror Work Dress",
        category: "haldi",
        price: 1050,
        image: "WhatsApp Image 2026-09-14 at 1.37.41 PM (1).jpeg"
    },


    // ================= MEHNDI =================

    {
        id: 17,
        name: "Green Mehndi  shara Lehenga",
        category: "mehndi",
        price: 1199,
        image: "WhatsApp Image 2026-09-14 at 4.30.45 PM (1).jpeg"
    },
    {
        id: 18,
        name: "Mehndi Floral Lehenga",
        category: "mehndi",
        price: 3000,
        image: "WhatsApp Image 2026-09-22 at 7.20.38 PM (1).jpeg"
    },
    {
        id: 19,
        name: "Mehndi designer Set",
        category: "mehndi",
        price: 2050,
        image: "WhatsApp Image 2026-09-26 at 5.45.49 PM.jpeg"
    },
    {
        id: 20,
        name: "Mehndi multi Anarkali",
        category: "mehndi",
        price: 2000,
        image: "WhatsApp Image 2026-09-22 at 7.20.39 PM (2).jpeg"
    },
    {
        id: 21,
        name: "Mehndi Pink-Green Outfit",
        category: "mehndi",
        price: 3050,
        image: "WhatsApp Image 2026-09-22 at 7.20.40 PM.jpeg"
    },
    {
        id: 22,
        name: "Mehndi Mirror Work Lehenga",
        category: "mehndi",
        price: 1200,
        image: "WhatsApp Image 2026-09-22 at 7.20.41 PM.jpeg"
    },
    {
        id: 23,
        name: "Mehndi Traditional Dress",
        category: "mehndi",
        price: 1400,
        image: "WhatsApp Image 2026-09-26 at 5.45.48 PM (2).jpeg"
    },
    {
        id: 24,
        name: "Mehndi kachhi Designer ",
        category: "mehndi",
        price: 1299,
        image: "WhatsApp Image 2026-09-26 at 5.45.48 PM (1).jpeg"
    },


    // ================= FUNCTION =================

    {
        id: 25,
        name: "off white Function Lehenga",
        category: "function",
        price: 999,
        image: "WhatsApp Image 2026-09-14 at 1.37.36 PM.jpeg"
    },
    {
        id: 26,
        name: "white palll Outfit",
        category: "function",
        price: 1999,
        image: "WhatsApp Image 2026-09-14 at 1.37.37 PM.jpeg"
    },
    {
        id: 27,
        name: "Designer Function Dress",
        category: "function",
        price: 1000,
        image: "WhatsApp Image 2026-09-14 at 12.04.05 PM (1).jpeg"
    },
    {
        id: 28,
        name: "Purple Function Lehenga",
        category: "function",
        price: 1050,
        image: "WhatsApp Image 2026-09-14 at 1.37.39 PM (2).jpeg"
    },
    {
        id: 29,
        name: "Golden Function Outfit",
        category: "function",
        price: 1299,
        image: "WhatsApp Image 2026-09-14 at 4.30.42 PM.jpeg"
    },
    {
        id: 30,
        name: "Peach Function Dress",
        category: "function",
        price: 1199,
        image: "WhatsApp Image 2026-09-14 at 4.30.43 PM.jpeg"
    },
    {
        id: 31,
        name: "cherry red Function Wear",
        category: "function",
        price: 1299,
        image: "WhatsApp Image 2026-09-14 at 4.30.46 PM.jpeg"
    },
    {
        id: 32,
        name: "Embroidered Function Lehenga",
        category: "function",
        price: 1199,
        image: "WhatsApp Image 2026-09-14 at 1.37.40 PM.jpeg"
    },


    // ================= RECEPTION =================

    {
        id: 33,
        name: "Royal Reception Lehenga",
        category: "reception",
        price: 7999,
        image: "WhatsApp Image 2026-09-14 at 1.37.39 PM (1).jpeg"
    },
    {
        id: 34,
        name: "Richhh Reception Lehenga",
        category: "reception",
        price: 4999,
        image: "WhatsApp Image 2026-09-14 at 1.37.39 PM.jpeg"
    },
    {
        id: 35,
        name: "Golden Reception Outfit",
        category: "reception",
        price: 9999,
        image: "WhatsApp Image 2026-09-14 at 4.30.45 PM.jpeg"
    },
    {
        id: 36,
        name: "purpal Reception Dress",
        category: "reception",
        price: 8499,
        image: "WhatsApp Image 2026-09-14 at 4.30.46 PM (1).jpeg"
    },
    {
        id: 37,
        name: "pretyyyy Reception Lehenga",
        category: "reception",
        price: 8990,
        image: "WhatsApp Image 2026-09-14 at 11.42.46 AM (1).jpeg"
    },
    {
        id: 38,
        name: "wine Designer Lehenga",
        category: "reception",
        price: 8998,
        image: "WhatsApp Image 2026-09-14 at 11.42.43 AM (1).jpeg"
    },
    {
        id: 39,
        name: "Royal saree Reception Dress",
        category: "reception",
        price: 8499,
        image: "WhatsApp Image 2026-09-14 at 11.42.43 AM.jpeg"
    },
    {
        id: 40,
        name: "Reception Embroidery Lehenga",
        category: "reception",
        price: 2999,
        image: "WhatsApp Image 2026-09-14 at 4.30.47 PM.jpeg"
    },


    // ================= SISTERS =================

    {
        id: 41,
        name: "Sister Pink Lehenga",
        category: "sisters",
        price: 799,
        image: "WhatsApp Image 2026-09-14 at 1.37.42 PM (1).jpeg"
    },
    {
        id: 42,
        name: "royal shells Outfit",
        category: "sisters",
        price: 999,
        image: "WhatsApp Image 2026-09-14 at 4.30.12 PM.jpeg"
    },
    {
        id: 43,
        name: "Sister brown Lehenga",
        category: "sisters",
        price: 649,
        image: "WhatsApp Image 2026-09-14 at 4.30.47 PM (2).jpeg"
    },
    {
        id: 44,
        name: "Sister baby pinkyy Sharara",
        category: "sisters",
        price: 599,
        image : "WhatsApp Image 2026-09-22 at 7.20.39 PM.jpeg"
    },
    {
        id: 45,
        name: "Sister shellwhiteyy Outfit",
        category: "sisters",
        price: 1599,
        image: "WhatsApp Image 2026-09-14 at 11.42.46 AM.jpeg"
    },
    {
        id: 46,
        name: "Sister perott Dress",
        category: "sisters",
        price: 549,
        image: "WhatsApp Image 2026-09-14 at 12.03.55 PM (2).jpeg"
    },
    {
        id: 47,
        name: "Sister Designer Lehenga",
        category: "sisters",
        price: 699,
        image: "WhatsApp Image 2026-09-14 at 12.03.55 PM.jpeg"
    },
    {
        id: 48,
        name: "Sister Traditional Outfit",
        category: "sisters",
        price: 599,
        image: "WhatsApp Image 2026-09-14 at 4.30.47 PM (1).jpeg"
    }

];


/* ================= VARIABLES ================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

let orders =
    JSON.parse(localStorage.getItem("orders")) || [];

let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

let selectedDress = null;

let currentTotal = 0;


/* ================= DISPLAY DRESSES ================= */

function displayDresses(list = dresses) {

    const container =
        document.getElementById("dressContainer");

    container.innerHTML = "";

    list.forEach(dress => {

        const isWishlisted =
            wishlist.includes(dress.id);

        container.innerHTML += `

            <div class="dress-card">

                <img
                    src="${dress.image}"
                    alt="${dress.name}"
                >

                <h3>${dress.name}</h3>

                <p>
                    Category:
                    ${dress.category}
                </p>

                <p>
                    💰 ₹${dress.price} / day
                </p>

                <button
                    onclick="selectDress(${dress.id})"
                >
                    📅 Book This Outfit
                </button>

                <button
                    class="wishlist-button"
                    onclick="toggleWishlist(${dress.id})"
                >
                    ${isWishlisted ? "❤️ Remove Wishlist" : "🤍 Add Wishlist"}
                </button>

                <button
                    onclick="addToCart(${dress.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>
        `;
    });
}


/* ================= CATEGORY FILTER ================= */

function filterDresses(category) {

    if (category === "all") {

        displayDresses(dresses);

        return;
    }

    const filtered =
        dresses.filter(
            dress => dress.category === category
        );

    displayDresses(filtered);
}


/* ================= SELECT DRESS ================= */

function selectDress(id) {

    selectedDress =
        dresses.find(dress => dress.id === id);

    document.getElementById("dailyRent")
        .textContent = selectedDress.price;

    document.getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

    calculateRental();
}


/* ================= CART ================= */

function addToCart(id) {

    const dress =
        dresses.find(item => item.id === id);

    const already =
        cart.find(item => item.id === id);

    if (already) {

        alert("This outfit is already in your cart.");

        return;
    }

    cart.push(dress);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(
        dress.name +
        " added to cart 🛒"
    );
}


function updateCartCount() {

    document.getElementById("cartCount")
        .textContent = cart.length;
}


function openCart() {

    const modal =
        document.getElementById("cartModal");

    modal.style.display = "flex";

    displayCart();
}


function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";
}


function displayCart() {

    const container =
        document.getElementById("cartItems");

    container.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        container.innerHTML =
            "<p>Your cart is empty.</p>";

        document.getElementById("cartTotal")
            .textContent = "0";

        return;
    }

    cart.forEach(item => {

        total += item.price;

        container.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                    <br>
                    ₹${item.price}/day
                </span>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>

        `;
    });

    document.getElementById("cartTotal")
        .textContent = total;
}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    displayCart();
}


function goToBooking() {

    closeCart();

    document.getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ================= WISHLIST ================= */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

    } else {

        wishlist.push(id);
    }

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayDresses();

    displayWishlist();
}


function displayWishlist() {

    const container =
        document.getElementById("wishlistContainer");

    if (wishlist.length === 0) {

        container.innerHTML = `
            <p class="empty-message">
                Your wishlist is empty ❤️
            </p>
        `;

        return;
    }

    container.innerHTML = "";

    wishlist.forEach(id => {

        const dress =
            dresses.find(item => item.id === id);

        if (!dress) return;

        container.innerHTML += `

            <div class="wishlist-card">

                <img
                    src="${dress.image}"
                    alt="${dress.name}"
                >

                <h3>${dress.name}</h3>

                <p>
                    ₹${dress.price}/day
                </p>

                <button
                    onclick="selectDress(${dress.id})"
                >
                    Book Now
                </button>

                <button
                    onclick="toggleWishlist(${dress.id})"
                >
                    Remove ❤️
                </button>

            </div>
        `;
    });
}


/* ================= RENTAL CALCULATION ================= */

function calculateRental() {

    const rentDate =
        document.getElementById("rentDate").value;

    const returnDate =
        document.getElementById("returnDate").value;

    if (!rentDate || !returnDate) {

        return;
    }

    const start =
        new Date(rentDate);

    const end =
        new Date(returnDate);

    const difference =
        end - start;

    const days =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );

    if (days <= 0) {

        document.getElementById("rentalDays")
            .textContent = "0";

        document.getElementById("totalPrice")
            .textContent = "0";

        return;
    }

    let price = 0;

    if (selectedDress) {

        price = selectedDress.price;

    } else {

        price = 499;
    }

    const total =
        days * price;

    document.getElementById("rentalDays")
        .textContent = days;

    document.getElementById("dailyRent")
        .textContent = price;

    document.getElementById("totalPrice")
        .textContent = total;

    currentTotal = total;
}


/* ================= AVAILABILITY ================= */

function checkAvailability() {

    const rentDate =
        document.getElementById("rentDate").value;

    const returnDate =
        document.getElementById("returnDate").value;

    const message =
        document.getElementById(
            "availabilityMessage"
        );

    if (!rentDate || !returnDate) {

        message.textContent =
            "Please select both dates.";

        return;
    }

    const start =
        new Date(rentDate);

    const end =
        new Date(returnDate);

    if (end <= start) {

        message.textContent =
            "Return date must be after rental date.";

        return;
    }


    /* Check existing orders */

    let unavailable = false;

    orders.forEach(order => {

        if (
            order.dressId ===
            (selectedDress ? selectedDress.id : null)
        ) {

            const oldStart =
                new Date(order.rentDate);

            const oldEnd =
                new Date(order.returnDate);

            if (
                start < oldEnd &&
                end > oldStart
            ) {

                unavailable = true;
            }
        }
    });


    if (unavailable) {

        message.textContent =
            "❌ Outfit is not available for these dates.";

        message.style.color = "red";

    } else {

        message.textContent =
            "✅ Outfit is available for these dates!";

        message.style.color = "green";
    }
}


/* ================= SUBMIT ORDER ================= */

function submitOrder(event) {

    event.preventDefault();

    if (!selectedDress) {

        alert(
            "Please select an outfit first."
        );

        document.getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }


    calculateRental();

    if (currentTotal <= 0) {

        alert(
            "Please select valid rental and return dates."
        );

        return;
    }


    checkAvailability();


    setTimeout(() => {

        const message =
            document.getElementById(
                "availabilityMessage"
            );

        if (
            message.textContent.includes("not available")
        ) {

            return;
        }


        document.getElementById("paymentAmount")
            .textContent = currentTotal;

        document.getElementById("paymentModal")
            .style.display = "flex";

    }, 100);

}


/* ================= PAYMENT ================= */

function makePayment() {

    const method =
        document.getElementById("paymentMethod")
            .value;

    const details =
        document.getElementById("paymentDetails")
            .value;

    const message =
        document.getElementById("paymentMessage");


    if (method !== "cod" && details.trim() === "") {

        message.textContent =
            "Please enter payment details.";

        message.style.color = "red";

        return;
    }


    message.textContent =
        "Processing payment...";


    setTimeout(() => {

        const order = {

            id:
                "SOR" +
                Math.floor(
                    Math.random() * 100000
                ),

            name:
                document.getElementById(
                    "customerName"
                ).value,

            mobile:
                document.getElementById(
                    "mobile"
                ).value,

            address:
                document.getElementById(
                    "address"
                ).value,

            dressId:
                selectedDress.id,

            dressName:
                selectedDress.name,

            rentDate:
                document.getElementById(
                    "rentDate"
                ).value,

            returnDate:
                document.getElementById(
                    "returnDate"
                ).value,

            days:
                document.getElementById(
                    "rentalDays"
                ).textContent,

            total:
                currentTotal,

            status:
                "Confirmed"

        };


        orders.push(order);

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );


        message.textContent =
            "✅ Payment successful! Order confirmed.";

        message.style.color = "green";


        setTimeout(() => {

            closePayment();

            displayOrders();

            document.getElementById("orders")
                .scrollIntoView({
                    behavior: "smooth"
                });

            alert(
                "Order placed successfully!\n\n" +
                "Order ID: " +
                order.id
            );

        }, 1000);


    }, 1200);
}


function closePayment() {

    document.getElementById("paymentModal")
        .style.display = "none";
}


/* ================= ORDERS / TRACKING ================= */

function displayOrders() {

    const container =
        document.getElementById(
            "ordersContainer"
        );

    if (orders.length === 0) {

        container.innerHTML = `
            <p class="empty-message">
                No orders placed yet.
            </p>
        `;

        return;
    }

    container.innerHTML = "";

    orders.forEach(order => {

        container.innerHTML += `

            <div class="order-card">

                <h3>
                    👗 ${order.dressName}
                </h3>

                <p>
                    <strong>Order ID:</strong>
                    ${order.id}
                </p>

                <p>
                    📅 ${order.rentDate}
                    →
                    ${order.returnDate}
                </p>

                <p>
                    🕒 Rental Days:
                    ${order.days}
                </p>

                <p>
                    💰 Total:
                    ₹${order.total}
                </p>

                <div class="order-status">

                    <strong>
                        Order Tracking
                    </strong>

                    <div class="tracking">

                        <div class="track-step active">
                            ✅
                            <br>
                            Ordered
                        </div>

                        <div class="track-step active">
                            📦
                            <br>
                            Confirmed
                        </div>

                        <div class="track-step">
                            🚚
                            <br>
                            Delivered
                        </div>

                        <div class="track-step">
                            🔄
                            <br>
                            Returned
                        </div>

                    </div>

                </div>

            </div>
        `;
    });
}


/* ================= LOGIN ================= */

function openLogin() {

    document.getElementById("loginModal")
        .style.display = "flex";

    const savedUser =
        JSON.parse(
            localStorage.getItem("user")
        );

    if (savedUser) {

        document.getElementById("profileInfo")
            .innerHTML = `

                <hr>

                <h3>
                    👋 Hello ${savedUser.name}
                </h3>

                <p>
                    ${savedUser.email}
                </p>

                <button onclick="logoutUser()">
                    Logout
                </button>

            `;
    }
}


function closeLogin() {

    document.getElementById("loginModal")
        .style.display = "none";
}


function loginUser() {

    const name =
        document.getElementById("loginName")
            .value;

    const email =
        document.getElementById("loginEmail")
            .value;


    if (!name || !email) {

        alert(
            "Please enter your name and email."
        );

        return;
    }


    const user = {

        name: name,
        email: email

    };


    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );


    alert(
        "Login successful! 👋"
    );


    closeLogin();
}


function logoutUser() {

    localStorage.removeItem("user");

    alert(
        "Logged out successfully."
    );

    closeLogin();
}


/* ================= REVIEWS ================= */

function displayReviews() {

    const container =
        document.getElementById(
            "reviewsContainer"
        );

    if (reviews.length === 0) {

        container.innerHTML =
            "<p>No reviews yet.</p>";

        return;
    }

    container.innerHTML = "";

    reviews.forEach(review => {

        container.innerHTML += `

            <div class="review-card">

                <h3>
                    ${review.name}
                </h3>

                <p>
                    ${"⭐".repeat(
                        Number(review.rating)
                    )}
                </p>

                <p>
                    ${review.text}
                </p>

            </div>

        `;
    });
}


function addReview() {

    const name =
        document.getElementById(
            "reviewName"
        ).value;

    const rating =
        document.getElementById(
            "reviewRating"
        ).value;

    const text =
        document.getElementById(
            "reviewText"
        ).value;


    if (!name || !text) {

        alert(
            "Please enter your name and review."
        );

        return;
    }


    reviews.push({

        name: name,

        rating: rating,

        text: text

    });


    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );


    document.getElementById(
        "reviewName"
    ).value = "";

    document.getElementById(
        "reviewText"
    ).value = "";


    displayReviews();

    alert(
        "Thank you for your review! ⭐"
    );
}


/* ================= INITIAL LOAD ================= */

displayDresses();

displayWishlist();

displayOrders();

displayReviews();

updateCartCount();