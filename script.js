// Header Animation
document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.animate-header');
    headerText.style.opacity = 0;
    headerText.style.transform = 'translateY(20px)';
    setTimeout(() => {
      headerText.style.transition = 'opacity 1s ease, transform 1s ease';
      headerText.style.opacity = 1;
      headerText.style.transform = 'translateY(0)';
    }, 300);
  });
  
  // Typing Animation
  const tagline = document.getElementById('tagline');
  const texts = ["App Developer", "Flutter Enthusiast", "Problem Solver", "Competitive Programmer"];
  let index = 0;
  let charIndex = 0;
  let currentText = '';
  let isDeleting = false;
  
  function type() {
    if (index >= texts.length) index = 0;
    currentText = texts[index];
    
    tagline.textContent = isDeleting 
      ? currentText.substring(0, charIndex--) 
      : currentText.substring(0, charIndex++);
  
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index++;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  
  document.addEventListener('DOMContentLoaded', type);
  
  // Fade In Sections
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });