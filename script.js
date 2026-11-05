const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
function closeMenu() { mobileMenu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); menuButton.textContent = '☰'; }
menuButton.addEventListener('click', () => { const isOpen = menuButton.getAttribute('aria-expanded') === 'true'; mobileMenu.hidden = isOpen; menuButton.setAttribute('aria-expanded', String(!isOpen)); menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu'); menuButton.textContent = isOpen ? '☰' : '×'; });
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
