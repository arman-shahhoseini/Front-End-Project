const drinks = {
    hot: [
        {
            name: "Classic Espresso",
            description: "A shot of pure, intense coffee flavor.",
            ingredients: ["Coffee Beans", "Hot Water"],
            price: 2.99,
            image: "https://i.ibb.co/x3k5DNt/92e145287ada0f722fbaef0beb6f7db9.jpg",
            backgroundImage: "https://i.ibb.co/HNJYDvq/ce4d71d1645a512db9fe56315ecac361.png"
        },
        {
            name: "Creamy Cappuccino",
            description: "A harmonious blend of espresso, steamed milk, and velvety foam. Our cappuccino is the perfect morning pick-me-up.",
            ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
            price: 3.99,
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            backgroundImage: "https://i.ibb.co/zngNS9P/7c48666478c4b629160c37c52db45ca2.jpg"
        },
        {
            name: "Rich Mocha",
            description: "Indulge in the perfect marriage of coffee and chocolate. Our mocha combines espresso with rich chocolate and steamed milk for a decadent treat.",
            ingredients: ["Espresso", "Chocolate", "Steamed Milk", "Whipped Cream"],
            price: 4.49,
            image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            backgroundImage: "https://i.ibb.co/zx8tQ6G/575bedfc0e89d86134527a0bf6451c2d.jpg"
        }
    ],
    cold: [
        {
            name: "Iced Latte",
            description: "Cool down with our refreshing iced latte. Smooth espresso mixed with cold milk over ice for a perfectly balanced cold coffee experience.",
            ingredients: ["Espresso", "Cold Milk", "Ice"],
            price: 3.99,
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            backgroundImage: "https://i.pinimg.com/564x/53/58/9f/53589fac5891b72d9d4faac451739e48.jpg"
        },
        {
            name: "Fruit Smoothie",
            description: "A refreshing blend of fresh fruits and ice. Choose from a variety of seasonal fruits for a healthy and delicious treat.",
            ingredients: ["Mixed Fruits", "Ice", "Yogurt"],
            price: 4.99,
            image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            backgroundImage: "https://i.ibb.co/SvPjH7f/4fcba49fb1b01012b24ab176001e61b7.jpg"
        },
        {
            name: "Iced Matcha Latte",
            description: "Experience the unique flavor of matcha in this cool and creamy drink. Our iced matcha latte is both refreshing and energizing.",
            ingredients: ["Matcha Green Tea", "Cold Milk", "Ice"],
            price: 4.49,
            image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            backgroundImage: "https://i.ibb.co/jZxdZLX/b8864103b9b94aae3116f2579adcefe5.jpg"
        }
    ]
};

let currentCategory = 'hot';
let currentDrink = drinks.hot[0];
let currentBackgroundImage = null;

function updateDrinkDetails(drink) {
    document.querySelector('.drink-name').textContent = drink.name;
    document.querySelector('.drink-description').textContent = drink.description;
    document.querySelector('.drink-image').src = drink.image;
    
    const ingredientsContainer = document.querySelector('.drink-ingredients');
    ingredientsContainer.innerHTML = '';
    drink.ingredients.forEach(ingredient => {
        const span = document.createElement('span');
        span.classList.add('ingredient');
        span.textContent = ingredient;
        ingredientsContainer.appendChild(span);
    });

    document.querySelector('.price-display').textContent = `$${drink.price.toFixed(2)}`;

    // Update background image
    const backgroundImages = document.querySelectorAll('.background-image');
    const activeImage = document.querySelector('.background-image.active');
    const inactiveImage = document.querySelector('.background-image:not(.active)');

    inactiveImage.style.backgroundImage = `url(${drink.backgroundImage})`;
    
    setTimeout(() => {
        activeImage.classList.remove('active');
        inactiveImage.classList.add('active');
    }, 50);
}

function createDrinkButtons(category) {
    const selectionContainer = document.querySelector('.drink-selection');
    selectionContainer.innerHTML = '';
    drinks[category].forEach((drink, index) => {
        const button = document.createElement('button');
        button.classList.add('drink-btn');
        button.innerHTML = `<img src="${drink.image}" alt="${drink.name}">`;
        button.addEventListener('click', () => selectDrink(index));
        selectionContainer.appendChild(button);
    });
}

function selectDrink(index) {
    currentDrink = drinks[currentCategory][index];
    gsap.to('.drink-info', {opacity: 0, x: 100, duration: 0.5, onComplete: () => {
        updateDrinkDetails(currentDrink);
        gsap.to('.drink-info', {opacity: 1, x: 0, duration: 0.5});
    }});
    gsap.to('.drink-image', {opacity: 0, scale: 0.8, rotation: -10, duration: 0.5, onComplete: () => {
        gsap.to('.drink-image', {opacity: 1, scale: 1, rotation: 0, duration: 0.7});
    }});
}

function addToCart(drink) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(drink);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

function initializeEventListeners() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.category-btn.active').classList.remove('active');
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            createDrinkButtons(currentCategory);
            selectDrink(0);
        });
    });

    document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        addToCart(currentDrink);
        gsap.from('.cart-count', {
            scale: 1.5,
            duration: 0.3,
            ease: 'bounce.out'
        });
    });
}

function initializePage() {
    createDrinkButtons(currentCategory);
    updateDrinkDetails(drinks[currentCategory][0]);
    updateCartCount();
    initializeEventListeners();
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);