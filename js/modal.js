// Burger Menu functionality
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menu-icon-close');

// Modal/Popup functionality
const modalOpenBtn = document.querySelector('.btn.btn-primary');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.icon-close');
const contactForm = document.querySelector('.contact-form');

// Function to open burger menu
function openMenu() {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// Function to close burger menu
function closeMenu() {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Function to open modal
function openModal() {
  modalOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
  modalOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Burger menu event listeners
if (burgerBtn) {
  burgerBtn.addEventListener('click', openMenu);
}

if (menuCloseBtn) {
  menuCloseBtn.addEventListener('click', closeMenu);
}

// Modal event listeners
if (modalOpenBtn) {
  modalOpenBtn.addEventListener('click', openModal);
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

// Close modal when clicking on overlay (but not on modal itself)
if (modalOverlay) {
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

// Close menu/modal on ESC key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (menu && menu.classList.contains('is-open')) {
      closeMenu();
    }
    if (modalOverlay && modalOverlay.classList.contains('is-open')) {
      closeModal();
    }
  }
});

// Handle form submission
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you can add form validation and submission logic
    // For now, just close the modal after a short delay
    setTimeout(() => {
      closeModal();
      contactForm.reset();
    }, 100);
  });
}

