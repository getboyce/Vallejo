/**
 * Mobile Shelf Component
 * 
 * A mobile-optimized side panel component.
 * 
 * Usage:
 *   <div class="vds-mobile-shelf" data-vds-component="mobile-shelf" data-side="right">
 *     <div class="vds-mobile-shelf__header">Header</div>
 *     <div class="vds-mobile-shelf__body">Content</div>
 *   </div>
 */

export class MobileShelf {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      side: element.dataset.side || options.side || 'right',
      open: element.dataset.open === 'true' || options.open || false,
      overlay: element.dataset.overlay !== 'false' && options.overlay !== false,
      ...options,
    };
    
    this.overlay = null;
    this.isOpen = this.options.open;
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.createOverlay();
    this.setupEventListeners();
    
    if (this.isOpen) {
      this.open();
    }
  }
  
  setupClasses() {
    this.element.classList.add('vds-mobile-shelf');
    this.element.classList.add(`vds-mobile-shelf--${this.options.side}`);
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'dialog');
    this.element.setAttribute('aria-modal', 'true');
    this.element.setAttribute('aria-hidden', this.isOpen ? 'false' : 'true');
  }
  
  createOverlay() {
    if (!this.options.overlay) return;
    
    this.overlay = document.createElement('div');
    this.overlay.className = 'vds-mobile-shelf__overlay';
    this.overlay.setAttribute('aria-hidden', 'true');
    this.overlay.addEventListener('click', () => this.close());
    document.body.appendChild(this.overlay);
  }
  
  setupEventListeners() {
    const closeBtn = this.element.querySelector('.vds-mobile-shelf__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    
    // Swipe to close on mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.element.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    this.element.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (this.options.side === 'right' && diff < -swipeThreshold) {
      this.close();
    } else if (this.options.side === 'left' && diff > swipeThreshold) {
      this.close();
    }
  }
  
  open() {
    this.isOpen = true;
    this.element.classList.add('vds-mobile-shelf--open');
    this.element.setAttribute('aria-hidden', 'false');
    
    if (this.overlay) {
      this.overlay.classList.add('vds-mobile-shelf__overlay--visible');
      this.overlay.setAttribute('aria-hidden', 'false');
    }
    
    document.body.style.overflow = 'hidden';
    
    this.element.dispatchEvent(new CustomEvent('mobile-shelf:open', {
      bubbles: true,
    }));
  }
  
  close() {
    this.isOpen = false;
    this.element.classList.remove('vds-mobile-shelf--open');
    this.element.setAttribute('aria-hidden', 'true');
    
    if (this.overlay) {
      this.overlay.classList.remove('vds-mobile-shelf__overlay--visible');
      this.overlay.setAttribute('aria-hidden', 'true');
    }
    
    document.body.style.overflow = '';
    
    this.element.dispatchEvent(new CustomEvent('mobile-shelf:close', {
      bubbles: true,
    }));
  }
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  destroy() {
    if (this.overlay) {
      this.overlay.remove();
    }
    document.body.style.overflow = '';
  }
  
  static init(selector = '[data-vds-component="mobile-shelf"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new MobileShelf(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MobileShelf.init());
  } else {
    MobileShelf.init();
  }
}

export default MobileShelf;
