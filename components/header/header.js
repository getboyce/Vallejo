/* Vallejo 1.1 — Header Component Behavior */

// --- Utility dropdowns ---
document.querySelectorAll('.utility-dropdown').forEach(dd => {
  const trigger = dd.querySelector('.utility-dropdown-trigger');
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
      dd.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  dd.querySelectorAll('.dropdown-option').forEach(opt => {
    opt.addEventListener('click', () => {
      dd.querySelectorAll('.dropdown-option').forEach(o => {
        o.classList.remove('active');
        o.setAttribute('aria-selected', 'false');
      });
      opt.classList.add('active');
      opt.setAttribute('aria-selected', 'true');

      const label = trigger.querySelector('span');
      if (label) label.textContent = opt.querySelector('span').textContent;

      dd.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });
});

// --- Nav dropdowns ---
document.querySelectorAll('[data-nav-dropdown]').forEach(dd => {
  const trigger = dd.querySelector('.header-nav-link, .member-nav-link, .header-avatar-btn');
  if (!trigger) return;
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    closeAllDropdowns();
    if (!isOpen) {
      dd.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

function closeAllDropdowns() {
  document.querySelectorAll('.utility-dropdown, .nav-dropdown').forEach(dd => {
    dd.classList.remove('open');
    const trigger = dd.querySelector('[aria-expanded]');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

document.addEventListener('click', closeAllDropdowns);

// --- Search clear button ---
const searchClear = document.querySelector('.header-search-clear');
const searchInput = document.querySelector('.header-search-input');
if (searchClear && searchInput) {
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
  });
}

// --- Sticky header scroll behavior ---
const headerPrimary = document.querySelector('.header-primary');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) return;
  if (window.scrollY > 20) {
    headerPrimary.classList.add('scrolled');
  } else {
    headerPrimary.classList.remove('scrolled');
  }
  lastScroll = window.scrollY;
}, { passive: true });

// --- Mobile drawer ---
const mobileToggle = document.querySelector('.header-mobile-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileClose = mobileDrawer.querySelector('.mobile-drawer-close');

function openMobileMenu() {
  mobileToggle.setAttribute('aria-expanded', 'true');
  mobileOverlay.classList.add('active');
  mobileDrawer.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Focus first focusable element in drawer
  setTimeout(() => mobileClose.focus(), 300);
}

function closeMobileMenu() {
  mobileToggle.setAttribute('aria-expanded', 'false');
  mobileOverlay.classList.remove('active');
  mobileDrawer.classList.remove('active');
  document.body.style.overflow = '';
  mobileToggle.focus();
}

mobileToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMobileMenu() : openMobileMenu();
});

mobileOverlay.addEventListener('click', closeMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
mobileDrawer.addEventListener('click', (e) => e.stopPropagation());

// Escape key closes drawer
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
    closeAllDropdowns();
  }
});

// --- Language chips ---
document.querySelectorAll('.lang-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.lang-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});
