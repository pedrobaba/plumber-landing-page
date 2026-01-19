// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Simple animation for the hamburger (optional)
      menuToggle.classList.toggle('is-active');
  });

  // 2. Navbar Scroll Effect
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // 3. Contact Form Validation & Submission
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop page refresh

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Simple Validation Logic
      if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields.');
          return;
      }

      // Simulate an API Call / Form Submission
      const submitBtn = contactForm.querySelector('button');
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
          // Success State
          contactForm.innerHTML = `
              <div style="text-align: center; padding: 40px 0;">
                  <i class="fas fa-check-circle" style="font-size: 3rem; color: #ff9f1c; margin-bottom: 20px;"></i>
                  <h3>Thank you, ${name}!</h3>
                  <p>Your message has been sent. Our team will contact you shortly.</p>
              </div>
          `;
      }, 2000); // 2-second delay to simulate "work"
  });
});

// 4. Image Slider Logic
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = slides[0].clientWidth; // Get the width of one slide

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) {
        counter = -1; // Reset to start
    }
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = slides.length; // Go to end
    }
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    nextBtn.click();
}, 5000);