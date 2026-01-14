/**
 * Modal Component
 * 
 * A modal dialog component for displaying content in an overlay.
 * 
 * Usage:
 *   <div class="vds-modal" data-vds-component="modal" id="myModal">
 *     <div class="vds-modal__overlay"></div>
 *     <div class="vds-modal__content">
 *       <div class="vds-modal__header">Title</div>
 *       <div class="vds-modal__body">Content</div>
 *       <div class="vds-modal__footer">Footer</div>
 *     </div>
 *   </div>
 */

export class Modal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      closeOnOverlayClick: element.dataset.closeOnOverlayClick !== 'false',
      closeOnEscape: true,
      ...options,
    };
    
    this.overlay = null;
    this.content = null;
    this.closeButton = null;
    
    this.init();
  }
  
  init() {
    this.setupStructure();
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
  }
  
  setupStructure() {
    // Ensure overlay exists
    this.overlay = this.element.querySelector('.vds-modal__overlay');
    if (!this.overlay) {
      this.overlay = document.createElement('div');
      this.overlay.className = 'vds-modal__overlay';
      this.element.insertBefore(this.overlay, this.element.firstChild);
    }
    
    // Ensure content exists
    this.content = this.element.querySelector('.vds-modal__content');
    if (!this.content) {
      this.content = document.createElement('div');
      this.content.className = 'vds-modal__content';
      this.element.appendChild(this.content);
    }
  }
  
  setupClasses() {
    this.element.classList.add('vds-modal');
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'dialog');
    this.element.setAttribute('aria-modal', 'true');
    this.element.setAttribute('aria-hidden', 'true');
    this.element.setAttribute('tabindex', '-1');
  }
  
  setupEventListeners() {
    // Overlay click
    if (this.options.closeOnOverlayClick) {
      this.overlay.addEventListener('click', () => this.close());
    }
    
    // Escape key
    if (this.options.closeOnEscape) {
      this.element.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen()) {
          this.close();
        }
      });
    }
    
    // Close button
    this.closeButton = this.element.querySelector('.vds-modal__close');
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }
    
    // Prevent content clicks from closing
    this.content.addEventListener('click', (e) => e.stopPropagation());
  }
  
  open() {
    this.element.classList.add('vds-modal--open');
    this.element.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    const focusable = this.content.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) {
      focusable[0].focus();
    }
    
    this.element.dispatchEvent(new CustomEvent('modal:open', { bubbles: true }));
  }
  
  close() {
    this.element.classList.remove('vds-modal--open');
    this.element.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    this.element.dispatchEvent(new CustomEvent('modal:close', { bubbles: true }));
  }
  
  isOpen() {
    return this.element.classList.contains('vds-modal--open');
  }
  
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  
  static init(selector = '[data-vds-component="modal"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Modal(el));
  }
  
  // Static method to open modal by ID
  static open(id) {
    const modal = document.getElementById(id);
    if (modal && modal.classList.contains('vds-modal')) {
      const instance = new Modal(modal);
      instance.open();
      return instance;
    }
  }
  
  // Static method to close modal by ID
  static close(id) {
    const modal = document.getElementById(id);
    if (modal && modal.classList.contains('vds-modal')) {
      const instance = new Modal(modal);
      instance.close();
    }
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Modal.init());
  } else {
    Modal.init();
  }
}

export default Modal;
