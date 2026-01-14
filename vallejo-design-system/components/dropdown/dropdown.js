/**
 * Dropdown Component (Input Dropdown)
 * 
 * A dropdown/select component for selecting options.
 * 
 * Usage:
 *   <div class="vds-dropdown" data-vds-component="dropdown">
 *     <select class="vds-dropdown__select">
 *       <option>Option 1</option>
 *     </select>
 *   </div>
 * 
 * States: default, focus, error, disabled
 */

export class Dropdown {
  constructor(element, options = {}) {
    this.element = element;
    this.selectElement = element.querySelector('select') || element.querySelector('.vds-dropdown__select');
    
    if (!this.selectElement && element.tagName === 'SELECT') {
      this.selectElement = element;
      this.element = this.wrapSelect();
    }
    
    this.options = {
      error: element.dataset.error === 'true',
      disabled: this.selectElement?.disabled || element.dataset.disabled === 'true',
      helperText: element.dataset.helperText || null,
      errorText: element.dataset.errorText || null,
      ...options,
    };
    
    this.helperTextEl = null;
    this.errorTextEl = null;
    
    this.init();
  }
  
  wrapSelect() {
    if (this.selectElement.parentElement.classList.contains('vds-dropdown')) {
      return this.selectElement.parentElement;
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'vds-dropdown';
    this.selectElement.parentNode.insertBefore(wrapper, this.selectElement);
    wrapper.appendChild(this.selectElement);
    this.selectElement.classList.add('vds-dropdown__select');
    
    return wrapper;
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.createHelperText();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-dropdown');
    this.selectElement.classList.add('vds-dropdown__select');
    
    if (this.options.error) {
      this.element.classList.add('vds-dropdown--error');
    }
    
    if (this.options.disabled) {
      this.element.classList.add('vds-dropdown--disabled');
    }
  }
  
  setupAttributes() {
    if (this.selectElement && !this.selectElement.hasAttribute('id')) {
      const id = `vds-dropdown-${Math.random().toString(36).substr(2, 9)}`;
      this.selectElement.setAttribute('id', id);
    }
    
    if (this.options.disabled) {
      this.selectElement?.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    }
  }
  
  createHelperText() {
    if (this.options.helperText || this.options.errorText) {
      const textEl = document.createElement('div');
      textEl.className = this.options.error 
        ? 'vds-dropdown__error-text' 
        : 'vds-dropdown__helper-text';
      
      if (this.options.error && this.options.errorText) {
        textEl.textContent = this.options.errorText;
        this.errorTextEl = textEl;
      } else if (this.options.helperText) {
        textEl.textContent = this.options.helperText;
        this.helperTextEl = textEl;
      }
      
      this.element.appendChild(textEl);
    }
  }
  
  setupEventListeners() {
    if (this.selectElement) {
      this.selectElement.addEventListener('focus', () => {
        this.element.classList.add('vds-dropdown--focus');
      });
      
      this.selectElement.addEventListener('blur', () => {
        this.element.classList.remove('vds-dropdown--focus');
      });
      
      this.selectElement.addEventListener('change', () => {
        this.validate();
      });
    }
  }
  
  setError(error, errorText = null) {
    this.options.error = error;
    
    if (error) {
      this.element.classList.add('vds-dropdown--error');
      if (errorText) {
        this.options.errorText = errorText;
        if (this.errorTextEl) {
          this.errorTextEl.textContent = errorText;
        } else {
          if (this.helperTextEl) {
            this.helperTextEl.remove();
            this.helperTextEl = null;
          }
          this.createHelperText();
        }
      }
    } else {
      this.element.classList.remove('vds-dropdown--error');
      if (this.errorTextEl) {
        this.errorTextEl.remove();
        this.errorTextEl = null;
      }
      if (this.options.helperText) {
        this.createHelperText();
      }
    }
  }
  
  setHelperText(text) {
    this.options.helperText = text;
    this.options.error = false;
    this.element.classList.remove('vds-dropdown--error');
    
    if (this.errorTextEl) {
      this.errorTextEl.remove();
      this.errorTextEl = null;
    }
    
    if (text) {
      if (this.helperTextEl) {
        this.helperTextEl.textContent = text;
      } else {
        this.createHelperText();
      }
    } else if (this.helperTextEl) {
      this.helperTextEl.remove();
      this.helperTextEl = null;
    }
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.selectElement?.setAttribute('disabled', '');
      this.element.classList.add('vds-dropdown--disabled');
      this.element.setAttribute('aria-disabled', 'true');
    } else {
      this.selectElement?.removeAttribute('disabled');
      this.element.classList.remove('vds-dropdown--disabled');
      this.element.removeAttribute('aria-disabled');
    }
  }
  
  validate() {
    // Basic validation - can be extended
    if (this.selectElement?.hasAttribute('required') && !this.selectElement.value) {
      this.setError(true, 'This field is required');
      return false;
    }
    
    this.setError(false);
    return true;
  }
  
  static init(selector = '[data-vds-component="dropdown"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Dropdown(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Dropdown.init());
  } else {
    Dropdown.init();
  }
}

export default Dropdown;
