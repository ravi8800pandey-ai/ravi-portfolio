const loader = document.querySelector('.loader');
window.addEventListener('load', () => setTimeout(() => loader.classList.add('done'), 950));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
toggle.addEventListener('click', () => {
  const open = toggle.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  mobileNav.classList.toggle('open', open);
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle.classList.remove('open'); mobileNav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--y', `${event.clientY}px`);
});
