// Average Joe's Wife Home Services - JS
// Smooth scroll and minor UX polish (no frameworks)

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  enhanceInPageLinks();
});

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight + 12 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', href);
    });
  });
}

function enhanceInPageLinks() {
  // Add focus ring target for accessibility after smooth scroll
  const ids = Array.from(document.querySelectorAll('[id]'));
  ids.forEach(el => {
    el.setAttribute('tabindex', '-1');
  });
}
