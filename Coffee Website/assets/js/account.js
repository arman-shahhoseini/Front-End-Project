document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form submission handlers
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const profileForm = document.getElementById('profile-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add login logic here
        console.log('Login form submitted');
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add registration logic here
        console.log('Register form submitted');
    });

    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add profile update logic here
        console.log('Profile form submitted');
    });

    // Payment method functionality
    const addPaymentBtn = document.getElementById('add-payment-btn');
    const paymentMethods = document.querySelector('.payment-methods');

    addPaymentBtn.addEventListener('click', function() {
        // Add logic to open a modal or form for adding a new payment method
        console.log('Add new payment method clicked');
    });

    paymentMethods.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            // Add logic to remove the payment method
            const paymentMethod = e.target.closest('.payment-method');
            paymentMethod.remove();
            console.log('Payment method removed');
        }
    });

    // Forgot password functionality
    const forgotPasswordLink = document.querySelector('.forgot-password');

    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();

        console.log('Forgot password clicked');
    });


    const orderList = document.querySelector('.order-list');


    function addNewOrder(orderData) {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <div class="order-header">
                <span>Order #${orderData.id}</span>
                <span>Date: ${orderData.date}</span>
                <span>Total: $${orderData.total}</span>
            </div>
            <div class="order-details">
                ${orderData.items.map(item => `<p>${item}</p>`).join('')}
            </div>
        `;
        orderList.appendChild(orderItem);
    }

});