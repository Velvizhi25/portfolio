/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor with lag on ring
function animateCursor() {
  // Dot follows mouse instantly
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';

  // Ring follows with easing
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
const hoverTargets = document.querySelectorAll(
  'a, button, .skill-card, .project-card, .cert-card'
);

hoverTargets.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorRing.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorRing.classList.remove('hover');
  });
});

/* =============================================
   SCROLL REVEAL ANIMATIONS
   ============================================= */
const appearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.appear').forEach((el) => {
  appearObserver.observe(el);
});

/* =============================================
   NAVBAR SCROLL EFFECT
   ============================================= */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 10, 15, 0.95)';
  } else {
    nav.style.background = 'rgba(10, 10, 15, 0.8)';
  }
});

/* =============================================
   STAGGERED GRID ANIMATIONS
   ============================================= */
// Add staggered transition delays to skill & cert cards
const staggeredCards = document.querySelectorAll(
  '.skills-grid .skill-card, .certs-grid .cert-card'
);

staggeredCards.forEach((el, index) => {
  el.style.transitionDelay = (index * 0.08) + 's';
});
