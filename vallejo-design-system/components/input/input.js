/**
 * Input Component
 * 
 * A flexible input component with validation states and helper text.
 * 
 * Usage:
 *   <input type="text" class="vds-input" data-vds-component="input" />
 * 
 * States: default, focus, error, disabled
 * Types: text, email, password, number, tel, url, search
 */

import { Icon } from '../icon/icon.js';

export class Input {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      error: element.dataset.error === 'true',
      disabled: element.disabled,
      required: element.required,
      showClear: element.dataset.showClear !== 'false',
      search: element.type === 'search' || element.dataset.search === 'true',
      ...options,
    };
    
    this.wrapper = null;
    this.label = null;
    this.helperText = null;
    this.errorMessage = null;
    this.clearButton = null;
    this.searchIcon = null;
    this.errorIcon = null;
    
    this.init();
  }
  
  async init() {
    this.createWrapper();
    this.setupLabel();
    await this.setupIcons();
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
    
    if (this.options.error) {
      // setError is async but we don't need to wait for it here
      this.setError(this.options.errorMessage || 'This field is required');
    }
  }
  
  createWrapper() {
    // Wrap input if not already wrapped
    if (!this.element.parentElement.classList.contains('vds-input-wrapper')) {
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'vds-input-wrapper';
      
      this.element.parentNode.insertBefore(this.wrapper, this.element);
      this.wrapper.appendChild(this.element);
    } else {
      this.wrapper = this.element.parentElement;
    }
  }
  
  setupLabel() {
    // Check if label already exists
    const existingLabel = this.wrapper.querySelector('.vds-input-label');
    if (existingLabel) {
      this.label = existingLabel;
      return;
    }
    
    // Check if there's a <label> element associated with this input
    const labelFor = document.querySelector(`label[for="${this.element.id}"]`);
    if (labelFor) {
      this.label = labelFor;
      this.label.classList.add('vds-input-label');
      // Move label into wrapper if not already there
      if (this.label.parentElement !== this.wrapper) {
        this.wrapper.insertBefore(this.label, this.element);
      }
    }
  }
  
  async setupIcons() {
    // Search icon (left side)
    if (this.options.search) {
      this.element.classList.add('vds-input--search');
      if (!this.wrapper.querySelector('.vds-input__icon--left')) {
        this.searchIcon = document.createElement('span');
        this.searchIcon.className = 'vds-input__icon vds-input__icon--left';
        this.searchIcon.setAttribute('aria-hidden', 'true');
        this.wrapper.appendChild(this.searchIcon);
        // Load search icon
        await this.loadSearchIcon();
      }
    }
    
    // Clear icon (right side) - only show when input has value
    if (this.options.showClear && !this.options.disabled) {
      this.clearButton = document.createElement('button');
      this.clearButton.className = 'vds-input__icon vds-input__icon--right vds-input__icon--clear';
      this.clearButton.setAttribute('type', 'button');
      this.clearButton.setAttribute('aria-label', 'Clear input');
      this.clearButton.addEventListener('click', () => this.clearInput());
      this.wrapper.appendChild(this.clearButton);
      // Load clear icon
      await this.loadClearIcon();
      this.updateClearButtonVisibility();
    }
  }
  
  async loadSearchIcon() {
    try {
      const iconSvg = await Icon.getIcon('icon-search', '20', 'currentColor');
      if (iconSvg && this.searchIcon) {
        this.searchIcon.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn('Could not load search icon:', error);
      if (this.searchIcon) {
        this.searchIcon.innerHTML = '🔍';
      }
    }
  }
  
  async loadClearIcon() {
    try {
      const iconSvg = await Icon.getIcon('icon-close', '16', 'currentColor');
      if (iconSvg && this.clearButton) {
        this.clearButton.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn('Could not load clear icon:', error);
      if (this.clearButton) {
        this.clearButton.innerHTML = '×';
      }
    }
  }
  
  async loadErrorIcon() {
    try {
      const iconSvg = await Icon.getIcon('icon-warning', '20', 'currentColor');
      if (iconSvg && this.errorIcon) {
        this.errorIcon.innerHTML = iconSvg;
      }
    } catch (error) {
      console.warn('Could not load error icon:', error);
      if (this.errorIcon) {
        this.errorIcon.innerHTML = '⚠';
      }
    }
  }
  
  setupClasses() {
    this.element.classList.add('vds-input');
    
    if (this.options.error) {
      this.element.classList.add('vds-input--error');
      this.wrapper.classList.add('vds-input-wrapper--error');
    }
    
    if (this.options.disabled) {
      this.element.classList.add('vds-input--disabled');
      this.wrapper.classList.add('vds-input-wrapper--disabled');
    }
    
    if (this.options.search) {
      this.element.classList.add('vds-input--search');
    }
  }
  
  setupAttributes() {
    if (this.options.disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
    }
    
    if (this.options.required) {
      this.element.setAttribute('required', '');
      this.element.setAttribute('aria-required', 'true');
    }
    
    const id = this.element.id || `vds-input-${Math.random().toString(36).substr(2, 9)}`;
    this.element.id = id;
    this.element.setAttribute('aria-describedby', `${id}-helper`);
  }
  
  setupEventListeners() {
    this.element.addEventListener('focus', () => {
      this.element.classList.add('vds-input--focused');
      this.wrapper.classList.add('vds-input-wrapper--focused');
      this.updateClearButtonVisibility();
    });
    
    this.element.addEventListener('blur', () => {
      this.element.classList.remove('vds-input--focused');
      this.wrapper.classList.remove('vds-input-wrapper--focused');
      this.validate();
      this.updateClearButtonVisibility();
    });
    
    this.element.addEventListener('input', () => {
      if (this.options.error) {
        this.clearError();
      }
      this.updateClearButtonVisibility();
    });
  }
  
  updateClearButtonVisibility() {
    if (this.clearButton) {
      if (this.element.value && !this.options.disabled) {
        this.clearButton.style.display = 'flex';
      } else {
        this.clearButton.style.display = 'none';
      }
    }
  }
  
  clearInput() {
    this.element.value = '';
    this.element.focus();
    this.updateClearButtonVisibility();
    this.element.dispatchEvent(new Event('input', { bubbles: true }));
  }
  
  async setError(message) {
    this.options.error = true;
    this.element.classList.add('vds-input--error');
    this.wrapper.classList.add('vds-input-wrapper--error');
    this.element.setAttribute('aria-invalid', 'true');
    
    // Add error icon if not present
    if (!this.errorIcon) {
      this.errorIcon = document.createElement('span');
      this.errorIcon.className = 'vds-input__icon vds-input__icon--right vds-input__icon--error';
      this.errorIcon.setAttribute('aria-hidden', 'true');
      // Insert before clear button if it exists
      if (this.clearButton) {
        this.wrapper.insertBefore(this.errorIcon, this.clearButton);
      } else {
        this.wrapper.appendChild(this.errorIcon);
      }
      // Load error icon
      await this.loadErrorIcon();
    }
    this.errorIcon.style.display = 'flex';
    
    // Hide clear button when error is shown
    if (this.clearButton) {
      this.clearButton.style.display = 'none';
    }
    
    if (!this.errorMessage) {
      this.errorMessage = document.createElement('div');
      this.errorMessage.className = 'vds-input__error';
      this.errorMessage.id = `${this.element.id}-error`;
      this.wrapper.appendChild(this.errorMessage);
    }
    
    this.errorMessage.textContent = message;
    this.element.setAttribute('aria-describedby', `${this.element.id}-error`);
  }
  
  clearError() {
    this.options.error = false;
    this.element.classList.remove('vds-input--error');
    this.wrapper.classList.remove('vds-input-wrapper--error');
    this.element.removeAttribute('aria-invalid');
    
    // Hide error icon
    if (this.errorIcon) {
      this.errorIcon.style.display = 'none';
    }
    
    // Show clear button again if input has value
    this.updateClearButtonVisibility();
    
    if (this.errorMessage) {
      this.errorMessage.remove();
      this.errorMessage = null;
    }
    
    this.element.setAttribute('aria-describedby', `${this.element.id}-helper`);
  }
  
  setHelperText(text) {
    if (!this.helperText) {
      this.helperText = document.createElement('div');
      this.helperText.className = 'vds-input__helper vds-input__supporting';
      this.helperText.id = `${this.element.id}-helper`;
      this.wrapper.appendChild(this.helperText);
    }
    
    this.helperText.textContent = text;
  }
  
  setSupportingText(text) {
    this.setHelperText(text);
  }
  
  validate() {
    if (this.element.validity.valid) {
      this.clearError();
      return true;
    } else {
      const message = this.element.validationMessage || 'Please enter a valid value';
      this.setError(message);
      return false;
    }
  }
  
  setDisabled(disabled) {
    this.options.disabled = disabled;
    
    if (disabled) {
      this.element.setAttribute('disabled', '');
      this.element.setAttribute('aria-disabled', 'true');
      this.element.classList.add('vds-input--disabled');
    } else {
      this.element.removeAttribute('disabled');
      this.element.removeAttribute('aria-disabled');
      this.element.classList.remove('vds-input--disabled');
    }
  }
  
  static init(selector = '[data-vds-component="input"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new Input(el));
  }
}

// Auto-initialize if script is loaded directly
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Input.init());
  } else {
    Input.init();
  }
}

export default Input;
