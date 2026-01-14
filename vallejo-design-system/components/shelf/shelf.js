/**
 * Shelf Component (Side Panel)
 * 
 * A side panel component that slides in from the side.
 * 
 * Usage:
 *   <div class="vds-shelf" data-vds-component="shelf" data-side="right">
 *     <div class="vds-shelf__header">Header</div>
 *     <div class="vds-shelf__body">Content</div>
 *     <div class="vds-shelf__footer">Footer</div>
 *   </div>
 * 
 * Sides: left, right
 */

import { Icon } from '../icon/icon.js';

export class Shelf {
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
    this.element.classList.add('vds-shelf');
    this.element.classList.add(`vds-shelf--${this.options.side}`);
  }
  
  setupAttributes() {
    this.element.setAttribute('role', 'dialog');
    this.element.setAttribute('aria-modal', 'true');
    this.element.setAttribute('aria-hidden', this.isOpen ? 'false' : 'true');
  }
  
  createOverlay() {
    if (!this.options.overlay) return;
    
    this.overlay = document.createElement('div');
    this.overlay.className = 'vds-shelf__overlay';
    this.overlay.setAttribute('aria-hidden', 'true');
    this.overlay.addEventListener('click', () => this.close());
    document.body.appendChild(this.overlay);
  }
  
  setupEventListeners() {
    // Close button
    const closeBtn = this.element.querySelector('.vds-shelf__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    
    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
  
  open() {
    this.isOpen = true;
    this.element.classList.add('vds-shelf--open');
    this.element.setAttribute('aria-hidden', 'false');
    
    if (this.overlay) {
      this.overlay.classList.add('vds-shelf__overlay--visible');
      this.overlay.setAttribute('aria-hidden', 'false');
    }
    
    document.body.style.overflow = 'hidden';
    
    this.element.dispatchEvent(new CustomEvent('shelf:open', {
      bubbles: true,
    }));
  }
  
  close() {
    this.isOpen = false;
    this.element.classList.remove('vds-shelf--open');
    this.element.setAttribute('aria-hidden', 'true');
    
    if (this.overlay) {
      this.overlay.classList.remove('vds-shelf__overlay--visible');
      this.overlay.setAttribute('aria-hidden', 'true');
    }
    
    document.body.style.overflow = '';
    
    this.element.dispatchEvent(new CustomEvent('shelf:close', {
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
  
  static init(selector = '[data-vds-component="shelf"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Shelf(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Shelf.init());
  } else {
    Shelf.init();
  }
}

export default Shelf;
