/**
 * Mobile Date Picker Component
 * 
 * A mobile-optimized date picker component.
 * 
 * Usage:
 *   <div class="vds-mobile-date-picker" data-vds-component="mobile-date-picker">
 *     <input type="date" class="vds-mobile-date-picker__input">
 *   </div>
 */

export class MobileDatePicker {
  constructor(element, options = {}) {
    this.element = element;
    this.inputElement = element.querySelector('input') || element.querySelector('.vds-mobile-date-picker__input');
    
    if (!this.inputElement && element.tagName === 'INPUT') {
      this.inputElement = element;
      this.element = this.wrapInput();
    }
    
    this.options = {
      minDate: options.minDate || null,
      maxDate: options.maxDate || null,
      ...options,
    };
    
    this.init();
  }
  
  wrapInput() {
    if (this.inputElement.parentElement.classList.contains('vds-mobile-date-picker')) {
      return this.inputElement.parentElement;
    }
    
    const wrapper = document.createElement('div');
    wrapper.className = 'vds-mobile-date-picker';
    this.inputElement.parentNode.insertBefore(wrapper, this.inputElement);
    wrapper.appendChild(this.inputElement);
    this.inputElement.classList.add('vds-mobile-date-picker__input');
    
    return wrapper;
  }
  
  init() {
    this.setupClasses();
    this.setupAttributes();
    this.setupEventListeners();
  }
  
  setupClasses() {
    this.element.classList.add('vds-mobile-date-picker');
    if (this.inputElement) {
      this.inputElement.classList.add('vds-mobile-date-picker__input');
      if (!this.inputElement.type) {
        this.inputElement.type = 'date';
      }
    }
  }
  
  setupAttributes() {
    if (this.inputElement) {
      if (this.options.minDate) {
        this.inputElement.setAttribute('min', this.formatDateForInput(this.options.minDate));
      }
      if (this.options.maxDate) {
        this.inputElement.setAttribute('max', this.formatDateForInput(this.options.maxDate));
      }
    }
  }
  
  setupEventListeners() {
    if (this.inputElement) {
      this.inputElement.addEventListener('change', () => {
        this.element.dispatchEvent(new CustomEvent('mobile-date-picker:change', {
          detail: { date: this.inputElement.value },
          bubbles: true,
        }));
      });
    }
  }
  
  formatDateForInput(date) {
    if (!date) return '';
    if (typeof date === 'string') return date;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  getValue() {
    return this.inputElement?.value || null;
  }
  
  setValue(date) {
    if (this.inputElement) {
      this.inputElement.value = this.formatDateForInput(date);
    }
  }
  
  static init(selector = '[data-vds-component="mobile-date-picker"]') {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).map(el => new MobileDatePicker(el));
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MobileDatePicker.init());
  } else {
    MobileDatePicker.init();
  }
}

export default MobileDatePicker;
