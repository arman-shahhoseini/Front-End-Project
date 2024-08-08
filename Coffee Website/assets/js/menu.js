const menuItems = {
    hot: [
        {
            name: "Classic Espresso",
            description: "A shot of pure, intense coffee flavor. Our espresso is crafted with precision for the perfect balance of bitterness and sweetness.",
            price: 2.99,
            image: "https://i.ibb.co/x3k5DNt/92e145287ada0f722fbaef0beb6f7db9.jpg",
        },
        {
            name: "Creamy Cappuccino",
            description: "A harmonious blend of espresso, steamed milk, and velvety foam. Our cappuccino is the perfect morning pick-me-up.",
            price: 3.99,
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Rich Mocha",
            description: "Indulge in the perfect marriage of coffee and chocolate. Our mocha combines espresso with rich chocolate and steamed milk for a decadent treat.",
            price: 4.49,
            image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Caramel Macchiato",
            description: "Espresso mixed with vanilla-flavored syrup, milk and caramel sauce over ice, topped with sweetened whipped cream caramel sauce.",
            price: 4.79,
            image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Chai Tea Latte",
            description: "Black tea infused with cinnamon, clove and other warming spices is combined with steamed milk and topped with foam for the perfect balance of sweet and spicy.",
            price: 3.99,
            image: "https://i.ibb.co/WBp0YkH/40f57aedca256e4766748ca833b043cf.jpg",
        },
    ],
    cold: [
        {
            name: "Iced Latte",
            description: "Cool down with our refreshing iced latte. Smooth espresso mixed with cold milk over ice for a perfectly balanced cold coffee experience.",
            price: 3.99,
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Fruit Smoothie",
            description: "A refreshing blend of fresh fruits and ice. Choose from a variety of seasonal fruits for a healthy and delicious treat.",
            price: 4.99,
            image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Iced Matcha Latte",
            description: "Experience the unique flavor of matcha in this cool and creamy drink. Our iced matcha latte is both refreshing and energizing.",
            price: 4.49,
            image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Cold Brew",
            description: "Our cold brew is made with a unique blend of beans, steeped for 20 hours to produce a smooth, rich flavor that's never bitter.",
            price: 3.79,
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Iced Americano",
            description: "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result is this wonderfully rich cup with depth and nuance.",
            price: 3.29,
            image: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ],
    food: [
        {
            name: "Avocado Toast",
            description: "Fresh avocado spread on toasted whole grain bread, topped with a sprinkle of sea salt and chili flakes.",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Chicken Sandwich",
            description: "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, croutons, and parmesan cheese, tossed in Caesar dressing.",
            price: 6.99,
            image: "https://i.pinimg.com/564x/21/b7/90/21b790f325afe3e574ccf65783f1bf09.jpg",
        },
        {
            name: "Veggie Wrap",
            description: "A colorful mix of fresh vegetables and hummus wrapped in a whole wheat tortilla.",
            price: 6.49,
            image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Quiche Lorraine",
            description: "A classic French tart filled with savory custard, cheese, and bacon.",
            price: 8.99,
            image: "https://i.pinimg.com/564x/8f/de/a2/8fdea247e965e45853177c017c701a25.jpg",
        },
    ],
    desserts: [
        {
            name: "Chocolate Cake",
            description: "Rich and moist chocolate cake topped with creamy chocolate frosting.",
            price: 4.99,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Cheesecake",
            description: "Creamy cheesecake with a graham cracker crust, topped with fresh strawberries.",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Tiramisu",
            description: "An Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese.",
            price: 6.49,
            image: "https://i.pinimg.com/564x/02/61/92/0261924a0a68e2e4b176ca381766ad55.jpg",
        },
        {
            name: "Fruit Tart",
            description: "A buttery pastry crust filled with vanilla custard and topped with an assortment of fresh fruits.",
            price: 5.49,
            image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Creme Brulee",
            description: "A rich custard base topped with a layer of hardened caramelized sugar.",
            price: 5.99,
            image: "https://i.pinimg.com/564x/06/d0/45/06d04579b826984e70a039dab690b02c.jpg",
        },
    ],
    specials: [
        {
            name: "Seasonal Latte",
            description: "Our barista's special creation, changes with the seasons. Ask about today's flavor!",
            price: 4.99,
            image: "https://i.pinimg.com/564x/97/3c/a9/973ca9e4269374f3d64649b733fbd904.jpg",
        },
        {
            name: "Breakfast Combo",
            description: "Your choice of coffee with a freshly baked croissant and a side of fruit.",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Afternoon Tea Set",
            description: "A selection of finger sandwiches, scones, and pastries served with your choice of tea.",
            price: 15.99,
            image: "https://i.pinimg.com/564x/8b/fc/26/8bfc26658bccdb7252e020bdea7f77e8.jpg",
        },
        {
            name: "Vegan Delight Platter",
            description: "A variety of our best vegan options including a smoothie, avocado toast, and a vegan pastry.",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ]
};

let currentCategory = 'hot';

function updateMenuItems(category) {
    const menuItemsContainer = document.querySelector('.menu-items');
    menuItemsContainer.innerHTML = '';
    menuItems[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-details">
                <h2 class="menu-item-name">${item.name}</h2>
                <p class="menu-item-description">${item.description}</p>
                <p class="menu-item-price">$${item.price.toFixed(2)}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });

    // Add animation
    gsap.from('.menu-item', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
    });
}

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.category-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        updateMenuItems(currentCategory);
    });
});

document.querySelector('.menu-items').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const itemElement = e.target.closest('.menu-item');
        const itemName = itemElement.querySelector('.menu-item-name').textContent;
        const item = menuItems[currentCategory].find(i => i.name === itemName);
        addToCart(item);

        // Add to cart animation
        gsap.to(e.target, {
            scale: 1.2,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                gsap.to('.cart-count', {
                    scale: 1.5,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    }
});

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    updateMenuItems(currentCategory);
    updateCartCount();
});