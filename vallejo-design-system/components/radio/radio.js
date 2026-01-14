/**
 * Radio Button Component
 * 
 * A radio button component for single selection within a group.
 * 
 * Usage:
 *   <input type="radio" name="group" class="vds-radio" data-vds-component="radio" />
 * 
 * States: default, checked, disabled
 */

export class Radio {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      disabled: element.disabled,
      ...options,
    };
    
    this.init();
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-radio');
    
    if (this.options.disabled) {
      this.element.classList.add('vds-radio--disabled');
    }
  }
  
  setupAttributes() {
    if (this.options.disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    }
    
    this.element.setAttribute('type', 'radio');
    this.element.setAttribute('aria-checked', this.element.checked ? 'true' : 'false');
  }
  
  setupEventListeners() {
    this.element.addEventListener('change', () => {
      this.element.setAttribute('aria-checked', this.element.checked ? 'true' : 'false');
    });
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.classList.add('vds-radio--disabled');
    } else {
      this.element.removeAttribute('disabled');
      this.element.removeAttribute('aria-disabled');
      this.element.classList.remove('vds-radio--disabled');
    }
  }
  
  static init(selector = '[data-vds-component="radio"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Radio(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Radio.init());
  } else {
    Radio.init();
  }
}

export default Radio;
