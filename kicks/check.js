const products = [{
        id: 1,
        title: "Jordan x Dior-Air Jordan 1 Highs",
        category: "Sneakers",
        price: 27000,
        img: "./images/1.jpg",
    },
    {
        id: 2,
        title: "Air Jodan 1 Retro High OG Chicago",
        category: "Sneakers",
        price: 13500,
        img: "./images/2.jpg",
    },
    {
        id: 3,
        title: "Asics Gel-Quantum Infinity Silanamine",
        category: "Sneakers",
        price: 10000,
        img: "./images/3.jpg",
       
    },
    {
        id: 4,
        title: "Adidas forum 84 low blue",
        category: "Sneakers",
        price: 7000,
        img: "./images/4.webp",
    
    },
    {
        id: 5,
        title: "Balenciaga triple S Sneakers",
        category: "Sneakers",
        price: 11000,
        img: "./images/5.jpg",
    },
    {
        id: 6,
        title: "Balenciaga Speed LT Sneakers",
        category: "Sneakers",
        price: 15900,
        img: "./images/6.jpg",
    },
    {
        id: 7,
        title: "Air Jordan 1 University Blue",
        category: "Sneakers",
        price: 13500,
        img: "./images/7.jpg",
    },
    {
        id: 8,
        title: "Air Jordan  1 dark mocha",
        category: "Sneakers",
        price: 15000,
        img: "./images/8.jpg",
    },
    {
        id: 9,
        title: "Air jordan 4 retro red thunder",
        category: "Sneakers",
        price: 14000,
        img: "./images/9.webp",
    },
    {
        id: 10,
        title: "Yeezy Slides",
        category: "Comfy Wear",
        price: 15000,
        img: "./images/10.webp",
    },
    {
        id: 11,
        title: "Adidas Slides",
        category: "Comfy Wear",
        price: 3000,
        img: "./images/11.jpg",
        
    },
    {
        id: 12,
        title: "Yeezy Foam RNNR",
        category: "Comfy Wear",
        price: 12000,
        img: "./images/12.webp",
    },
    {
        id: 13,
        title: "Versace Medusa dimension sliders",
        category: "Comfy Wear",
        price: 14000,
        img: "./images/13.jpg",
    },
    {
        id: 14,
        title: "Asics gel Kinsei Blast",
        category: "Running",
        price: 8000,
        img: "./images/14.webp",
    },
    {
        id: 15,
        title: "Nike Air zoom alphafly",
        category: "Running",
        price: 21000,
        img: "./images/15.webp",
    },
    {
        id: 16,
        title: "Nike zoomx vaporfly",
        category: "Running",
        price: 15000,
        img: "./images/16.jpg",
    },
    {
        id: 17,
        title: "Reebox zigzag",
        category: "Running",
        price: 3000,
        img: "./images/17.jpg",
    },
    {
        id: 18,
        title: "Nike Zoom MMW 4",
        category: "Running",
        price: 20000,
        img: "./images/18.webp",
    },
   
];

const sectionCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll('.filter-btn');

const cartItemContainer = document.querySelector(".cart-items");

window.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
});


filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const productCategory = products.filter(function (Item) {
            if (Item.category == category)
                return Item;
        });
        if (category == "All")
            displayProducts(products);
        else
            displayProducts(productCategory);
    });
});





function displayProducts(Items) {
    let displayProducts = Items.map(function (item) {
        return `<article class="product">
        <div class="about-item">
            <img src="${item.img}" class="photo" alt="${item.title}">

                    <h2 class="title">${item.title}</h2>
                    <h2 class="price">Rs. ${item.price}</h2>
        </div>
                
                
           
            <button class="add-cart" onclick="addToCart(${item.id})">Add to cart</button>
            </article>`;
    });
    displayProducts = displayProducts.join("");
    sectionCenter.innerHTML = displayProducts;
}


let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {

    alert("Item added");
    if (cart.some((item) => item.id === id)) {
        quantityChanged("add", id);
    } else {
        const item = products.find((products) => products.id === id);
        cart.push({
            ...item,
            quantity: 1,
        });
        updateCart();
    }

}

function updateCart() {

    totalChanged();

    localStorage.setItem("CART", JSON.stringify(cart));
}


function quantityChanged(task, id) {
    cart = cart.map((item) => {
        q = item.quantity;
        if (item.id === id) {

            if (task === "add")
                item.quantity = item.quantity + 1;
            else if (task == "sub" && item.quantity > 1)
                item.quantity = item.quantity - 1;
        }
        return item;

    });
    updateCart();
}

function totalChanged() {
    let total = 0;

    cart.forEach( (item) => {
        total += item.price * item.quantity;
    })
    

}

function removeCartItem(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}