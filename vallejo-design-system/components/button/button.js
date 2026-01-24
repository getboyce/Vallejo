/**
 * Button Component
 * 
 * A flexible button component with multiple variants and sizes.
 * 
 * Usage:
 *   <button class="vds-button vds-button--primary" data-vds-component="button">
 *     Click Me
 *   </button>
 * 
 * Variants: 
 *   - primary (solid blue)
 *   - secondary (solid dark blue)
 *   - outline (outline primary blue)
 *   - outline-secondary (outline dark blue)
 *   - outline-tertiary (outline gray)
 *   - tertiary (text-only primary blue)
 *   - tertiary-secondary (text-only dark blue)
 *   - tertiary-gray (text-only gray)
 *   - disabled-solid (solid gray)
 *   - watchlist (with heart icon)
 *   - watchlist-icon-only (icon only)
 *   - danger, ghost
 * Sizes: sm, md, lg, xl
 * States: default, hover, active, disabled, loading
 */

import { colors, spacing, shadows, typography } from '../../tokens/index.js';

export class Button {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      variant: element.dataset.variant || 'primary',
      size: element.dataset.size || 'md',
      loading: element.dataset.loading === 'true',
      disabled: element.disabled,
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
    
    if (this.options.loading) {
      this.setLoading(true);
    }
  }
  
  setupClasses() {
    const baseClass = 'vds-button';
    const variantClass = `vds-button--${this.options.variant}`;
    const sizeClass = `vds-button--${this.options.size}`;
    
    this.element.classList.add(baseClass, variantClass, sizeClass);
    
    // Add icon classes if icons are present
    if (this.element.querySelector('.vds-button__icon--left')) {
      this.element.classList.add('vds-button--has-icon-left');
    }
    if (this.element.querySelector('.vds-button__icon--right')) {
      this.element.classList.add('vds-button--has-icon-right');
    }
    if (this.element.querySelector('.vds-button__caret')) {
      this.element.classList.add('vds-button--has-caret');
    }
  }
  
  setupAttributes() {
    if (this.options.disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    }
    
    this.element.setAttribute('type', this.element.type || 'button');
  }
  
  setupEventListeners() {
    this.element.addEventListener('click', (e) => {
      if (this.options.disabled || this.options.loading) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
  }
  
  setLoading(loading) {
    this.options.loading = loading;
    
    if (loading) {
      this.element.setAttribute('data-loading', 'true');
      this.element.setAttribute('aria-busy', 'true');
      this.originalContent = this.element.innerHTML;
      this.element.innerHTML = `
        <span class="vds-button__spinner"></span>
        <span class="vds-button__text">${this.element.textContent.trim()}</span>
      `;
    } else {
      this.element.removeAttribute('data-loading');
      this.element.removeAttribute('aria-busy');
      if (this.originalContent) {
        this.element.innerHTML = this.originalContent;
      }
    }
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    } else {
      this.element.removeAttribute('disabled');
      this.element.removeAttribute('aria-disabled');
    }
  }
  
  static init(selector = '[data-vds-component="button"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Button(el));
  }
}

// Auto-initialize if script is loaded directly
if (typeof window !== 'undefined') {
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Button.init());
  } else {
    Button.init();
  }
}

export default Button;
