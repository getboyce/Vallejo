/**
 * Checkbox Component
 * 
 * A checkbox component with multiple states and variants.
 * 
 * Usage:
 *   <input type="checkbox" class="vds-checkbox" data-vds-component="checkbox" />
 * 
 * States: default, checked, indeterminate, disabled
 */

export class Checkbox {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      indeterminate: element.dataset.indeterminate === 'true',
      disabled: element.disabled,
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
    
    if (this.options.indeterminate) {
      this.setIndeterminate(true);
    }
  }
  
  setupClasses() {
    this.element.classList.add('vds-checkbox');
    
    if (this.options.disabled) {
      this.element.classList.add('vds-checkbox--disabled');
    }
  }
  
  setupAttributes() {
    if (this.options.disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    }
    
    this.element.setAttribute('type', 'checkbox');
    this.element.setAttribute('aria-checked', this.element.checked ? 'true' : 'false');
  }
  
  setupEventListeners() {
    this.element.addEventListener('change', () => {
      this.element.setAttribute('aria-checked', this.element.checked ? 'true' : 'false');
      if (this.options.indeterminate && this.element.checked) {
        this.setIndeterminate(false);
      }
    });
  }
  
  setIndeterminate(indeterminate) {
    this.options.indeterminate = indeterminate;
    this.element.indeterminate = indeterminate;
    this.element.setAttribute('data-indeterminate', indeterminate ? 'true' : 'false');
    this.element.setAttribute('aria-checked', indeterminate ? 'mixed' : (this.element.checked ? 'true' : 'false'));
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.classList.add('vds-checkbox--disabled');
    } else {
      this.element.removeAttribute('disabled');
      this.element.removeAttribute('aria-disabled');
      this.element.classList.remove('vds-checkbox--disabled');
    }
  }
  
  static init(selector = '[data-vds-component="checkbox"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Checkbox(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Checkbox.init());
  } else {
    Checkbox.init();
  }
}

export default Checkbox;
