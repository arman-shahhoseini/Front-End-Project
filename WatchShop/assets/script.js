// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference or use system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Navigation highlighting
function setActiveNavItem() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;

    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', setActiveNavItem);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuToggle && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
});

// Watch slider functionality
const watches = [
    { brand: "R o l e x", image: "assets/images/Homepage/watch1.png" },
    { brand: "Patek Philippe", image: "assets/images/Homepage/watch2.png" },
    { brand: "H u b l o t", image: "assets/images/Homepage/watch3.png" }
];
let currentWatch = 0;

function changeWatch(direction) {
    currentWatch = (currentWatch + direction + watches.length) % watches.length;
    document.getElementById('brandName').textContent = watches[currentWatch].brand;
    document.getElementById('watchImage').src = watches[currentWatch].image;
}

// Initialize the first watch
changeWatch(0);

// Add event listeners for watch navigation buttons
document.querySelector('button[onclick="changeWatch(-1)"]').addEventListener('click', () => changeWatch(-1));
document.querySelector('button[onclick="changeWatch(1)"]').addEventListener('click', () => changeWatch(1));