// ===========================
// GIST — Main JS
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile nav toggle ──
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      nav.classList.toggle('nav-open');
    });
  }

  // ── Scroll: add shadow to nav ──
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 20px rgba(37,99,235,.10)';
    } else {
      nav.style.boxShadow = '0 1px 0 var(--blue-50)';
    }
  }, { passive: true });

  // ── Intersection Observer: fade in sections ──
  const fadeEls = document.querySelectorAll('.feat-card, .step, .blog-card, .pricing-card, .feature-item, .team-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity .5s ${i * 0.07}s ease, transform .5s ${i * 0.07}s ease`;
      observer.observe(el);
    });
  }

  // ── Active nav link ──
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath || link.getAttribute('href').includes(currentPath)) {
      link.style.color = 'var(--blue-600)';
    }
  });
});
