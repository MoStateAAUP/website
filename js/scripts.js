// Toggle the overlay menu
function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('active');
  }
  
  // Smooth scroll to section and close menu
  function navigateToSection(event, sectionId) {
    event.preventDefault();
    const targetSection = document.querySelector(sectionId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    toggleMenu(); // Close menu after navigation
  }
  

  const floatingLettersContainer = document.querySelector('.floating-letters');
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()[]{}=+<>,.?/~|";
  const numLetters = 80;
  let mouseX = window.innerWidth / 2; // Initial mouse position in the center
  let mouseY = window.innerHeight / 2;
  
  // Track mouse position
  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
  
  // Generate random floating letters with varied styles and rotations
  function createFloatingLetters() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
  
    for (let i = 0; i < numLetters; i++) {
      const letterElement = document.createElement('span');
      letterElement.textContent = letters[Math.floor(Math.random() * letters.length)];
  
      // Random position within the landing area
      letterElement.style.left = `${Math.random() * containerWidth}px`;
      letterElement.style.top = `${Math.random() * containerHeight}px`;
  
      // Assign random typography styles for varied sizes and weights
      const randomStyle = Math.floor(Math.random() * 9);
      switch (randomStyle) {
        case 0:
          letterElement.classList.add('font-style-bold-small');
          break;
        case 1:
          letterElement.classList.add('font-style-bold-medium');
          break;
        case 2:
          letterElement.classList.add('font-style-bold-large');
          break;
        case 3:
          letterElement.classList.add('font-style-bold-xlarge');
          break;
        case 4:
          letterElement.classList.add('font-style-light-tiny');
          break;
        case 5:
          letterElement.classList.add('font-style-light-small');
          break;
        case 6:
          letterElement.classList.add('font-style-light-medium');
          break;
        case 7:
          letterElement.classList.add('font-style-light-large');
          break;
        case 8:
          letterElement.classList.add('font-style-light-xlarge');
          break;
      }
  
      // Randomly apply maroon color
      if (Math.random() < 0.3) {
        letterElement.classList.add('maroon');
      }
  
      // Random rotation for visual interest
      const randomRotation = Math.floor(Math.random() * 4);
      if (randomRotation === 0) letterElement.classList.add('rotate-5');
      if (randomRotation === 1) letterElement.classList.add('rotate-10');
      if (randomRotation === 2) letterElement.classList.add('rotate--5');
      if (randomRotation === 3) letterElement.classList.add('rotate--10');
  
      // Set random initial movement direction
      letterElement.dataset.dx = Math.random() * 2 - 1;
      letterElement.dataset.dy = Math.random() * 2 - 1;
  
      floatingLettersContainer.appendChild(letterElement);
    }
  }
  
  // Animate floating letters with flocking effect
  function animateFloatingLetters() {
    const letters = document.querySelectorAll('.floating-letters span');
  
    letters.forEach(letter => {
      let x = parseFloat(letter.style.left);
      let y = parseFloat(letter.style.top);
      let dx = parseFloat(letter.dataset.dx);
      let dy = parseFloat(letter.dataset.dy);
  
      // Calculate distance to the mouse
      const distanceX = mouseX - x;
      const distanceY = mouseY - y;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
      // Flocking effect: apply mild attraction towards the mouse if within a certain distance
      const attractionStrength = 0.05; // Controls the strength of attraction
      if (distance < 150) { // Only apply attraction if within 150px
        dx += distanceX * attractionStrength / distance;
        dy += distanceY * attractionStrength / distance;
      }
  
      // Update position with applied attraction
      x += dx;
      y += dy;
  
      // Bounce off edges
      if (x < 0 || x > window.innerWidth - letter.offsetWidth) {
        dx *= -1;
        letter.dataset.dx = dx;
      }
      if (y < 0 || y > window.innerHeight - letter.offsetHeight) {
        dy *= -1;
        letter.dataset.dy = dy;
      }
  
      // Update style with new position
      letter.style.left = `${x}px`;
      letter.style.top = `${y}px`;
  
      // Store updated movement direction
      letter.dataset.dx = dx;
      letter.dataset.dy = dy;
    });
  
    requestAnimationFrame(animateFloatingLetters);
  }
  
  // Initialize floating letters on page load
  document.addEventListener("DOMContentLoaded", () => {
    createFloatingLetters();
    animateFloatingLetters();
  });


window.addEventListener('mousemove', handleMouseMove);

// Toggle the overlay menu
function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('active');
  }
  
  // Close menu if clicking outside the links
  function closeMenu(event) {
    const menuNav = document.querySelector('.menu-nav');
    
    // Check if the click is outside the menu-nav container
    if (!menuNav.contains(event.target)) {
      toggleMenu();
    }
  }
  
  // Smooth scroll function for navigating to sections
  function navigateToSection(event, sectionId) {
    event.preventDefault();
    const targetSection = document.querySelector(sectionId);
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    toggleMenu(); // Close menu after navigation
  }
  