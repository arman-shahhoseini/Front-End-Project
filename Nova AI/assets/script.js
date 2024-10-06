document.addEventListener('DOMContentLoaded', function() {
    const toolButton = document.querySelector('.hero-buttons .btn:first-child');
 
    toolButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('شما بر روی "دریافت این ابزار" کلیک کرده‌اید!');
    });
 });
 
 const createParticle = () => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 10 + 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
};

setInterval(createParticle, 500);



