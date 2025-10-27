document.addEventListener("DOMContentLoaded", function() {

  // ================= TYPING ANIMATION =================
  const welcomeText = "Welcome to AndyForty Global Software Solutions";
  const subtitleText = "Innovative IT solutions tailored for schools, businesses, and communities.";
  const welcomeElement = document.getElementById("welcome-text");
  const subtitleElement = document.getElementById("subtitle-text");

  function typeLetters(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = "";
    const interval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

  typeLetters(welcomeElement, welcomeText, 100, () => {
    typeLetters(subtitleElement, subtitleText, 50);
  });

  // ================= SCROLL TO TOP BUTTON =================
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ================= PROGRESSIVE FADE-IN =================
  const progressiveElements = document.querySelectorAll('.progressive, .team-member, .about-services ul li, .contact-btn, .product-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  progressiveElements.forEach(el => observer.observe(el));

  // ================= SMOOTH ANCHOR SCROLL =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior:'smooth' });
    });
  });

  // ================= ABOUT PARTICLES MOVEMENT =================
  const particles = document.querySelectorAll('.about-particles span');
  document.addEventListener('mousemove', e => {
    particles.forEach((span, index) => {
      const speed = (index + 1) * 0.03;
      span.style.transform = 'translate(${e.clientX * speed}px, ${e.clientY * speed}px);'
    });
  });

  // ================= CONTACT LINKS FADE-IN =================
  const contactLinks = document.querySelector(".contact-links");
  function checkContactScroll() {
    const sectionPos = contactLinks.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (sectionPos < screenPos) contactLinks.classList.add("active");
  }
  window.addEventListener("scroll", checkContactScroll);
  checkContactScroll(); // initial check

  // ================= SERVICE ITEM VIBRATION =================
  document.querySelectorAll('.about-services ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
      if(navigator.vibrate) navigator.vibrate(10);
    });
  });

  // ================= NAVBAR =================
  const nav = document.querySelector("nav");
  const navUl = document.querySelector("ul.nav-links");
  const hamburger = document.getElementById('hamburger');

  // Initial animation for desktop
  if(navUl && window.innerWidth > 768){
    setTimeout(() => navUl.classList.add("active"), 100);
  }

  // Scroll effect
  if(nav){
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Hamburger toggle for mobile
  if(hamburger){
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

});