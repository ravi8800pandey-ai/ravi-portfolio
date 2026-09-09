/* ============================================================
   RAVI PANDEY — Portfolio · script.js
   ============================================================ */

/* ── Loader ──────────────────────────────────────────────── */
const loader = document.querySelector('.loader');
if (loader) {
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('done'), 400);
  });
}

/* ── Scroll-reveal (IntersectionObserver) ───────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
  revealObserver.observe(el);
});

/* ── Sticky nav — add scrolled class ────────────────────── */
const header = document.getElementById('site-header');
if (header) {
  const scrollHandler = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
}

/* ── Mobile nav toggle ──────────────────────────────────── */
const toggle    = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    mobileNav.classList.toggle('open', isOpen);
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

/* ── Active nav link on scroll ──────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');

if (sections.length && navLinks.length) {
  const activeLinkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove('active'));
          const activeLink = document.querySelector(
            `.desktop-nav a[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((section) => activeLinkObserver.observe(section));
}
