function initializeHamburger() {
  const hamburgerEl = document.getElementById('mobile-menu-toggle');
  const menuEl = document.getElementById('mobile-menu');

  if (hamburgerEl) {
    hamburgerEl.addEventListener('click', (event) => {
      event.preventDefault();

      if (menuEl.style.display === 'none' ||
          menuEl.style.display === '') {
        menuEl.style.display = 'block';
      } else {
        menuEl.style.display = 'none';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => initializeHamburger());
