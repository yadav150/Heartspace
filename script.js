// Smooth scroll for all anchor links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple alert for "Write your story" (temporary)
const writeBtns = document.querySelectorAll('.btn-primary');

writeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Login system coming soon 🚀");
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});
