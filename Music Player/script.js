// script.js

// تابع برای تولید اعداد تصادفی
function random(max) {
    return Math.random() * max;
  }
  
  // ایجاد ذرات پس زمینه با رنگ های تصادفی
  const backgroundElement = document.querySelector('.background');
  for (let i = 0; i < 200; i++) { // تعداد ذرات را افزایش دادم
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${random(100)}vw`;
    particle.style.top = `${random(100)}vh`;
    particle.style.width = `${random(10) + 2}px`;
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    backgroundElement.appendChild(particle);
  }
  
  // کنترل نوار پیشرفت با انیمیشن
  const progressBar = document.querySelector('.progress-bar');
  const progress = document.querySelector('.progress');
  
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    progress.style.width = `${percent * 100}%`;
    progress.style.transition = 'width 0.5s ease'; // انیمیشن برای تغییر طول نوار پیشرفت
  });
  
  // تغییر حالت روز/شب با انیمیشن
  const modeToggle = document.querySelector('.mode-toggle');
  const body = document.body;
  
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('night-mode');
    const icon = modeToggle.querySelector('img');
    icon.style.transition = 'transform 0.5s ease'; // انیمیشن برای چرخش آیکون
    icon.style.transform = icon.style.transform === 'rotate(360deg)' ? 'rotate(0deg)' : 'rotate(360deg)';
    icon.src = icon.src.includes('sun-icon.svg') ? 'moon-icon.svg' : 'sun-icon.svg';
  });
  
  // کنترل صدا با ویژوال
  const volumeSlider = document.querySelector('.volume-slider');
  const volumeVisual = document.querySelector('.volume-visual');
  
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value / 100;
    volumeVisual.style.height = `${volume * 100}%`; // ویژوال برای نمایش میزان صدا
    // کد برای تنظیم صدا در اینجا
  });


